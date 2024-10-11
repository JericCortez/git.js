const correctPassword = "correctPassword";

let userPassword;

do {
    userPassword = prompt("Please Enter your password:");
    
    if (userPassword !== correctPassword) {
        console.log("Incorrect, try again.");
    }
    
} while (userPassword !== correctPassword);

console.log("Access granted.");