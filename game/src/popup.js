'use strict';
export default class PopUp {
  // class 를 바깥으로 노출시킨다
  constructor() {
    this.popUp = document.querySelector('.pop-up');
    this.popUpText = document.querySelector('.pop-up__message');
    this.popUpRefresh = document.querySelector('.pop-up__refresh');
    this.popUpRefresh.addEventListener('click', () => {
      this.onClick && this.onClick();
      this.hide();
    });
  }
  setClickListener(onClick) {
    this.onClick = onClick; //온클릭 멤버변수에 함수에서 전달받은 온클릭 인자를 할당해준다
  }

  showWithText(text) {
    this.popUpText.innerText = text;
    this.popUp.classList.remove('pop-up--hide');
  }

  hide() {
    this.popUp.classList.add('pop-up--hide');
  }
}
