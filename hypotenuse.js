const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputDiv = document.querySelector("#output");

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() 
{
  const A=Number(sides[0].value);
  const B=Number(sides[1].value);
  const sumOfSquares = calculateSumOfSquare(A,B);
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  outputDiv.innerText = "The length of hypotenuse is " + lengthOfHypotenuse+" units";  
}
calculateBtn.addEventListener("click", calculateHypotenuse);