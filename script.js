// #Construindo Minhas Funções

// #Construindo Função de DarkMode

function changeMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Construindo a função de gerar Cor
// Feito com Ajuda de: https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript

function randomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    return `rgb(${red}, ${green}, ${blue})`;
  };

// Construindo a função de Adicionar as Cores geradas
// Feito com Ajuda de Victor na Monitoria

function newColors() {
    const colors = [];
    const getColor = document.querySelectorAll('.color');
    for (let i = 0; i < getColor.length; i += 1) {
      const color = randomColor();
      getColor[0].style.backgroundColor = 'black';
      getColor[i].style.backgroundColor = color;
      colors.push(color);
    }
    localStorages(colors);
  };

// Construindo a função de Trocar as Cores geradas

function buttomEvent() {
  const event = document.querySelector('#button-random-color');
  event.addEventListener('click', newColors);
};

// Construindo a Função de Salvar no LocalStorage a Cor

function localStorages(colors){
  localStorage.setItem('colorPalette', JSON.stringify(colors));
};

// Construindo a Função de Recuperar a Cor do LocalStorage

function recoverStorage() {
  const divs = document.querySelectorAll('.color');
  const colors = JSON.parse(localStorage.getItem('colorPalette'));
  divs[0].style.backgroundColor = 'black';
  for (let index = 1; index < divs.length; index += 1) {
    divs[index].style.backgroundColor = colors[index];
  }
};

// Construindo a Função de Board
// Feito com ajuda do Matheus na aula de Palavra Cruzada

function board() {
  for (let index = 0; index < 25; index += 1) {
    const div = document.getElementById('pixel-board')
    const createDiv = document.createElement('div');
    createDiv.classList.add('pixel');
    createDiv.style.backgroundColor = 'white';
    div.appendChild(createDiv);
  }
};

// Construindo a Função de Iniciar com o Preto

function initialBlack() {
  const getColor = document.querySelectorAll('.color');
  getColor[0].classList.add('selected');
};

// Construindo a Função de Selecionar a Cor
// Feito com a ajuda da aula do zeze

function colorSelect(event) {
  const getSelected = document.querySelector('.selected');
  getSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

// Construindo a Função de Recuperar a Cor
// Feito com a ajuda da aula do zeze

function recoverColor() {
  const getColor = document.getElementsByClassName('color');
  for (let index = 0; index < getColor.length; index += 1) {
    getColor[index].addEventListener('click', colorSelect);
  }
};

// Construindo a Função de Evento ao Pintar
// Feito com a ajuda da aula do zeze

function paintEvent(event) {
  const eventPixel = event.target;
  const selectedColor = document.querySelector('.selected');
  eventPixel.style.backgroundColor = selectedColor.style.backgroundColor;
};


// Contruindo a Função de Pintar

function paint() {
  const getPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < getPixel.length; index += 1) {
    getPixel[index].addEventListener('click', paintEvent);
  }
};

// Contruindo a Função de Pintar o Board

function clearBoard() {
  const buttom = document.getElementById('clear-board');
  const pixel = document.getElementsByClassName('pixel');
  buttom.addEventListener('click', () => {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
      }
    });
  };

// #Construindo Minhas Chamadas de Funções  

window.onload = () =>{
      buttomEvent();
      newColors();
      recoverStorage();
      localStorages();
      board();
      initialBlack();
      recoverColor();
      paint();
      clearBoard();
  };

