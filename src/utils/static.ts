import {Difficulty} from "./types";

export const INITIAL_DIFFICULTY_LEVELS: Difficulty[] = [
    {
        title: "Human",
        difficultyLevel: "easy",
        revealTimeoutDuration: 10000
    },
    {
        title: "Chimpanzee",
        difficultyLevel: "hard",
        revealTimeoutDuration: 5000
    },
    {
        title: "Ai (愛)",
        difficultyLevel: "impossible",
        revealTimeoutDuration: 500
    },
]
