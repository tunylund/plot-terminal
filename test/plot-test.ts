import { assertStr } from './test-utils'
import plot from '../src/plot'

describe('plot', function () {

  it('should return empty for no data', () => {
    assertStr(plot([]), ``)
  })

  it('should return empty for no data and a title', () => {
    assertStr(plot([], 'title'), ``)
  })

  it('should plot a 1 datapoint graph', () => {
    assertStr(plot([{x: 0, y: 0}], 'title'),
      '   title\n' +
      '   |    \n' +
      ' 0 *----\n' +
      '   0    ')
  })

  it('should plot a small chart', () => {
    assertStr(plot([
      {x: 0, y: 0},
      {x: 1, y: 1}
    ], 'title'),
   '   title\n' +
   '   |         \n' +
   ' 1 |    *    \n' +
   ' 0 *----^----\n' +
   '   0    1    ')
  })

  it.only('should plot a large chart', () => {
    assertStr(plot([
      {x: 1 / 5, y: 5},
      {x: 1, y: 3},
      {x: 2, y: 2},
      {x: 3, y: 1},
      {x: 4, y: 1}
    ], 'min J(θ)'),
    '   min J(θ)\n' +
    '   |                        \n' +
    ' 5 *                        \n' +
    ' 4 |                        \n' +
    ' 3 |   *                    \n' +
    ' 2 |        *               \n' +
    ' 1 `----^----^---*^---*^----\n' +
    '   0.2  1.2  2.2  3.2  4.2  '
    )
  })

})
