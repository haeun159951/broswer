'use strict';

import PopUp from './popup.js';
import { GameBuilder, Reason } from './game.js';
import * as sound from './sound.js';
const game = new GameBuilder()
  .gameDuration(5)
  .carrotCount(3)
  .bugCount(2)
  .build();
const gameFinishBanner = new PopUp();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = 'REPLAY❓';
      sound.playAlert();
      break;
    case Reason.win:
      message = 'YOU WON 🎉';
      sound.playWin();
      break;
    case Reason.lose:
      message = 'YOU LOST 💩';
      sound.playBug();
      break;
    default:
      throw new Error('not a valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
