export type DifficultyLevelTitles = "Human" | "Chimpanzee" | "Ai (愛)";
export type DifficultyLevels = 'easy' | 'hard' | 'impossible';
export interface Difficulty {
    title: DifficultyLevelTitles;
    difficultyLevel: DifficultyLevels;
    /**
     * How many milliseconds to show the cards to users before hiding the cards
     */
    revealTimeoutDuration: number;
}
