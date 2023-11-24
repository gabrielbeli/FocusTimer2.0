import state from './state.js';
import { controls } from './elements.js';
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js';


export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] !== 'function') {
      return;
    }
    actions[action](event);
  });
}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = "";
  });

  el.minutes.onkeypress = (event) => /\d/.test(event.key);

  el.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent;
    time = Math.min(60, Math.max(0, parseInt(time)));

    state.minutes = time;
    state.seconds = 0;

    updateDisplay();
    el.minutes.removeAttribute('contenteditable');
  });
}


el.musicButton1.addEventListener('click', actions.toggleMusic);
el.musicButton2.addEventListener('click', actions.toggleMusic);
el.musicButton3.addEventListener('click', actions.toggleMusic);
el.musicButton4.addEventListener('click', actions.toggleMusic);

export function registerSumAndMinusButtons() {
  el.sumButton.addEventListener('click', actions.addFiveMinutes);
  el.minusButton.addEventListener('click', actions.minusFiveMinutes);
}

