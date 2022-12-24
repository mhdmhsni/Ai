import {DifficultyLevels} from "./types";
import {INITIAL_DIFFICULTY_LEVELS} from "./static";

export const mapDifficultyToTime = (level: DifficultyLevels) => {
    const difficulty = INITIAL_DIFFICULTY_LEVELS.find(el => el.difficultyLevel === level);
    if (difficulty) return difficulty.revealTimeoutDuration;
    else return 0;
};
