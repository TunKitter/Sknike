class UseTongue {
  constructor(context, _snake, _seed) {
    return function () {
      if (
        Math.abs(_snake.x - _seed.x) < 100 &&
        Math.abs(_snake.y - _seed.y) < 100
      ) {
        context.beginPath();
        context.moveTo(_snake.x, _snake.y);
        context.lineTo(_seed.x, _seed.y);
        context.stroke();
        if (
          Math.abs(_snake.x - _seed.x) < 90 &&
          Math.abs(_snake.y - _seed.y) < 90
        )
          _seed.newSeed(_snake);
      }
    };
  }
}
