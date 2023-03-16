// JS-05 Arrays and Loops

// Exercise #1
// Part 1
// There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.
const namesWaitBank = ['Sofia', 'David', 'Juan'];
console.log(namesWaitBank);

// Part 2
// Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?
namesWaitBank.push('Sara', 'Augustin');
console.log(namesWaitBank);
console.log(namesWaitBank[0]);

// Part 3
// It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?
console.log(namesWaitBank.indexOf('David'));
namesWaitBank.splice(2,0,'Renata');
namesWaitBank.push('Elena');
console.log(namesWaitBank);



// Exercise #2
// Write a JavaScript program to construct the following pattern, using a nested for loop.
let x = '';
for (let i=0; i<5; i++) {
    x = x + '* ' ;
    console.log(x);
}



// Exercise #3
// Write while loops to do the following:
// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.
let xValue = 79.3214 ;
xValue = xValue.toFixed(2);
for (let i=0; xValue > 0.5; i++) {
    if (xValue > 0.5) {
        xValue -= 0.5;
        console.log(xValue.toFixed(2));
    }
}

// - Print all the odd numbers between 1 - 100.
// let j = 0;
for (let i = 1; i <= 100; i++) {
    if (i%2 !== 0) {
    console.log(i);
    // j++
    }
}
// console.log(j);

// - Write a method with a while loop to print 1 through n in square brackets. 
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
let n = 6;
let i = 1;
let print = "";
while (i<=n) {
    print += `[${i}] `
    i++
}
console.log(print);

// - Write a method with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
let nn = 5;
let j = 1;
let addition = 0;
if (nn >=0 ) {
  while (j<=nn) {
     addition += j;
     j++
  }
  console.log(addition);
}
else {
  console.log("Input positive number again");
}

