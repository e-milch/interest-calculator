// function interest(feesPerYear, interestRate) {
//   // feesPerYear is an array
//   // set feesPerYear[0] as the initial value
//   let a = feesPerYear[0];

//   for (let i = 1; i < feesPerYear.length; i++) {
//     console.log(a);
//     a += a * (interestRate / feesPerYear.length) + feesPerYear[i];
//   }

//   return a;
// }

// let feeArray = [
//   21000, 22261.5, 22261.5, 25656.5, 25656.5, 28275.5, 28272.5, 31379.5, 31379.5,
//   33707.5, 33707.5, 36229.5, 36229.5,
// ];
// let interestRate = 0.081;

// console.log(interest(feeArray, interestRate));

import { getStartValue, getRate, getContributions, calcButton } from "./dom.js";

// initialize arrays to display
let interestArr = [];
let balanceArr = [];

export const interestLoop = (start, rate, contsArr) => {
  for (let i = 0; i < contsArr.length + 1; i++) {
    console.log(start);
    balanceArr.push(start);
    interestArr[i] = start * rate;
    start += start * rate + contsArr[i];
  }
};

const calculate = (event) => {
  event.preventDefault();
  // get start val
  let start = getStartValue();
  console.log(start);

  //get interest rate
  let rate = getRate();
  console.log(rate);

  //get contributions
  let contsArr = getContributions();
  console.log(contsArr);

  // get interest and balance arrays
  interestLoop(start, rate, contsArr);

  console.log(`interest: ${interestArr}`);
  console.log(balanceArr);

  const results = document.getElementById("results");

  // display interest
  let interest;
  results.append("interest each year");
  for (let i = 0; i < balanceArr.length; i++) {
    interest = document.createElement("P");
    interest.innerHTML = `Year${i + 1} $${interestArr[i]}`;
    results.append(interest);
  }

  //display balance
  let balance;
  results.append("balance at start of each year");
  for (let i = 0; i < balanceArr.length; i++) {
    balance = document.createElement("P");
    balance.innerHTML = `Year${i + 1} $${balanceArr[i]}`;
    results.append(balance);
  }
};

calcButton.addEventListener("click", calculate);
