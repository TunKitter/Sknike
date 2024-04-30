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

  newSeed(snake) {
    // for (let i = 0; i < snake.length; i++) {
    this.x =
      parseInt(Math.random() * (this.canvas.width - this.size * 3)) +
      this.size * 2;
    this.y =
      parseInt(Math.random() * (this.canvas.height - this.size * 3)) +
      this.size * 2;
    if (snake) {
      snake.snake_length.unshift([this.x, this.y]);
      snake.snake_length.unshift([this.x, this.y]);
    }
    // }
  }
  isEat() {
    for (let i = 0; i < this.snakes.length; i++) {
      let snake_pos = new Path2D();
      snake_pos.arc(
        this.snakes[i].x,
        this.snakes[i].y,
        this.snakes[i].size,
        0,
        2 * Math.PI
      );
      if (this.context.isPointInPath(snake_pos, this.x, this.y)) {
        this.newSeed(this.snakes[i]);
      }
    }
  }
}
