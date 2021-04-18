let field = document.querySelector('.g__field');
let playBtn = document.querySelector('.playBtn');
let game_timer = document.querySelector('.timer');
let game_score = document.querySelector('.score');
let result = document.querySelector('.pop-up');
let refresh = document.querySelector('.refreshBtn');
let popupMsg = document.querySelector('.popup_msg');
let fieldWidth = field.offsetWidth - '80';
let fieldHeight = field.offsetHeight - '80';
let score;
let gameStart = false;
const startingSeconds = 10;
let time = startingSeconds * 60; // 600 =>

const carroutSound = new Audio('./sound/carrot_pull.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const bgSound = new Audio('./sound/bg.mp3');
const gameWin = new Audio('./sound/game_win.mp3');
const alertSound = new Audio('./sound/alert.wav');
// start game timer
//1초 단위로 타이머를 업데이트 하는것

playBtn.addEventListener('click', () => {
  if (gameStart) {
    stopGame();
  } else {
    playGame();
  }
});

refresh.addEventListener('click', () => {
  playGame();
  result.classList.add('popup-hide');
  playBtn.style.visibility = 'visible';
});

// 3. play -> pause button and timer
function playGame() {
  score = 0;
  field.innerHTML = '';
  gameStart = true;
  game_score.innerText = 5;
  carrotOrBug('carrot', 5);
  carrotOrBug('bug', 5);
  stopBtn();
  showTimeandScore();
  startTimer();
  playSound(bgSound);
}
//4. STOP game
function stopGame() {
  gameStart = false;
  stopTimer();
  hideGameBtn();
  showPopupText();
  playSound(alertSound);
  stopSound(bgSound);
}

function updateCountDown(time) {
  const minutes = Math.floor(time / 60); //10
  let seconds = time % 60; // 0
  game_timer.innerHTML = `${minutes} : ${seconds}`;
  time--;
}

function startTimer() {
  let count = 10;
  updateCountDown(count);

  timer = setInterval(() => {
    if (count <= 0) {
      loseGame();
      clearInterval(timer);
      if (game_score.innerHTML === score) {
        loseGame();
      }
      return;
    }
    updateCountDown(--count);
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

// 점수 타임 보여주기 - 게임 시작할때
function showTimeandScore() {
  game_timer.style.visibility = 'visible';
  game_score.style.visibility = 'visible';
}

//게임 중지 버튼
function stopBtn() {
  let item = playBtn.querySelector('.svg-inline--fa');
  item.classList.add('fa-stop');
  item.classList.remove('fa-play');
}

function hideGameBtn() {
  playBtn.style.visibility = 'hidden';
}

function showPopupText() {
  popupMsg.innerHTML = `Replay ？`;
  result.classList.remove('popup-hide');
  refresh.addEventListener('click', () => {
    result.style.visibility = 'hidden';
    playGame();
  });
}
// 잡기  -- 이벤트 위임
field.addEventListener('click', (event) => {
  const target = event.target;
  if (target.className === 'carrot') {
    playSound(carroutSound);
    target.remove();
    updateScoreBoard();
  } else if (target.className === 'bug') {
    playSound(bugSound);
    stopTimer();
    loseGame();
  }
});

function loseGame() {
  popupMsg.innerHTML = `YOU LOST 💩 🚽`;
  playSound(bugSound);
  hideGameBtn();
  stopSound(bgSound);
  stopSound(bugSound);
  stopTimer();
  result.classList.remove('popup-hide');
}

function finishGame() {
  //stopTimer();
  popupMsg.innerHTML = `YOU WON 🎉`;
  playSound(gameWin);
  hideGameBtn();
  stopSound(bgSound);
  stopTimer();
  result.classList.remove('popup-hide');
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}
function stopSound(sound) {
  sound.pause();
}
function updateScoreBoard() {
  score++;
  game_score.innerText = 5 - score;
  if (game_score.innerText == 0) {
    finishGame();
  }
}

// 1. 당근 벌레 배치하기
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

// 2. 두사이의 난수 생성하기
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
