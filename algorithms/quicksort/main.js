function partition(A,p,r){
    let randomIndex = Math.floor(Math.random() * (r - p + 1)) + p;
    [A[randomIndex], A[r]] = [A[r], A[randomIndex]];
    
    let x = A[r] // element wyznaczajacy podzial
    let i = p;
    for (let j = p; j < r; j++) {
        if (A[j] <= x) {
            [A[i], A[j]] = [A[j], A[i]];
            i++;
        }
    }
    [A[i], A[r]] = [A[r], A[i]];
    return i;
}

function quickSort(A,p,r){
    if (p < r){
        let q = partition(A,p,r);
        quickSort(A,p,q-1);
        quickSort(A,q+1,r);
    }
}

let A = [11,2,3,4,5,17,8,9,7];
let p = 0;
let r = A.length - 1;
quickSort(A,p,r);
console.log(A); 
