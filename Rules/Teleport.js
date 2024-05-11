class Teleport {
  start_point = null;
  end_point = null;
  sounds = {
    black_hole: new Audio('/audio/hole.mp3'),
    teleport: new Audio('/audio/teleport.mp3'),
  };
  constructor(canvas, context, snake, image) {
    this.sounds.black_hole.loop = true;
    let _this = this;
    canvas.addEventListener('click', function (e) {
      if (_this.start_point == null) _this.start_point = [e.x, e.y];
      else if (_this.end_point == null) _this.end_point = [e.x, e.y];
      else {
        _this.sounds.black_hole.pause();
        _this.start_point = [e.x, e.y];
        _this.end_point = null;
      }
    });
    return function () {
      if (_this.start_point != null) {
        context.drawImage(
          image,
          _this.start_point[0] - 25,
          _this.start_point[1] - 25,
          50,
          50
        );
      }
      if (_this.end_point != null) {
        context.drawImage(
          image,
          _this.end_point[0] - 25,
          _this.end_point[1] - 25,
          50,
          50
        );
      }

      if (_this.start_point != null && _this.end_point != null) {
        let imgRect = new Path2D();
        _this.sounds.black_hole.play();
        imgRect.rect(
          _this.start_point[0] - 25,
          _this.start_point[1] - 25,
          50,
          50
        );
        if (context.isPointInPath(imgRect, snake.x, snake.y)) {
          _this.sounds.black_hole.pause();
          _this.sounds.teleport.play();
          snake.x = _this.end_point[0];
          snake.y = _this.end_point[1];
          _this.start_point = null;
          _this.end_point = null;
        }
      }
    };
  }
}
