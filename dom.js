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
