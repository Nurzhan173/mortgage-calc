const form = document.querySelector('#form');

form.addEventListener("onChange", (e) => {
  console.log('asd')
})

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const elements = [...e.target.elements];

  const principal = parseInt(elements[0].value);
  const rate = parseInt(elements[1].value);
  const loanLength = parseInt(elements[2].value);

  const interestRateMonth = (parseFloat(rate) * 0.01) / 12;
  const loanLengthMonth = parseInt(loanLength, 10) * 12;

  const top = interestRateMonth * Math.pow(1 + interestRateMonth, loanLengthMonth);
  const bottom = Math.pow(1 + interestRateMonth, loanLengthMonth) - 1;

  const mortgagePayment = parseInt(principal * (top / bottom), 10);

  const infoText = document.querySelector('#infoText');

  infoText.textContent = `Your monthly pay ${mortgagePayment}`;
  console.log(mortgagePayment);
})
