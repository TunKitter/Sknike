class SpawnSnake {
  constructor(context, snake, newSnake, seed) {
    return function () {
      snake.createSnakeRule(function () {
        {
          newSnake.rules.forEach(rule => {
            rule();
          });
          console.log(newSnake.x, seed.x, '|', newSnake.y, seed.y);
          if (newSnake.x - seed.x > newSnake.speed) newSnake.direction = 'left';
          else if (newSnake.x - seed.x < 0) newSnake.direction = 'right';
          else newSnake.x = seed.x;
          if (newSnake.y - seed.y > newSnake.speed) newSnake.direction = 'up';
          else if (newSnake.y - seed.y < 0) newSnake.direction = 'down';
          else newSnake.y = seed.y;

          newSnake.snake_length.push([newSnake.x, newSnake.y]);
          newSnake.snake_length.shift();
          newSnake.handleDirection();
          context.beginPath();
          context.fillRect(10, 10, newSnake.radius, newSnake.radius);
          context.fillStyle = newSnake.styles.tail.value;
          context.fillRect(
            newSnake.snake_length[0][0],
            newSnake.snake_length[0][1],
            newSnake.size,
            newSnake.size
          );
          let temp_body = newSnake.styles.body.value;
          for (let i = 1; i < newSnake.snake_length.length - 1; i++) {
            context.fillStyle =
              temp_body[i < temp_body.length ? i : i % temp_body.length];
            context.fillRect(
              newSnake.snake_length[i][0],
              newSnake.snake_length[i][1],
              newSnake.size,
              newSnake.size
            );
          }
          context.fillStyle = newSnake.styles.head.value;
          context.fillRect(
            newSnake.snake_length[newSnake.snake_length.length - 1][0],
            newSnake.snake_length[newSnake.snake_length.length - 1][1],
            newSnake.size,
            newSnake.size
          );

          context.fill();
          context.closePath();
        }
      });
    };
  }
}
