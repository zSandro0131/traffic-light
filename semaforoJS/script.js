const image = document.getElementById("img");
const buttons = document.querySelector(".buttons");
let colorIndex = 0;
let intervalId = null

const trafficLight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]();
};

const nextIndex = () => {
  if (colorIndex < 2) {
    colorIndex++;
  } else {
    colorIndex = 0;
  }
};

const stopAutomatic = ()=> {
    clearInterval(intervalId)
}

const changeColor = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};

const turnOn = {
  red: () => (image.src = "./img/vermelho.png"),
  yellow: () => (image.src = "./img/amarelo.png"),
  green: () => (image.src = "./img/verde.png"),
  automatic: () => intervalId = setInterval(changeColor, 1000),
};

buttons.addEventListener("click", trafficLight);
