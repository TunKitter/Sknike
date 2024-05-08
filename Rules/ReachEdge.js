class ReachEdge {
  constructor(_snake, canvas, callback) {
    return function () {
      if (
        _snake.x - _snake.size < 0 ||
        _snake.x > canvas.width - _snake.size ||
        _snake.y - _snake.size < 0 ||
        _snake.y > canvas.height - _snake.size
      ) {
        if (_snake.x - _snake.size < 0) _snake.x = 0;
        else if (_snake.x > canvas.width - _snake.size)
          _snake.x = canvas.width - _snake.size;
        if (_snake.y - _snake.size < 0) _snake.y = 0;
        else if (_snake.y > canvas.height - _snake.size)
          _snake.y = canvas.height - _snake.size;
        callback();
      }
    };
  }
}
