import { useState } from "react";
import { useNavigate } from "react-router";

export type DifficultyLevel = "Human" | "Chimpanzee" | "Ai (愛)";

const Difficulties = () => {
  const [difficulties] = useState<DifficultyLevel[]>([
    "Human",
    "Chimpanzee",
    "Ai (愛)",
  ]);

  const navigate = useNavigate();
  const startGame = (level: DifficultyLevel) => {
    navigate(`board?difficulty=${level}`);
  };

  return (
    <div className="d-flex justify-center align-items-center">
      {difficulties.map((element, key) => (
        <button
          onClick={() => startGame(element)}
          className="btn btn-difficulty"
          key={key}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

export default Difficulties;
