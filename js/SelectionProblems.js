// 1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum valuefun
function MaxOrMin(){
    let numbers  = [];
for(let i =0; i< 5 ; i++){
    const num = Math.floor(Math.random()*900)+100;
    numbers.push(num);
}
console.log("Generated numbers:", numbers);
let d = Math.max(...numbers);
console.log("greatest is "+d);
let e = Math.min(...numbers)
console.log("Smallest is " + e);
}
//MaxOrMin();

// 2. Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.

function isSpringOrSummer(day,month){
    if(month == 3 && day >=20 && day < 32){
        return true;
    } else if (month === 4) { // April
        return true;
      } else if (month === 5) { // May
        return true;
      } else if (month === 6 && day <= 20) { // June 20th or before
        return true;
      } else {
        return false;
      }
}

function processCommandLineArgs(){
    const args = process.argv.slice(2);
    if (args.length !== 2) {
        console.error("Usage: node your_script.js <day> <month>");
        return; // Exit if the number of arguments is incorrect
      }
    const day = parseInt(args[0]);
    const month = parseInt(args[1]);

    const result = isSpringOrSummer(day,month);
    console.log(result);
    
}

//processCommandLineArgs();


// 3. Write a program that takes a year as input and outputs the Year is a Leap Year or not
// a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
// divisible by 400.

function LeapYearPredication(year) {
    if((year %4 === 0 && year % 100 !== 0) || year % 400  === 0){
        return true;
    }else{
        return false;
    }
}
function CallLeapYrMethod(){
    const args = process.argv.slice(2);
    // if (args.length !== 1) {
    //     console.error("Usage: node your_script.js <year>");
    //     return;
    //   }

    const year = parseInt(args[0]);

    const response = LeapYearPredication(year);
    console.log("year is Leap or not ? "+ response);
}
//CallLeapYrMethod();

// 4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
function coinFlip() {
    const randomNumber = Math.random();

    if(randomNumber < 0.5){
        console.log("Heads");
    }else{
        console.log("Tails");
        
    }
}
//coinFlip();


// //Selection Practice Problems with if else if and else

// 1. Read a single digit number and write the number in word
function wordsNumber(num){
    if(num> 9 || num < 0){
        console.log("Inavalid number Enter between 0 to 9");
    }else if (num === 1){
        console.log("One");
    }
    else if (num === 2){
        console.log("Two");
    }
    else if (num === 3){
        console.log("Three");
    }
    else if (num === 4){
        console.log("Four");
    }
    else if (num === 5){
        console.log("Five");
    }
    else if (num === 6){
        console.log("Six");
    }
    else if (num === 7){
        console.log("Seven");
    }
    else if (num === 8){
        console.log("Eight");
    }
    else if (num === 9){
        console.log("Nine");
    }
    else {
        console.log("Invalid");
        
    }
}
function callNumber(){
    const number = process.argv.slice(2);

    const num1 = parseInt(number);
    wordsNumber(num1);
   
    
}
//callNumber();


// 2. Read a Number and Display the week day (Sunday, Monday,...)
//doone
// 3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
function getPlaceValue(number) {
    if (number === 1) {
      return "unit";
    } else if (number === 10) {
      return "ten";
    } else if (number === 100) {
      return "hundred";
    } else if (number === 1000) {
      return "thousand";
    } else if (number === 10000) {
      return "ten thousand";
    } else if (number === 100000) {
      return "hundred thousand";
    } else if (number === 1000000) {
      return "million";
    } else {
      return "Invalid input or very large number";
    }
  }

  function callGetPlaceValue() {
    const args = process.argv.slice(2);
    
    const num2 = parseInt(args);
    console.log(getPlaceValue(num2));
  }
 // callGetPlaceValue();



// 4. Enter 3 Numbers do following arithmetic operation and find the one that

// is maximum and minimum
// 1. a + b * c 3. c + a / b
// 2. a % b + c 4. a * b + c

function calculateAndFindMaxMin(a, b, c) {
    // Calculate the four arithmetic operations
    const result1 = a + b * c;
    const result2 = a % b + c;
    const result3 = c + a / b;
    const result4 = a * b + c;
  
    // Store the results in an array
    const results = [result1, result2, result3, result4];
  
    // Find the maximum and minimum values
    console.log("result is " + results);
    
    const max = Math.max(...results);
    console.log("Greatest is "  + max);
    
    const min = Math.min(...results);
    console.log("smallest is " + min);
}

function callCalculateAndFindMaxMin(){
    const args = process.argv.slice(2,5);

    const a = parseInt(args[0]);
    const b = parseInt(args[1]);
    const c = parseInt(args[2]);

    calculateAndFindMaxMin(a,b,c);
}

//callCalculateAndFindMaxMin();


// 1. Read a single digit number and write the number in word using Case
function getNumberInWords(numm){
    let word;
    switch(numm){
    case 0:
        word = "zero";
        break;
    case 1:
        word = "One";
        break;
    case 2:
        word = "Two";
        break;
      case 3:
        word = "Three";
        break;
      case 4:
        word = "Four";
        break;
      case 5:
        word = "Five";
        break;
      case 6:
        word = "Six";
        break;
      case 7:
        word = "Seven";
        break;
      case 8:
        word = "Eight";
        break;
      case 9:
        word = "Nine";
        break;
      default:
        word = "Invalid number";
    }
  
    return word;
  }

  function callGetInNumber(){
    const args = process.argv.slice(2);

    const numm = parseInt(args[0]);

    console.log(getNumberInWords(numm));

  }
 // callGetInNumber();

// 2. Read a Number and Display the week day (Sunday, Monday,...)

function getDayName(dayNumber) {
    let dayName;
  
    switch (dayNumber) {
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;
      case 6:
        dayName = "Saturday";
        break;
      case 7:
        dayName = "Sunday";
        break;
      default:
        dayName = "Invalid day number";
    }
  
    return dayName;
  }

  function callGetDayName(){
    const args = process.argv.slice(2);

    const dayNumber = parseInt(args[0])
    
  }


// 3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

console.log("same as above");

// 4. Write a program that takes User Inputs and does Unit Conversion of

// different Length units
// 1. Feet to Inch 3. Inch to Feet
// 2. Feet to Meter 4. Meter to Feet