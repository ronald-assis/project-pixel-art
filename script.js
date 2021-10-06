createH1();
createMain();
paletteColor();
createForm();
createInput()
createButtonInput();
createDivs();
createId();
createSection();
createPixelFrame(5);
console.log(functionButton())
addClass();
createClickPalette();
createButclear();
clear();

function createH1() {
  const h1 = document.createElement('h1');
  h1.id = 'title';
  h1.innerHTML = 'Paleta de Cores';
  document.body.appendChild(h1);
}

function createMain() {
  const main = document.createElement('main');
  main.id = 'container';
  document.body.appendChild(main);
}

function paletteColor() {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.id = 'color-palette';
  main.appendChild(section);
}

function createDivs() {
  const main = document.querySelector('#color-palette');
  const repeatClass = 4;
  for (let i = 0; i < repeatClass; i += 1) {
    const div = document.createElement('div');
    div.classList.add('color');
    main.appendChild(div);
  }
}

function createId() {
  const color = document.querySelectorAll('.color');
  color[0].id = 'color1';
  color[1].id = 'color2';
  color[2].id = 'color3';
  color[3].id = 'color4';
}

function createSection() {
  const colorPalette = document.querySelector('#container');
  const section = document.createElement('section');
  section.id = 'pixel-board';
  colorPalette.appendChild(section);
}

function toPaint(evt) {
  const colorPalette = document.querySelector('.selected');
  evt.target.setAttribute('id', colorPalette.id);
}

// melhorei meu criador de pixel com a ajuda da julia Barcelos
function createPixelFrame(pixel) {
  const section = document.querySelector('#pixel-board');
  for (let i = 0; i < pixel; i += 1) { 
    const pixels = document.createElement('div');
    section.appendChild(pixels);

    for (let height = 0; height < pixel; height += 1) {
      const pixels = document.createElement('div');
      pixels.classList.add('pixel');
      pixels.addEventListener('click', toPaint);
      pixels.style.display = 'inline-block';
      section.appendChild(pixels);
    }
  }
}

function addClass() {
  const firstClass = document.querySelector('.color');
  firstClass.classList.add('selected');
}

function removeAndCreateClass(createClass) {
  const colorPalette = document.querySelectorAll('.color');
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].classList.remove('selected');
  }
  createClass.target.classList.add('selected');
}

function createClickPalette() {
  const colorPalette = document.querySelectorAll('.color');
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].addEventListener('click', removeAndCreateClass);
  }
}

function createButclear() {
  const main = document.querySelector('#container');
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerHTML = 'Limpar';
  main.appendChild(button);
}

function clear() {
  const button = document.querySelector('#clear-board');
  const pixels = document.querySelectorAll('.pixel');
  button.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].removeAttribute('id', pixels.id);
      
    }
  });
}

function createForm(){
  const section = document.createElement('section');
  const main = document.querySelector('#container');
  section.id = 'input-button'
  section.method = 'POSTH'
  main.appendChild(section)
}

function createInput(){
  const input = document.createElement('input');
  const section = document.querySelector('#input-button');
  input.id = 'board-size';
  input.type = 'number';
  input.min = '1';
  input.placeholder = 'quantidade de pixel';
  section.appendChild(input);
}

function createButtonInput(){
  const createButtonInput = document.createElement('button');
  const section = document.querySelector('#input-button');
  createButtonInput.id = 'generate-board';
  createButtonInput.type = 'submit'
  createButtonInput.innerHTML = 'VQV';
  section.appendChild(createButtonInput);
}

function functionButton() {
  const buttonInput = document.querySelector('#generate-board');
  const input = document.querySelector('#board-size')
  const section = document.querySelector('#pixel-board')
  let base = 0
  buttonInput.addEventListener('click', () => {
    section.innerHTML = ''
    if (input.value === '') {
       alert('Board inválido!');
    } else if (input.value < 5) {
      base = 5
      createPixelFrame(base)
    } else if (input.value > 50) {
      base = 50
      createPixelFrame(base)
    } else {
       base = (input.value)
       createPixelFrame(base)
    }
    clear()
  })
}
