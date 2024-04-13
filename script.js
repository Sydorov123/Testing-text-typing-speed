let startTime;
let promptText = "Світ дуже великий тому пройдуть мільйони років ніж все ми вивчимо.."; 

const backgroundImages = [
  'abstract.jpg'
];

let currentBackgroundImageIndex = 0;

function measureTypingSpeed() {
  if (!startTime) {
    startTime = new Date();
  }
  
  const userInput = document.getElementById("userInput").value;
  
  if (userInput.length === 0) {
    displayPromptText();
    return;
  }
  
  const endTime = new Date();
  const totalTimeInSeconds = (endTime - startTime) / 1000;
  
  const wordsTyped = userInput.trim().split(/\s+/).length;
  const charactersTyped = userInput.length;
  const wordsPerMinute = Math.round((wordsTyped / totalTimeInSeconds) * 60);
  const charactersPerMinute = Math.round((charactersTyped / totalTimeInSeconds) * 60);
  
  const result = `Ви набрали ${wordsTyped} слів (${charactersTyped} символів) за ${totalTimeInSeconds} секунд.<br/>
  Швидкість друку: ${wordsPerMinute} слів за хвилину (${charactersPerMinute} символів за хвилину).`;
  
  displayResult(result);
}

function displayPromptText() {
  document.getElementById("promptText").textContent = promptText;
}

function displayResult(result) {
  document.getElementById("result").innerHTML = result;
}

function clearInput() {
  document.getElementById("userInput").value = "";
  startTime = null;
  displayPromptText();
  displayResult("");
}

function logout() {
  window.location.href = 'login.html'; 
}


function changeBackgroundImage() {
  const body = document.body;
  const imageUrl = `url(${backgroundImages[currentBackgroundImageIndex]})`;
  
  body.style.transition = 'background-image 1s ease'; 
  body.style.backgroundImage = imageUrl;
  
  currentBackgroundImageIndex = (currentBackgroundImageIndex + 1) % backgroundImages.length;
  
  setTimeout(() => {
    body.style.transition = '';
  }, 1000);
}

displayPromptText();
setInterval(changeBackgroundImage, 5000);
