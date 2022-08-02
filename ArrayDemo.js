/*

Given array of 0s and 1s, 0s indicating test case failure , 1 indicating test case success,
calculate the success percentage and failure percentage

Topics covered :
array , for loop , incrementing

*/

let arr = [0,1,1,0,1,0,1,1,1,0]
let success = 0
let failure = 0
arr.forEach(function(testcase){
    if(testcase==0){
        failure++;
    }else{
        success++;
    }
})

console.log(success +" out of "+arr.length+" passed:)")
console.log(failure +" out of "+arr.length+ " failed:/")

// Indicate the index of the "first test case failure"

let arr1 = [1,1,1,1,1,0,0,0,0,0,0,0,0,0]

for(let i=0;i<arr1.length;i++){
    if(arr1[i]==0){
        console.log("Test case failed in "+i+"th run and continues to fail...");
        i=arr1.length;
    }
}
