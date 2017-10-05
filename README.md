# Plot terminal
A small plotting library to make ascii graphs on the terminal environment.

## Usage
```
import plot from 'plot-terminal'

console.log(plot([
  {x: 0, y: 2},
  {x: 1, y: 1},
  {x: 2, y: 0}
  ], 'plot-this'))

// =>
//   plot-this
//   |
// 2 *
// 1 |    *
// 0 `----^----*----
//
```
