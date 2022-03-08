import MediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.ts'

const video = document.querySelector('video');

const button = document.querySelector('button');
const mute = document.querySelector('#mute');
const player = new MediaPlayer({ el: video, plugins: [
      new AutoPlay(), new AutoPause(),
] });
button.onclick = () => player.togglePlay();

mute.onclick = () => player.mute();

if ('serviceWorker' in navigator){
}
navigator.serviceWorker.register("/sw.js").catch(error => {
      console.log(error.message);
})