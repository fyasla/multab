import { writable } from 'svelte/store';

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



