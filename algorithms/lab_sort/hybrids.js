function quickBubbleSort(A, p = 0, r = A.length - 1) {
    if (r - p + 1 <= 16) {
        bubbleSortRange(A, p, r);
        return A;
    }
    let q = partition(A, p, r);
    quickBubbleSort(A, p, q - 1);
    quickBubbleSort(A, q + 1, r);
    return A;
}

function mergeBubbleSort(A) {
    if (A.length <= 16) {
        return bubbleSortRange(A, 0, A.length - 1);
    }
    let mid = Math.floor(A.length / 2);
    let left = mergeBubbleSort(A.slice(0, mid));
    let right = mergeBubbleSort(A.slice(mid));
    return merge(left, right);
}