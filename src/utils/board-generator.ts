import gameConfig from "./game-config";


const generateEmptyBoard = (cells: number, initialValue: number | null | undefined) => Array(cells).fill(initialValue);

const generateRandomNumber = (from: number, to: number) => Math.floor(Math.random() * (to - from) + from);

const isAFreeIndexByRange = (source: number[], index: number, range: number) => {
    for (let i = 0; i <= range; i++) {
        console.log({source, index, next :index + i})
        if (source.includes(index + i)) return false;
    }

    return true;
}
export const generateBoard = (cells: number): number[] => {
    let currentCardNumber = 1;
    let occupiedIndexes: number[] = [];
    let board = generateEmptyBoard(cells, 0);

    while (currentCardNumber < 10) {
        let updatedBoard: number[] = [];

        const randomIndex = generateRandomNumber(0, gameConfig.boardsCells);

        if (isAFreeIndexByRange(occupiedIndexes, randomIndex, 6)) {
            occupiedIndexes.push(randomIndex);

            updatedBoard = [
                ...board.slice(0, randomIndex),
                currentCardNumber,
                ...board.slice(randomIndex + 1),
            ];

            board = [...updatedBoard];

            currentCardNumber += 1;
        }
    }

    return [...board];
}


