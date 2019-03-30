
const toBeSorted = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8,22]; //array to be sorted.

let bubbleSort =(toBeSorted)=>{      // arrow function is used.
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < toBeSorted.length; i++) {
      if(toBeSorted[i] && toBeSorted[i + 1] && toBeSorted[i] > toBeSorted[i + 1]) {
        [toBeSorted[i], toBeSorted[i + 1]] = [toBeSorted[i + 1], toBeSorted[i]];
        swapped = true;
      }
    }
  } while(swapped);
  return toBeSorted;  
}


console.log(bubbleSort(toBeSorted)); 