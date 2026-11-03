function mergeSort(A) {
    if (A.length <= 1) {
        return A;
    }
    let mid = Math.floor(A.length / 2);
    let left = mergeSort(A.slice(0, mid));
    let right = mergeSort(A.slice(mid));

    return merge(left, right);
}

function merge(L, R) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < L.length && j < R.length) {
        if (L[i] <= R[j]) {
            result.push(L[i]);
            i += 1;
        } else {
            result.push(R[j]);
            j += 1;
        }
    }
    return result.concat(L.slice(i), R.slice(j));
}