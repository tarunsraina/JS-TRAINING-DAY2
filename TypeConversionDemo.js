/*

Given [0,1,1,1,1,0,0,1,1] concatenate them represent the test cases

Topics covered :
    String conversion

*/

let arr = [0,1,1,1,1,0,0,1,1]

let testCases="";

arr.forEach(function(ele){
    testCases+=String(ele)
})

console.log(testCases)


/* Given ages of people(in string), calculate the average age */


let ages=["23","27","29","34","21","22","35","23"]


let totalAge = 0

ages.forEach(function(age){
    totalAge+=Number(age)
})

console.log("Average age is "+totalAge/ages.length)