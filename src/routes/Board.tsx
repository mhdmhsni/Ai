import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Card from "../components/Card";
import { DifficultyLevels } from "../utils/types";
import { mapDifficultyToTime } from "../utils/data-mapper";
import { generateBoard } from "../utils/board-generator";
import gameConfig from "../utils/game-config";

const Board = () => {
  let [board, setBoard] = useState<Array<number>>([]);
  const [nextNumber, setNextNumber] = useState<number>(1);
  const navigate = useNavigate();
  useEffect(() => {
    setBoard(generateBoard(gameConfig.boardsCells));
  }, []);

  const hideAfterTimeout = useCallback(() => {
    const url = new URL(window.location.href);
    const difficulty = url.searchParams.get("difficulty")! as DifficultyLevels;
    return () =>
      setTimeout(() => {
        setRevealed(false);
      }, mapDifficultyToTime(difficulty));
  }, []);

  const [revealed, setRevealed] = useState<boolean>(true);
  useEffect(() => {
    const timeout = hideAfterTimeout()();
    return () => {
      clearTimeout(timeout);
    };
  }, [hideAfterTimeout]);

  const removeTheCardFromBoard = (num: number) => {
    const timeout = setTimeout(() => {
      const index = board.indexOf(num);
      const updatedBoard = [
        ...board.slice(0, index),
        0,
        ...board.slice(index + 1),
      ];
      setBoard(updatedBoard);
      clearTimeout(timeout);
    }, 100);
  };

  const revealCorrectCard = (e: EventTarget & HTMLDivElement) => {
    e.classList.remove("card-hidden");
  };

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const targetElement = e.currentTarget as HTMLDivElement;
    const cardText = targetElement.getElementsByClassName('card-text')[0] as HTMLSpanElement;
    const cardValue = cardText.innerText;
    const num = parseInt(cardValue, 10);
    if (num === nextNumber) {
      revealCorrectCard(targetElement);
      removeTheCardFromBoard(num);
      setNextNumber((state) => state + 1);
      if (nextNumber === 9) {
        alert("Hey you are as good as a chimpanzee! Congrats! :D :P");
        navigate({ pathname: "/" }, { replace: true });
      }
    } else {
      alert("You are not chimpanzee enough, sorry! :(((");
      navigate({ pathname: "/" }, { replace: true });
    }
  };

  return (
    <div className="board">
      {board.map((el, key) => (
        <Card
          cardClickHandler={clickHandler}
          cardNumber={el}
          revealed={revealed}
          key={key}
        />
      ))}
    </div>
  );
};

export default Board;
