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
coinFlip();

