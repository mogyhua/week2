const selectMenu = document.querySelector("#colors");
const getResultButton = document.querySelector("button")
const resultArea = document.querySelector(".result")
const resultContainer = document.querySelector('.result-container')

getResultButton.addEventListener("click", () => {
   const userChoice = selectMenu.options[selectMenu.selectedIndex].value;
   let resultText = "";

   switch(userChoice) {
      case "red":
         resultText = "You seek power and control.";
         break;
      case "green":
         resultText = "You are a natural visionary, non-conformist, and problem-solver kind of individual.";
         break;
      case "yellow":
         resultText = "You are an optimistic, fun-loving, cheery, creative kind of individual.";
         break;
      case "black":
         resultText = "You are a strong-willed, determined, confident, independent, risk-taker kind of individual.";
         break;
      case "pink":
         resultText = "You are a playful, fun, easy-going, smart, genuine child-like, social butterfly kind of individual.";
         break;
      case "blue":
         resultText = "You look for meaning and significance in life.";
         break;
      default:
         resultText = "You are an unknown unicorn";
          resultContainer.style.backgroundColor = "#777";
          break;
   }

   resultContainer.style.backgroundColor = userChoice;
   resultArea.innerHTML = resultText;
});




// if(userChoice === "red") {
//    resultText = "You seek power and control."
// } else if(userChoice === "green") {
//    resultText = "You are a natural visionary, non-conformist, and problem-solver kind of individual.";
// } else if(userChoice === "yellow") {
//    resultText = "You are an optimistic, fun-loving, cheery, creative kind of individual.";
// } else if(userChoice === "black") {
//    resultText = "You are a strong-willed, determined, confident, independent, risk-taker kind of individual.";
// } else if(userChoice === "pink") {
//    resultText = "You are a playful, fun, easy-going, smart, genuine child-like, social butterfly kind of individual.";
// } else if(userChoice === "blue") {
//    resultText = "You look for meaning and significance in life.";
// } else {
//    resultText = "You are an unknown unicorn";
//    resultContainer.style.backgroundColor = "#777";
// }