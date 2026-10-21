function merge_sort(A){
    if (A.length <= 1){
        return A;
    }
    mid = Math.floor(A.length / 2);
    left = merge_sort(A.slice(0,mid));
    right = merge_sort(A.slice(mid));

    return merge_sort(left,right);
}

function merge(L, R){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < L.length && j < R.length){
        if (L[i] <= R[j]){
            result.append(L[i]);
            i += 1;
        }else{
            result.append(R[j])
            j += 1;
        }
    }
    return result.concat(left.slice(i), right.slice(j));
}



let A = [11,2,3,4,5,17,8,9,7];
merge_sort(A);
console.log(A);