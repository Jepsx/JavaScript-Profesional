
      class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
  }
  _initPlugins() {  
    this.plugins.forEach(plugin => {
      plugin.run(this.player);
    });

  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  mute() {
    if (this.media.muted == false) {
      this.media.muted = true;
    } else {
      this.media.muted = false;
    }
  }
}

      




     
      export default MediaPlayer;