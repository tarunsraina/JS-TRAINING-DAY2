


// Reversing an array


let arr = [1,2,3,4,5,6,7,8]
console.log("Before Reversing the array")
console.log(arr)
let start = 0
let end = arr.length-1

while(start<=end-1){
    //console.log("arr[start]="+arr[start])
    //console.log("arr[end]="+arr[end])
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}

console.log("After reversing the array")
console.log(arr)


// start from 10 and print all numbers less than 10 and not smaller than 4

let begin = 10

do{
    console.log(begin);
    begin--;
}while(begin>3)


// Print all number from 1 to 10 but not 3

for(let i=0;i<=10;i++){
    if(i==3) continue;
    console.log(i)
}