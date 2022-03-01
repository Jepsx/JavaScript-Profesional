import MediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video');

const button = document.querySelector('button');
const mute = document.querySelector('#mute');
const player = new MediaPlayer({ el: video, plugins: [
      new AutoPlay(), new AutoPause(),
] });
button.onclick = () => player.togglePlay();

mute.onclick = () => player.mute();
