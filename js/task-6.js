function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const formInput = document.querySelector('#controls input');
const form = document.querySelector('#controls');
const box = document.querySelector('#boxes');
const btn = document.querySelectorAll('#controls button');
const btnCreate = btn[0];
const btnDestroy = btn[1];

const minNumber = 1;
const maxNumber = 100;

let divWidth = 20;
let divHeight = 20;
formInput.value = 1;

const newSize = () => {
  divWidth += 10;
  divHeight += 10;
};

const createBoxes = (amount) => {
  for (let i = minNumber; i <= amount; i++) {
    const div = document.createElement('div');
    div.classList.add('divclass');
    div.style.backgroundColor = getRandomHexColor();
    newSize();
    div.style.width = `${divWidth}px`;
    div.style.height = `${divHeight}px`;
    box.append(div);
    box.style.display = 'flex';
    box.style.gap = '10px';
    box.style.flexWrap = 'wrap';
    box.style.backgroundColor = '#F6F6FE';
    box.style.padding = '32px';
    box.style.width = '500px'
    box.style.borderRadius = '8px';
  }
};

const destroyBoxes = () => {
  const divDelete = box.querySelectorAll('.divclass');
  divDelete.forEach(del => del.remove());
  formInput.value = 1;
  box.style.display = 'none';
};

btnCreate.addEventListener('click', number => {
  number = formInput.value;
  if (number >= minNumber && number <= maxNumber) {
    destroyBoxes();
    createBoxes(number);
  }
});

btnDestroy.addEventListener('click', destroyBoxes);

      form.style.gap = '16px';
      form.style.backgroundColor = '#F6F6FE';
      form.style.padding = '32px';
      form.style.width = '500px';
      form.style.marginBottom = '16px';
      form.style.borderRadius = '8px';
  
      btnCreate.style.width = '120px';
      btnCreate.style.backgroundColor = '#4E75FF';
      btnCreate.style.padding = '8px';
      btnCreate.style.border = 'transparent';
      btnCreate.style.borderRadius = '8px';
      btnCreate.style.color = '#fff';
      btnCreate.style.fontSize = '16px';
      btnCreate.style.fontWeight = '500';

      btnDestroy.style.width = '120px';
      btnDestroy.style.backgroundColor = '#FF4E4E';
      btnDestroy.style.padding = '8px';
      btnDestroy.style.border = 'transparent';
      btnDestroy.style.borderRadius = '8px';
      btnDestroy.style.color = '#fff';
      btnDestroy.style.fontSize = '16px';
      btnDestroy.style.fontWeight = '500';

      formInput.style.width = '186px';
      formInput.style.height = '40px';
      formInput.style.fontSize = '16px';
      formInput.style.textAlign = 'center';
      formInput.style.border = '1px solid #808080;';
      formInput.style.borderRadius = '8px';