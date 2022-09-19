const quizform = document.querySelector(".form");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output");

const correctAnswers = ["95°","right angled","sum of all the sides","Median","Equilateral triangle"];

function calculateScore() 
{
  const formResults = new FormData(quizform);
  let score = 0;
  let  index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index])
     {
      score = score + 1;
     }
    index = index + 1;
  }
   outputDiv.innerText = "The score is " + score;
}

submitBtn.addEventListener("click", calculateScore);
