class Seed {
  x = null;
  y = null;
  constructor(context, snake, canvas) {
    this.context = context;
    this.snake = snake;
    this.canvas = canvas;
  }
  draw() {
    this.context.beginPath();
    this.context.fillStyle = 'green';
    this.context.fillRect(this.x, this.y, this.snake.size, this.snake.size);
    this.context.fillStyle = 'black';
  }
  newSeed() {
    this.x =
      parseInt(Math.random() * (this.canvas.width - this.snake.size * 3)) +
      this.snake.size * 2;
    this.y =
      parseInt(Math.random() * (this.canvas.height - this.snake.size * 3)) +
      this.snake.size * 2;
    this.snake.snake_length.unshift([this.x, this.y]);
    this.snake.snake_length.unshift([this.x, this.y]);
  }
  isEat() {
    let snake_pos = new Path2D();
    snake_pos.arc(this.snake.x, this.snake.y, this.snake.size, 0, 2 * Math.PI);
    if (this.context.isPointInPath(snake_pos, this.x, this.y)) {
      this.newSeed();
    }
  }
}
