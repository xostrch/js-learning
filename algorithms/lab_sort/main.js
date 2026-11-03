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



//wbudowane
let builtInSortRandomTime = sredniCzas(builtInSort, randomData, 20);
let builtInSortNearlySortedTime = sredniCzas(builtInSort, nearlySortedData, 20);
let builtInSortManyDuplicatesTime = sredniCzas(builtInSort, manyDuplicatesData, 20);
let builtInSortReversedTime = sredniCzas(builtInSort, reversedData, 20);

document.getElementById('builtInSortTableRandom').innerHTML = builtInSortRandomTime;
document.getElementById('builtInSortTableNearly').innerHTML = builtInSortNearlySortedTime;
document.getElementById('builtInSortTableDupli').innerHTML = builtInSortManyDuplicatesTime;
document.getElementById('builtInSortTableReversed').innerHTML = builtInSortReversedTime;



// quick i babelkowe
let quickBubbleSortRandomTime = sredniCzas(quickBubbleSort, randomData, 20);
let quickBubbleSortNearlySortedTime = sredniCzas(quickBubbleSort, nearlySortedData, 20);
let quickBubbleSortManyDuplicatesTime = sredniCzas(quickBubbleSort, manyDuplicatesData, 20);
let quickBubbleSortReversedTime = sredniCzas(quickBubbleSort, reversedData, 20);

document.getElementById('quickBubbleSortTableRandom').innerHTML = quickBubbleSortRandomTime;
document.getElementById('quickBubbleSortTableNearly').innerHTML = quickBubbleSortNearlySortedTime;
document.getElementById('quickBubbleSortTableDupli').innerHTML = quickBubbleSortManyDuplicatesTime;
document.getElementById('quickBubbleSortTableReversed').innerHTML = quickBubbleSortReversedTime;



// merge i babelkowe
let mergeBubbleSortRandomTime = sredniCzas(mergeBubbleSort, randomData, 20);
let mergeBubbleSortNearlySortedTime = sredniCzas(mergeBubbleSort, nearlySortedData, 20);
let mergeBubbleSortManyDuplicatesTime = sredniCzas(mergeBubbleSort, manyDuplicatesData, 20);
let mergeBubbleSortReversedTime = sredniCzas(mergeBubbleSort, reversedData, 20);

document.getElementById('mergeBubbleSortTableRandom').innerHTML = mergeBubbleSortRandomTime;
document.getElementById('mergeBubbleSortTableNearly').innerHTML = mergeBubbleSortNearlySortedTime;
document.getElementById('mergeBubbleSortTableDupli').innerHTML = mergeBubbleSortManyDuplicatesTime;
document.getElementById('mergeBubbleSortTableReversed').innerHTML = mergeBubbleSortReversedTime;