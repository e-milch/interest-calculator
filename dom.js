export const calcButton = document.getElementById("calc");

export const getStartValue = () => {
  return Number(document.getElementById("start").value);
};

export const getRate = () => {
  return Number(document.getElementById("rate").value);
};

export const getContributions = () => {
  return document
    .getElementById("contributions")
    .value.split(" ")
    .map((i) => Number(i));
};

const results = document.getElementById("results");

export const displayInterest = (interestArr) => {
  let interest;
  results.append("interest each year");
  for (let i = 0; i < interestArr.length; i++) {
    interest = document.createElement("P");
    interest.innerHTML = `Year ${i + 1} $${interestArr[i]}`;
    results.append(interest);
  }
};

export const displayBalance = (balanceArr) => {
  let balance;
  results.append("Balance at start of each year");
  for (let i = 0; i < balanceArr.length; i++) {
    balance = document.createElement("P");
    balance.innerHTML = `Year ${i + 1} $${balanceArr[i]}`;
    results.append(balance);
  }
};
