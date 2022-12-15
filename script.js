// #Construindo Minhas Funções

// #Construindo Função de DarkMode

function changeMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Construindo a função de gerar Core

const randomColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    return `rgb(${red}, ${green}, ${blue})`;
  };

// Construindo a função de Adicionar as Cores geradas

const newColors = () => {
    const colors = [];
    const palettediv = document.querySelectorAll('.color');
    for (let i = 0; i < palettediv.length; i += 1) {
      const color = randomColor();
      palettediv[0].style.backgroundColor = 'black';
      palettediv[i].style.backgroundColor = color;
      colors.push(color);
    }
    localStorages(colors);
  };

// Construindo a função de Trocar as Cores geradas

const buttomEvent = () => {
  const event = document.querySelector('#button-random-color');
  event.addEventListener('click', newColors);
};

// Construindo a Função de Salvar no LocalStorage a Cor

const localStorages = (array) => {
  localStorage.setItem('colorPalette', JSON.stringify(array));
};

// Construindo a Função de Recuperar a Cor do LocalStorage

const recoverStorage = () => {
  const divs = document.querySelectorAll('.color');
  const colors = JSON.parse(localStorage.getItem('colorPalette'));
  divs[0].style.backgroundColor = 'black';
  for (let index = 1; index < divs.length; index += 1) {
    divs[index].style.backgroundColor = colors[index];
  }
};

// Construindo a Função de Board

const board = () => {
  for (let index = 0; index < 25; index += 1) {
    const div = document.getElementById('pixel-board')
    const createDiv = document.createElement('div');
    createDiv.classList.add('pixel');
    createDiv.style.backgroundColor = 'white';
    div.appendChild(createDiv);
  }
};

// Construindo a Função de Iniciar com o Preto

const initialBlack = () => {
  const getColor = document.querySelectorAll('.color');
  getColor[0].classList.add('selected');
};

// Construindo a Função de Selecionar a Cor

const colorSelect = (event) => {
  const getSelected = document.querySelector('.selected');
  getSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

const recoverColor = () => {
  const getColor = document.getElementsByClassName('color');
  for (let index = 0; index < getColor.length; index += 1) {
    getColor[index].addEventListener('click', colorSelect);
  }
};




// #Construindo Minhas Chamadas de Funções  

window.onload = () => {
      buttomEvent();
      newColors();
      recoverStorage();
      localStorages();
      board();
      initialBlack();
      recoverColor();
  };

