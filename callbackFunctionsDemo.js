

/*  Given a name check if its first letter is capitalized , if yes say hi , else capitalize it and say hi */



let name = "tarun"
greetWithName(name,capAndSayHi,justSayHi)

function greetWithName(name,capAndSayHi,justSayHi){

    if(!(name.charAt(0)>='A' && name.charAt(0)<='Z')){
        
        // Not capital block
        let capitalizedName = capAndSayHi(name);
        console.log("Hi "+capitalizedName);

    }else{
        justSayHi(name);
    }

}




function justSayHi(name){
    console.log("Hello "+name+"!!")
}


function capAndSayHi(name){
    let firstChar = name.charAt(0)+"";
    let capFirstChar = firstChar.toUpperCase();
    let remString = name.substring(1);
    let finalName = capFirstChar+remString;
    return finalName;

}

