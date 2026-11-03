function sredniCzas(sortFn, data, ileRazy) {
  let suma = 0;
  for (let i = 0; i < ileRazy; i++) {
    let copiedData = [...data];
    let start = performance.now();
    sortFn(copiedData, 0, copiedData.length - 1);
    suma += performance.now() - start;
  }
  return (suma / ileRazy).toFixed(2);
}//ai poniewaz zwykly consoleTime daje rozne wyniki przy odswiezeniu wiec dlatego taka funkcja


//quicksort
let quickSortRandomTime = sredniCzas(quickSort, randomData, 20);
let quickSortNearlySortedTime = sredniCzas(quickSort, nearlySortedData, 20);
let quickSortManyDuplicatesTime = sredniCzas(quickSort, manyDuplicatesData, 20);
let quickSortReversedTime = sredniCzas(quickSort, reversedData, 20);

document.getElementById('quickSortTableRandom').innerHTML = quickSortRandomTime;
document.getElementById('quickSortTableNearly').innerHTML = quickSortNearlySortedTime;
document.getElementById('quickSortTableDupli').innerHTML = quickSortManyDuplicatesTime;
document.getElementById('quickSortTableReversed').innerHTML = quickSortReversedTime;


//mergesory
let mergeSortRandomTime = sredniCzas(mergeSort, randomData, 20);
let mergeSortNearlySortedTime = sredniCzas(mergeSort, nearlySortedData, 20);
let mergeSortManyDuplicatesTime = sredniCzas(mergeSort, manyDuplicatesData, 20);
let mergeSortReversedTime = sredniCzas(mergeSort, reversedData, 20);

document.getElementById('mergeSortTableRandom').innerHTML = mergeSortRandomTime;
document.getElementById('mergeSortTableNearly').innerHTML = mergeSortNearlySortedTime;
document.getElementById('mergeSortTableDupli').innerHTML = mergeSortManyDuplicatesTime;
document.getElementById('mergeSortTableReversed').innerHTML = mergeSortReversedTime;



//bubblwsort
let bubbleSortRandomTime = sredniCzas(bubbleSort, randomData, 3);
let bubbleSortNearlySortedTime = sredniCzas(bubbleSort, nearlySortedData, 3);
let bubbleSortManyDuplicatesTime = sredniCzas(bubbleSort, manyDuplicatesData, 3);
let bubbleSortReversedTime = sredniCzas(bubbleSort, reversedData, 3);

document.getElementById('bubbleSortTableRandom').innerHTML = bubbleSortRandomTime;
document.getElementById('bubbleSortTableNearly').innerHTML = bubbleSortNearlySortedTime;
document.getElementById('bubbleSortTableDupli').innerHTML = bubbleSortManyDuplicatesTime;
document.getElementById('bubbleSortTableReversed').innerHTML = bubbleSortReversedTime;