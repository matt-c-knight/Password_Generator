var specialCharacters = "!@#$%^&*";
var numericCharacters = "123456789";
var lowerCaseCharacters = "qwertyuiopasdfghjklzxcvbnm";
var upperCaseCharacters = "MNBVCXZLKJHGFDSAPOIUYTREWQ";
var userLength = parseInt(prompt("Between 8-128, how long would you like you password?"));
var password = "";
var userAnswer = "";
// var userSpecial = prompt("Would you like to use special characters?");
// var userNumerical = prompt("Would you like to use numbers?");
// var userLowerCase =  prompt("Would you like to use lower case letters?");
// var userUpperCase = prompt("Would you like to use upper case letters?");
// var passDisplay = document.querySelector('p');

var userSpecial = prompt("Would you like to use special characters?");
userSpecial = userSpecial.toLowerCase();
if (userSpecial === "yes") {
    userAnswer += userAnswer + specialCharacters;
} 
var userNumerical = prompt("Would you like to use numbers?");
userNumerical = userNumerical.toLowerCase();
if (userNumerical === "yes") {
    userAnswer += userAnswer + numericCharacters;
} 
var userLowerCase =  prompt("Would you like to use lower case letters?");
userLowerCase = userLowerCase.toLowerCase();
if (userLowerCase === "yes")   {
    userAnswer += userAnswer + lowerCaseCharacters;
}
var userUpperCase = prompt("Would you like to use upper case letters?");
userUpperCase = userUpperCase.toLowerCase(); 
if (userUpperCase === "yes") {
    userAnswer += userAnswer + upperCaseCharacters;
}



function passwordGenerator () {
    for (i = 1; i <= userLength; i ++) {
        password = password + userAnswer.charAt(Math.floor(Math.random() * userAnswer.length));
    }
    console.log(password)
   
    var passDisplay = document.querySelector('p');
   
    passDisplay.textContent = password;
}
document.querySelector("button").addEventListener('click',function ()
    {
     passwordGenerator();
      
    }  ); 

