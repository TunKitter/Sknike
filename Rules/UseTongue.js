class UseTongue {
  constructor(context, _snake, _seed) {
    var eat_sound = this.eatSound;
    return function () {
      if (
        Math.abs(_snake.x - _seed.x) < 70 &&
        Math.abs(_snake.y - _seed.y) < 70
      ) {
        context.beginPath();
        context.moveTo(_snake.x, _snake.y);
        context.lineTo(_seed.x, _seed.y);
        context.stroke();
        // if (
        // Math.abs(_snake.x - _seed.x) < 60 &&
        // Math.abs(_snake.y - _seed.y) < 60
        // )
        new Audio('./audio/eat.mp3').play();
        _seed.newSeed(_snake);
      }
    };
  }
}
