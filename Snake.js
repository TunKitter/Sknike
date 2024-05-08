class Snake {
  INITIAL_FRAME_SPACE = 10;
  size = 20;
  x = this.size + this.INITIAL_FRAME_SPACE;
  y = this.size + this.INITIAL_FRAME_SPACE;
  snake_length = [[this.x, this.y]];
  direction = 'right';
  context = null;
  speed = 2;
  rules = [];
  constructor(context) {
    this.context = context;
  }
  get size() {
    return this.size;
  }
  get snake_length() {
    return this.snake_length;
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
  get context() {
    return this.context;
  }
  set context(value) {
    this.context = value;
  }
  get direction() {
    return this.direction;
  }
  set direction(value) {
    this.direction = value;
  }
  get speed() {
    return this.speed;
  }
  set speed(value) {
    this.speed = value;
  }
  draw() {
    this.rules.forEach(rule => {
      rule();
    });
    this.snake_length.push([this.x, this.y]);
    this.snake_length.shift();
    this.handleDirection();
    this.context.beginPath();
    // this.context.fillRect(10, 10, this.radius, this.radius);
    for (let i = 0; i < this.snake_length.length; i++) {
      this.context.fillRect(
        this.snake_length[i][0],
        this.snake_length[i][1],
        this.size,
        this.size
      );
    }
    this.context.fill();
    this.context.closePath();
  }
  handleDirection() {
    switch (this.direction) {
      case 'right': {
        this.x += this.speed;
        break;
      }
      case 'left': {
        this.x -= this.speed;
        break;
      }
      case 'down': {
        this.y += this.speed;
        break;
      }
      case 'up': {
        this.y -= this.speed;
        break;
      }
    }
    return [this.x, this.y];
  }
  createSnakeRule(callback) {
    this.rules.push(callback);
  }
}
