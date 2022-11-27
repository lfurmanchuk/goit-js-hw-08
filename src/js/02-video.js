import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

  player.on("timeupdate", throttle(onPlay, 1000));

setCurrentTime();

function onPlay(evt) {
  localStorage.setItem(LOCALSTORAGE_KEY, evt.seconds);
}

function setCurrentTime() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
  }
}