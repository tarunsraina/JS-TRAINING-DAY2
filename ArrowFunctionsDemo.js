
// CALCCULATOR USING ARROW FUNCTIONS


let num1 = 5
let num2 = 8

let operation = "*"

switch(operation){

    case "+" :  sum = (num1,num2) => num1 + num2
                console.log(sum(num1,num2));
                break;

    case "-" : sub = (num1,num2) => num1-num2
                console.log(sub(num1,num2))
                break;

    case "/" : div = (num1,num2) => num1/num2
                console.log(div(num1,num2))
                break;

    case "*" : mul = (num1,num2) => num1*num2
                console.log(mul(num1,num2))
                break;
    

    default : console.log("INVALID")
}


// concat strings using arraow function

let concatStrings = (str1,str2) => str1+" "+str2


let str1 = "cumulations"
let str2 = "technoloies"

let concString = concatStrings(str1,str2)
console.log(concString)

