

// USER AUTHENTICATION :)


let isUserValid = false;
let hasAdminAccess = false;





let users = {

        name : "Tarun",
        isAdmin : true,
        "likes cricket" : true,
        "likes apple" : false
}



function checkAdminAccess(){

    return users.isAdmin;

}

if(checkAdminAccess()){
    hasAdminAccess = true;
}


function checkValidUser(name){
    
    if(users.name == name){
        return true;
    }

    return false;
}

if(checkValidUser("Tarun")){ // change name here
   
    console.log("The user is valid!");
    isUserValid = true;
}else{
    console.log("Not a valid user :/")
}

function getUserDetails(){

    if(isUserValid && hasAdminAccess) {
        console.log(users);
    }
}

getUserDetails()






/*

Task from https://javascript.info/object

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

*/


/*
let user = {}

user = {
    name : "John",
    surname :"smith"
}

console.log(user.name)
console.log(user.surname)

user.name = "Pete"

console.log(user.name)

delete user.name

*/