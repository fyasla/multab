import { writable } from 'svelte/store';

export enum GameStatus {
  notStarted,
  started,
  paused,
  finished
}

function shuffle(array: number[]) :number[] {
  //shuffe randomly the array
    let currentIndex:number = array.length, temporaryValue: number, randomIndex: number;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function createProductList() :number[] {
  let productsList: number[] = [];
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= i; j++) {
      productsList.push(i * j);
    }
  }
  shuffle(productsList);
  return (productsList);
}

export const products = writable(createProductList());
export const currentIndex = writable(0);
export const lastSquareClicked = writable({x: -1, y: -1});
export const timer = writable(0);
export const gameStatus = writable(GameStatus.notStarted);



