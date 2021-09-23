import {
  getStartValue,
  getRate,
  getContributions,
  calcButton,
  displayInterest,
  displayBalance,
} from "./dom.js";

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

  // display interest
  displayInterest(interestArr);

  //display balance
  displayBalance(balanceArr);
};

calcButton.addEventListener("click", calculate);
