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



// #Construindo Minhas Chamadas de Funções  

window.onload = () => {
      buttomEvent();
      newColors();
      recoverStorage();
      localStorages();
  };

