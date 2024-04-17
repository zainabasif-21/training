let fs = require("fs");

// Assume we have an array of numbers
const numberArray = [13,5,15,20,25];
// Define an object that contains methods to perform operations on the array

//
const arrayHandler = {
  numbers: numberArray,
  // Method to double each number in the array
  doubleNumbers() {
    // TODO: Implement doubling each number in the array
    //this.numbers = this.numbers.map((num) => num * 2);
    this.numbers.forEach((num) => num * 2);
    return this.numbers;
  },

  // Method to square each number in the array
  squareNumbers() {
    // TODO: Implement squaring each number in the array
    this.numbers.forEach((num, ind, array) => (array[ind] = num * num));
    return this.numbers;
  },

  // Method to filter out odd numbers from the array
  filterOddNumbers() {
    // TODO: Implement filtering out odd numbers from the array
    return this.numbers.filter((num) => num % 2 == 1);
  },
  // Method to sum all the numbers in the array
  sumNumbers() {
    // TODO: Implement summing all the numbers in the array
    return this.numbers.reduce((totalSum, num) => totalSum + num);
  },
  // Method to demonstrate asynchronous operation using promises
  asyncOperation() {
    // TODO: Implement an asynchronous operation using promises
    return new Promise((resolve, reject) => {
      try {
        fs.readFile(
          "/home/zainabasif/VsCode/Training/training/Day-5/tasks.txt",
          "utf-8",
          (err, data) => resolve(data)
        );
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  },

  // Method to demonstrate type coercion
  typeCoercionDemo() {
    // TODO: Implement a demonstration of type coercion
    let sum = 5 + "67"; // will become 567
    let sum2 = 10 + 15 + "7"; // will resilt in 257
    console.log(
      " Adding a number 5 in string '67' with a string will convert it into string 567 : ",
      sum
    );
    console.log(
      " Adding two numbers 10 and 15 with a string '7' will convert it into string 257 : ",
      sum2
    );

    let sumOfBool = true + false;
    console.log("Sum of true and flase will result in 1 : ", sumOfBool);
  },

  // Method to shuffle the array
  shuffleArray() {
    // TODO: Implement shuffling the array
    let temp = 0;
    let random = 0;
    for (let i = 0; i < this.numbers.length; i++) {
      random = Math.floor(Math.random(78) * 10) % 5; // will give numbers between 0-4 (inclusive)((
      temp = this.numbers[random];
      this.numbers[random] = this.numbers[i];
      this.numbers[i] = temp;
    }
    return this.numbers;
  },

  // Method to find the maximum number in the array
  findMax() {
    // TODO: Implement finding the maximum number in the array
    return this.numbers.reduce((max, curr) => (curr > max ? curr : max));
  },

  // Method to check if all numbers in the array are prime
  checkPrimeNumbers() {
    // TODO: Implement a method to check if all numbers in the array are prime
    return this.numbers.map((num)=>{
      let retVal=true;
      for(let i=2;i <num;i++){
          if(num%i==0)
            return false;
      }
      return true;})
  },
  // Method to find the greatest common divisor (GCD) of all numbers in the array
  findGCD() {
    // TODO: Implement a method to find the greatest common divisor (GCD) of all numbers in the array
    let temp=this.numbers.sort((a,b)=>a-b)
    for(let i=0;i<temp.length;i++){
      if(temp[i]%temp[0]!=0)
        return false;
    }
    
    return temp[0]; 
  },
  // Method to find the least common multiple (LCM) of all numbers in the array
  findLCM() {
    // TODO: Implement a method to find the least common multiple (LCM) of all numbers in the array
    let temp=this.numbers.sort((a,b)=>a-b)
    for(let i=0;i<temp.length;i++){
      if(temp[temp.length-1]%temp[i]!=0)
        return false;
    }
    return temp[temp.length-1];
  },
  // Method to round each number to the nearest integer
  roundNumbers() {
    // TODO: Implement a method to round each number to the nearest integer
    return this.numbers.map((num,ind,arr)=> arr[ind]=Math.round(num));
  },
  // Method to calculate the square root of each number in the array
  calculateSquareRoot() {
    // TODO: Implement a method to calculate the square root of each number in the array
    return this.numbers.map((num,ind,arr)=>arr[ind]=Math.sqrt(num));
  },

  // Method to delay execution for a specified time
  delayExecution(ms) {
    // TODO: Implement delaying execution for a specified time
    console.log("About to delay execution for ", ms, " ms");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Delayed Execution successful");
        resolve();
      }, ms);
    });
  },
  // Additional asynchronous operations
  additionalAsyncOperations() {
    // TODO: Implement additional asynchronous operations
    return new Promise((resolve, reject) => {
      fs.readFile(
        "training/Day-5/readMeForFsReadFile.txt",
        "utf-8",
        (err, data) => {
          return resolve(data);
        }
      );
    });
  },
};

// Test the array handling methods

console.log("Double Numbers :", arrayHandler.doubleNumbers());
//console.log("Square Numbers : ", arrayHandler.squareNumbers());
//console.log("Odd Numbered Array : ", arrayHandler.filterOddNumbers());
// console.log("Sum of Numbers : ", arrayHandler.sumNumbers());
// console.log("Shuffled Array : ", arrayHandler.shuffleArray());
// console.log("Modified Array:", arrayHandler.numbers);
// console.log("Max Number:", arrayHandler.findMax());
console.log("Prime Number:", arrayHandler.checkPrimeNumbers());
console.log("GCD : ", arrayHandler.findGCD());
console.log("LCM : ", arrayHandler.findLCM());
console.log("Round Number : ", arrayHandler.roundNumbers());
console.log("Square Root : ", arrayHandler.calculateSquareRoot());

// Demonstrate asynchronous operation with promises
arrayHandler
  .delayExecution(3000)
  .then(() => arrayHandler.asyncOperation())
  .then((result) => {
    console.log(result);
  });

// Additional async operations
arrayHandler.additionalAsyncOperations().then((results) => {
  console.log("Additional async operations:", results);
});

// Demonstrate type coercion
arrayHandler.typeCoercionDemo();
console.log("End of script execution. Event loop continues...");
