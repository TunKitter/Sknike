class SpawnSnake {
  constructor(snake, newSnake, seed) {
    return function () {
      snake.createSnakeRule(function () {
        newSnake.draw();
      });
    };
  }
}
