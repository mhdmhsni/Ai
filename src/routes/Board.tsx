import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Card from "../components/Card";
import { DifficultyLevel } from "../components/Difficulties";

const mapDifficultyToTime = (difficulty: DifficultyLevel) => {
  if (difficulty === "Human") return 12000;
  if (difficulty === "Chimpanzee") return 5000;
  if (difficulty === "Ai (愛)") return 500;
  return 0;
};
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Board = () => {
  let [board, setBoard] = useState<Array<number>>(Array(35).fill(0));
  const [usedIndexes, setUsedIndexes] = useState<number[]>([]);
  const [nextNumber, setNextNumber] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (cards.length > 0) {
      let updatedBoard: number[] = [];

      const randomIndex = Math.floor(Math.random() * 35);
      if (!usedIndexes.includes(randomIndex)) {
        setUsedIndexes((state) => [...state, randomIndex]);
        const firstCardNumber = cards.splice(0, 1)[0];

        updatedBoard = [
          ...board.slice(0, randomIndex),
          firstCardNumber,
          ...board.slice(randomIndex + 1),
        ];
        setBoard(updatedBoard);
      } else {
        setUsedIndexes((state) => [...state]);
      }
    }
  }, [board, usedIndexes]);

  const hideAfterTimeout = useCallback(() => {
    const url = new URL(window.location.href);
    const difficulty = url.searchParams.get("difficulty")! as DifficultyLevel;
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
    const index = board.indexOf(num);
    const updatedBoard = [
      ...board.slice(0, index),
      0,
      ...board.slice(index + 1),
    ];
    setBoard(updatedBoard);
  };

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const num = parseInt(e.currentTarget.innerText, 10);
    if (num === nextNumber) {
      removeTheCardFromBoard(num);
      setNextNumber((state) => state + 1);
      if (nextNumber === 9) {
        alert("Hey you are as good as a chimpanzee! Congrats! :D :P");
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
