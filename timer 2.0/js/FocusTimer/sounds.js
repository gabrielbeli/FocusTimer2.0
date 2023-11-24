import state from './state.js';

export const buttonPressAudio = new Audio('./assets/button-press.wav')

export const kitchenTimer = new Audio('./assets/kichen-timer.mp3')

export const bgAudios = {
  tree: new Audio('./assets/Floresta.wav'),
  rain: new Audio('./assets/Chuva.wav'),
  fire: new Audio('./assets/Lareira.wav'),
  store: new Audio('./assets/Cafeteria.wav'),
};

Object.values(bgAudios).forEach((audio) => {
  audio.loop = true;
});

export function toggleBackgroundAudio(track) {
  Object.values(bgAudios).forEach((audio) => {
    audio.pause();
  });

  
  const selectedAudio = bgAudios[track];
  if (state.currentAudioTrack !== track) {
    selectedAudio.play();
  } else {
    selectedAudio.pause();
  }

  state.currentAudioTrack = state.currentAudioTrack !== track ? track : null;
}