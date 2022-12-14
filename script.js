// #Construindo Minhas Funções

// Construindo a função de gerar Cores

const backgroundPalette = () => {
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
      const color = backgroundPalette();
      palettediv[i].style.backgroundColor = color;
      colors.push(color);
    }
  };

// #Construindo Minhas Chamadas de Funções  

window.onload = () => {
      newColors();
  };

