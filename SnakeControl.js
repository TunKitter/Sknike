class SnakeControl {
  constructor(snake, _window) {
    this.snake = snake;
    this._window = _window;
  }
  preventGoBack(direction, preventDirection, snake) {
    if (snake.direction !== preventDirection || snake.speed == 0) {
      if (snake.direction === direction) snake.speed += 5;
      else snake.speed = 2;
      snake.direction = direction;
    } else {
      snake.speed -= 5;
      if (snake.speed < 0) snake.speed = 0;
    }
  }
  keyDownEvent() {
    var preventGoBack = this.preventGoBack;
    var snake = this.snake;
    this._window.addEventListener('keydown', function (e) {
      switch (e.key) {
        case 'ArrowLeft':
        case 'a': {
          preventGoBack('left', 'right', snake);
          break;
        }
        case 'ArrowRight':
        case 'd': {
          preventGoBack('right', 'left', snake);
          break;
        }
        case 'ArrowUp':
        case 'w': {
          preventGoBack('up', 'down', snake);
          break;
        }
        case 'ArrowDown':
        case 's': {
          preventGoBack('down', 'up', snake);
          break;
        }
      }
    });
  }
}
