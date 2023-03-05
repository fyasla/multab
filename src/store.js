import { writable } from 'svelte/store';
export var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["notStarted"] = 0] = "notStarted";
    GameStatus[GameStatus["started"] = 1] = "started";
    GameStatus[GameStatus["paused"] = 2] = "paused";
    GameStatus[GameStatus["won"] = 3] = "won";
})(GameStatus || (GameStatus = {}));
export function shuffle(array) {
    //shuffe randomly the array
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function createProductList() {
    const productsList = [];
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= i; j++) {
            productsList.push(i * j);
        }
    }
    shuffle(productsList);
    return (productsList);
}
export const products = writable(createProductList());
export const currentIndex = writable(-1);
export const lastSquareClicked = writable({ x: -1, y: -1 });
export const timer = writable(0);
export const malusTime = writable(0);
export const gameStatus = writable(GameStatus.notStarted);
export const hoveredSquare = writable({ x: -1, y: -1 });
//# sourceMappingURL=store.js.map