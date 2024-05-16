class Seed {
  x = null;
  y = null;
  size = 20;
  constructor(context, snakes, canvas) {
    this.context = context;
    this.snakes = snakes;
    this.canvas = canvas;
    this.x =
      parseInt(Math.random() * (canvas.width - this.size * 3)) + this.size * 2;
    this.y =
      parseInt(Math.random() * (canvas.height - this.size * 3)) + this.size * 2;
  }
  get size() {
    return this.size;
  }
  set size(value) {
    this.size = value;
  }
  get x() {
    return this.x;
  }
  get y() {
    return this.y;
  }
  set x(value) {
    this.x = value;
  }
  set y(value) {
    this.y = value;
  }
  draw() {
    this.context.beginPath();
    this.context.fillStyle = 'green';
    this.context.fillRect(this.x, this.y, this.size, this.size);
    this.context.fillStyle = 'black';
  }

  newSeed(snake = null) {
    this.x =
      parseInt(Math.random() * (this.canvas.width - this.size * 3)) +
      this.size * 2;
    this.y =
      parseInt(Math.random() * (this.canvas.height - this.size * 3)) +
      this.size * 2;
    if (snake) {
      let snakes = [];
      if (snake.parent_snake == null && snake.apply_for == 1) {
        snakes = [snake];
      } else if (snake.parent_snake && snake.apply_for == 2) {
        snakes = [snake.parent_snake];
      } else if (snake.parent_snake && snake.apply_for == 3) {
        snakes = [snake, snake.parent_snake];
      } else {
        snakes = [snake];
      }
      for (let i = 0; i < snakes.length; i++) {
        snakes[i].snake_length.unshift([this.x, this.y]);
        snakes[i].snake_length.unshift([this.x, this.y]);
      }
    }
  }
  /*
  - apply_for:
    + 0: none
    + 1: current snake
    + 2: parent snake
    + 3: all snakes
  */

  isEat() {
    for (let i = 0; i < this.snakes.length; i++) {
      let snake_pos = new Path2D();
      snake_pos.rect(
        this.snakes[i].x - this.snakes[i].size,
        this.snakes[i].y - this.snakes[i].size,
        this.snakes[i].size * 2,
        this.snakes[i].size * 2
      );
      if (this.context.isPointInPath(snake_pos, this.x, this.y)) {
        this.newSeed(this.snakes[i]);
        new Audio('./audio/eat.mp3').play();
        GameData.increaseCoin(1);
      }
    }
  }
}
