function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const spanColor = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', handleClick);

function handleClick() {
  let randomColor = getRandomHexColor()
  spanColor.textContent = randomColor;
  body.style.backgroundColor = `${randomColor}`;
}


btn.style.color = '#fff';
btn.style.fontSize = '16px';
btn.style.fontWeight = '500';
btn.style.padding = '8px 16px';
btn.style.borderRadius = '8px';
btn.style.background = '#4E75FF';
btn.style.border = 'transparent';
btn.style.marginTop = '16px';
