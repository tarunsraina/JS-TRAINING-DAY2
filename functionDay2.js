

function sayHello(){
    return "Hello"
}

function sayHi(){
    return "Hi"
}

function sayBye(){
    return "Bye"
}

// Default values

function sayHelloTo(to,text=sayHello()){
    console.log(text+" "+to)
}

sayHelloTo("varun")  // for text parameter ,sayHi() function is called
sayHelloTo("varun","welcome")  // sayHi() not called
sayHelloTo("karun","bye")       // sayHi() not called

function sayHiTo(to,text=sayHi()){
        console.log(text+" "+to);
}

sayHiTo("shreesha")
sayHiTo("phani")
sayHiTo("nirmal")

function sayByeTo(to,text=sayBye()){
    console.log(text+" "+to)
}

sayByeTo("Tarun")
sayByeTo("phani")
sayByeTo("nirmal")
sayByeTo("everyone")



// Replacing undefined with some default messagae with OR condition

function saySomething(message){
    message = message || "No message :/"
    console.log(message)
}

saySomething()
saySomething("I have a message!!")

function sayGoodBye(message){
    console.log(message??"No goodbye message :/")
}

sayGoodBye("BYEEEE!")
sayGoodBye()


let sample = function(){
    return "Howdyyyy";
}

console.log(sample())

