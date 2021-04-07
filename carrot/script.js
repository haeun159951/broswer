let field = document.querySelector('.g__field');
let play_button = document.querySelector('.playBtn');
let game_timer = document.querySelector('.timer');
let game_score = document.querySelector('.score');

function timer() {
  let setTime = 10;
}

function showTimeandScore() {
  game_timer.style.visibility = 'visible';
  game_score.style.visibility = 'visible';
}

function pauseBtn() {
  let item = document.querySelector('.fa-play');
  item.classList.remove('fa-play');
  item.classList.add('fa-stop');
}

// play -> pause button and timer
function playGame() {
  game_timer.innerHTML = `00:10`;
  game_score.innerHTML = `0`;
  pauseBtn();
  carrotOrBug('carrot', 5);
  carrotOrBug('bug', 5);
  showTimeandScore();
}

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
document.addEventListener('DOMContentLoaded', function (event) {
  play_button.addEventListener('click', () => {
    playGame();
  });
});
