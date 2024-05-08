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
  styles = {
    head: {
      style: 'color',
      value: '#FF0080',
    },
    body: {
      style: 'color',
      value: ['#FF5580', '#FFAA80'],
    },
    tail: {
      style: 'color',
      value: '#FFFF80',
    },
  };
  constructor(context) {
    this.context = context;
  }
  get size() {
    return this.size;
  }
  get snake_length() {
    return this.snake_length;
  }
  set styleHead(arr) {
    this.styles.head = arr;
  }
  set styleBody(arr) {
    this.styles.body = arr;
  }
  set styleTail(arr) {
    this.styles.tail = arr;
  }
  set styles(arr) {
    this.styles = arr;
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
    this.context.fillStyle = this.styles.tail.value;
    this.context.fillRect(
      this.snake_length[0][0],
      this.snake_length[0][1],
      this.size,
      this.size
    );
    let temp_body = this.styles.body.value;
    for (let i = 1; i < this.snake_length.length - 1; i++) {
      this.context.fillStyle =
        temp_body[i < temp_body.length ? i : i % temp_body.length];
      this.context.fillRect(
        this.snake_length[i][0],
        this.snake_length[i][1],
        this.size,
        this.size
      );
    }
    this.context.fillStyle = this.styles.head.value;
    this.context.fillRect(
      this.snake_length[this.snake_length.length - 1][0],
      this.snake_length[this.snake_length.length - 1][1],
      this.size,
      this.size
    );

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
