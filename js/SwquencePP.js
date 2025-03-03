// //1. Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.

let c = Math.floor(Math.random()*10)

// 2. Use REPL – Use Random to get Dice Number between 1 to 6
let d = Math.floor(Math.random()*6)
// 3. Use REPL – Add two Random Dice Number and Print the Result
let e =  Math.floor(Math.random()*6) +  Math.floor(Math.random()*6);
// 4. Use Script & Debug – Write a program that reads 5 Random 2 Digit values , then find their sum and the average.
const number = [];
for(let i = 0; i < 5 ; i++) {
    const num = Math.floor(Math.random() * 90)+10;
    number.push(num);
} 
let sum = 0;
for(const num of number){
    sum += num;
}
//5. Use Script & Debug – Unit Conversion
// a. 1ft = 12 in then 42 in = ? ft
// b. Rectangular Plot of 60 feet x 40 feet in meters
// c. Calculate area of 25 such plots in acres