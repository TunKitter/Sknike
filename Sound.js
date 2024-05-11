class Sound {
  constructor(url) {
    this.url = url;
    this.audio = new Audio(this.url);
  }
  play() {
    // play from start 00:00
    this.audio.currentTime = 0;
    this.audio.play();
  }
  pause() {
    this.audio.pause();
  }
  resume() {
    this.audio.play();
  }
}
