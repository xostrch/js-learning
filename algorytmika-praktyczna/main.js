const A = [4,12,35,7,87,43,32,92,65,34,2,13];

console.log("===ZADANIE 1==="); //O(n)
let highestNumber = 0;
for(let i = 0; i < A.length; i++){
    if(A[i] > highestNumber){
        highestNumber = A[i];
    }
}
console.log(highestNumber);


console.log("===ZADANIE 2===");//O(n)
let sumOfA = 0;
for(let i = 0; i < A.length; i++){
    sumOfA += A[i];
}
let avgOfA = sumOfA/A.length;
console.log(avgOfA);


console.log("===ZADANIE 3===");//O(n)
let biggerThanAvg = 0;
for(let i = 0; i < A.length; i++){
    if(A[i] > avgOfA){
        biggerThanAvg++;
    }
}
console.log(biggerThanAvg);


console.log("===ZADANIE 4===");//O(n)
let biggerThan90 = false;
for(let i = 0; i < A.length; i++){
    if(A[i] > 90){
        biggerThan90 = true;
        break;
    }
}
console.log(biggerThan90);


console.log("===ZADANIE 5===");//O(n2)
const sortedArray = [...A];
let temp = 0;
for(let i = 0; i < sortedArray.length; i++){
    for(let j = 0; j < sortedArray.length - 1 - i; j++){
        if(sortedArray[j] < sortedArray[j+1]){ 
            temp = sortedArray[j + 1];
            sortedArray[j+1] = sortedArray[j];
            sortedArray[j] = temp;
        }
    }
}
function returnKElementOfArray(k){
    return sortedArray[k];
}
console.log(returnKElementOfArray(2));


console.log("===ZADANIE 6===");//O(n2)
let identicalValues = false;
for(let i = 0; i < sortedArray.length; i++){
    if(sortedArray[i] === sortedArray[i+1]){
        identicalValues = true;
        break;
    }
}
console.log(identicalValues);


console.log("===ZADANIE 7===");//O(n2)
for(let i = 0; i < A.length; i++){
    for(let j = 0; j < A.length; j++){
        if(i == j) break;
        //console.log(A[i] + A[j]);
    }
}
console.log("dziala");


console.log("===ZADANIE 8===");//O(n2)
console.log(sortedArray);


console.log("===ZADANIE 9===");//O(n2)
let smallestDifference = Infinity;
for(let i = 0; i < A.length; i++){
    for(let j = 0; j < A.length + i + 1; j++){
        if(i == j) break;
        let diff = Math.abs(A[i] - A[j]);
        if( diff < smallestDifference){
            smallestDifference = diff;
        }
    }
}
console.log(smallestDifference);


console.log("ZADANIE 10===");//O(n3)
for(let i = 0; i < A.length; i++){
    for(let j = 0; j < A.length; j++){
        if(i == j) break;
        for(let k = 0; k < A.length; k++){
            if(j == k) break;
            //console.log(A[i] + A[j] + A[k]);
        }
    }
}
console.log("dziala");


console.log("===ZADANIE 11===");//O(n)
function getMedian(n){
    if(n % 2 == 0){
        let a = n / 2;
        let b = n / 2 - 1;
        return (sortedArray[a] + sortedArray[b]) / 2;
    }else{
        return sortedArray[Math.floor(n / 2)];
    }
}
console.log(getMedian(A.length));


console.log("===ZADANIE 12===");
const squaredArray = [];
let sumOfSquares = 0;
for(let i = 0; i < A.length; i++){
    squaredArray[i] = A[i] * A[i];
    sumOfSquares += squaredArray[i];
}
console.log(sumOfSquares);


console.log("===ZADANIE 13===")
let percent = biggerThanAvg / A.length;
console.log(percent + "%");