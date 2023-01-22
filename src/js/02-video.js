import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

const result = JSON.parse(localStorage.getItem('videoplayer-current-time'));

if (result !== null) {
  player.setCurrentTime(result);
}
