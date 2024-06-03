// Variáveis:
const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");

const cookieBtn = document.querySelector("#btn-cookie");
const anotherCookieBtn = document.querySelector("#btn-another-cookie");

const fortuneMessage = document.querySelector("#fortune-message");
const fortuneMessagesData = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos",
  "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida",
];

// Eventos:
fortuneMessage.addEventListener("click", handleCookieClick);
cookieBtn.addEventListener("click", handleCookieClick);
anotherCookieBtn.addEventListener("click", handleAnotherCookieClick);

// Funções:
function handleCookieClick(e) {
  toggleScreen(screen2, screen1);
  pickMessage();
}

function handleAnotherCookieClick(e) {
  toggleScreen(screen1, screen2);
}

function pickMessage() {
  let allMessages = fortuneMessagesData.length;
  console.log(allMessages);
  let randomNumber = Math.floor(Math.random() * allMessages);
  console.log(randomNumber);
  screen2.querySelector(
    "h3"
  ).innerText = `${fortuneMessagesData[randomNumber]}`; // transforma nº em string!
}

function toggleScreen(showScreen, hideScreen) {
  showScreen.classList.remove("hide");
  hideScreen.classList.add("hide");
}