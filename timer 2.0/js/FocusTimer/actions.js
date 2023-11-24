import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
    
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
    
}

export function addFiveMinutes() {
  el.minutes.textContent = String(Number(el.minutes.textContent) + 5).padStart(2, "0");
}

export function minusFiveMinutes() {
  if (Number(el.minutes.textContent) >= 5) {
    el.minutes.textContent = String(Number(el.minutes.textContent) - 5).padStart(2, "0");
  }
}

export function toggleMusic(event) {
  const track = event.currentTarget.id; 
  sounds.toggleBackgroundAudio(track);

  state.isMute = Object.values(sounds.bgAudios).every((audio) => audio.paused);
}