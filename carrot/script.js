let field = document.querySelector('.g__field');

//두사이의 난수 생성하기
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

let fieldWidth = field.offsetWidth - '80px';
let fieldHeight = field.offsetHeight - '80px';

// function setCarrot() {
//   let carrot = document.createElement('img'); //div element
//   carrot.setAttribute('class', 'carrot'); // class = carrot
//   carrot.setAttribute('src', 'img/carrot.png');
//   carrot.style.position = 'absolute';
//   carrot.style.width = '80px';
//   carrot.style.height = '80px';
//   const x = randomNumber(0, fieldWidth);
//   const y = randomNumber(0, fieldHeight);
//   carrot.style.left = `${x}px`;
//   carrot.style.top = `${y}px`;
//   field.appendChild(carrot);
// }

// function setBug() {
//   let bug = document.createElement('img'); //div element
//   bug.setAttribute('class', 'bug'); // class = carrot
//   bug.setAttribute('src', 'img/bug.png');
//   bug.style.position = 'absolute';
//   bug.style.width = '80px';
//   bug.style.height = '80px';
//   const x = randomNumber(0, fieldWidth);
//   const y = randomNumber(0, fieldHeight);
//   bug.style.left = `${x}px`;
//   bug.style.top = `${y}px`;
//   field.appendChild(bug);
// }

function carrotOrBug(className, num) {
  for (let i = 0; i < num; i++) {
    let item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('data-id', className);
    item.setAttribute('src', `img/${className}.png`);
    item.style.position = 'absolute';
    item.style.width = '80px';
    item.style.height = '80px';
    const x = randomNumber(0, fieldWidth);
    const y = randomNumber(0, fieldHeight);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

carrotOrBug('carrot', 5);
// setCarrot();
// setBug();
