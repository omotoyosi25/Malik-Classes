// let, const
//variables are like labelled boxes that hold value/items
let name = "Khalid";
name = "New Name";

//make a variable constant
const age = 30;
const Age = 12;

const dateOfBirth = "01/01/1990";
const date_of_birth = "01/01/1990";

//data types/value types
let myName = "Khalid"; //string
console.log(typeof myName);

let myAge = 30.1; //number
console.log(typeof myAge);

let isMarried = false; //boolean (true or false)
console.log(typeof isMarried);

let myAddress = null; //null
console.log(typeof myAddress);

let myPhoneNumber = undefined; //undefined
console.log(typeof myPhoneNumber);

let newVariable;
console.log(typeof newVariable); //undefined

// NaN - not a number, trying to perform mathematical operations on invalid figues or string etc

// '', "", ``
const newName = "Name";
const newName2 = "Name2";
const nameWithBackticks = `Name3`;

//Maths  +, -, *, /
let firstName = "Khalid";
let LastName = "Ahmed";

console.log(firstName + " " + LastName); //concatenation
const age2 = 20;
console.log(age2 + firstName);

const num1 = "5000";
const num2 = 10;

console.log(num1 - num2);

//Comparison Operators:- ==, === return either true, false, >, <, >=, <=, !=, !==
let name1 = "Ade";
let name2 = "Adex";
console.log(name1 == name2);

console.log(10 > 5, "10 is greater than 5");
console.log(12 < 3, "12 is greater than 3");

console.log(name1 != name2, "Name 1 is not equal to Name2");
console.log(1, "q", "nnn", true, undefined);

let agee = 18;
const votingAge = 18;

console.log(agee <= votingAge, "Agee is greater than or equals to votingAge");

//Logcal Operators  ||(OR), &&(AND), !(NOT)
const isAuthorized = name2 == "Adex" || votingAge > 200000;

const studentName = "Ada";
const HasParentConsent = true;
const studentAge = 19;
const studentHasPaid = true;
const consentORNotMinor = HasParentConsent && studentAge > 18;
console.log(consentORNotMinor && studentHasPaid, "Student verioeg");

//Conditionals - if else
let temperature = 30;
const isHumid = false;

if (temperature >= 30 && isHumid) {
  console.log("It's hot and humid outside");
} else if (temperature >= 30 && !isHumid) {
  console.log("It's hot but not humid outside");
} else {
  console.log("It's not hot");
}

// username, password
//correctUsername, correctPassword
// wrote and if/else statement that check if username and correctUername match
// AND password and correctPassword match
// log ("Access granted!")




const username = "Khalid";
const password = "123456";
const correctUsername = "Khalid";
const correctPassword = "123456";
const isAccountActive = true;
const isUserNameCorrect = username === correctUsername;
const isPasswordCorrect = password === correctPassword;

if (username === correctUsername && password === correctPassword) {
  console.log("Access granted!");
} else if (isUserNameCorrect && !isPasswordCorrect) {
  console.log("Incorrect password!");
} else if (!isUserNameCorrect && isPasswordCorrect) {
  console.log("Incorrect username!");
} else if (isUserNameCorrect && isAccountActive) {
  console.log("Account is active!");
} else if (!isUserNameCorrect && !isPasswordCorrect) {
  console.log("Incorrect username and password!");
} else if (isUserNameCorrect && isPasswordCorrect && !isAccountActive) {
  console.log("Account is not active!");
}
 else {
  console.log("Access denied!");
}

