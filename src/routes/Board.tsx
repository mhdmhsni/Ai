import { useEffect, useState } from "react";
import Card from "../components/Card";

const Board = () => {
  const generateRandomDigit = () => Math.floor(Math.random() * 8) + 1;

  const [cards, setCards] = useState<number[]>([]);
  const [generated, setGenerated] = useState<boolean>(false);

  useEffect(() => {
    if (!generated) {
      setGenerated(true);
      for (let i = 1; i < 10; i++) {
        setCards((state) => [...state, ...[generateRandomDigit()]]);
      }
    }
  }, [cards.length, generated]);

  return (
    <div className="board">
      {cards.map((el, key) => (
        <Card cardNumber={el} key={key} />
      ))}
    </div>
  );
};

export default Board;
