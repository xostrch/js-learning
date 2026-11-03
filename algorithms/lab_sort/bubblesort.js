function bubbleSort(A) {
    let n = A.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (A[j] > A[j + 1]) {
                [A[j], A[j + 1]] = [A[j + 1], A[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return A;
}


//to do hybryd zeby tego na gorze nie przerabiac
function bubbleSortRange(A, p, r) {
    for (let i = p; i < r; i++) {
        let swapped = false;
        for (let j = p; j < r - (i - p); j++) {
            if (A[j] > A[j + 1]) {
                [A[j], A[j + 1]] = [A[j + 1], A[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return A;
}