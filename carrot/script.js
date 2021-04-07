let field = document.querySelector('.g__field');
let play_button = document.querySelector('playBtn');
let game_timer = document.querySelector('timer');
let game_score = document.querySelector('score');

carrotOrBug('carrot', 5);
carrotOrBug('bug', 5);

//두사이의 난수 생성하기
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

let fieldWidth = field.offsetWidth - '80';
let fieldHeight = field.offsetHeight - '80';

// 당근 벌레 배치하기
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

// game play button
play_button.addEventListener('click', () => {});
