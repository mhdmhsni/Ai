import { useState } from "react";
import { useNavigate } from "react-router";
import {INITIAL_DIFFICULTY_LEVELS} from "../utils/static";
import {Difficulty, DifficultyLevels} from "../utils/types";

const Difficulties = () => {
  const [difficulties] = useState<Difficulty[]>(INITIAL_DIFFICULTY_LEVELS);

  const navigate = useNavigate();
  const startGame = (level: DifficultyLevels) => {
    navigate(`board?difficulty=${level}`);
  };

  return (
    <div className="difficulties-list-wrapper">
      {difficulties.map((element, key) => (
        <button
          onClick={() => startGame(element.difficultyLevel)}
          className="btn btn-difficulty"
          key={key}
        >
          {element.title}
        </button>
      ))}
    </div>
  );
};

export default Difficulties;
