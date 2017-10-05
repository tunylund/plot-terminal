import { assertStr } from './test-utils'
import xAxis from './../src/x-axis'

describe('x-axis', function () {

  it('should return nothing for no values', () => {
    assertStr(xAxis([]), ``)
  })

  it('should return something for some values', () => {
    assertStr(xAxis([{x: 0, y: 0}]), '`----\n0')
  })

  it('should return more axis with more values', () => {
    assertStr(xAxis([
      {x: 0, y: 0},
      {x: 1, y: 0}
    ]), '`----^----\n' +
           '0    1')
  })

  it('should multiline long values', () => {
    assertStr(xAxis([
      {x: 1000, y: 0},
      {x: 2000, y: 0},
      {x: 3000, y: 0},
      {x: 4000, y: 0}
    ]), '`----^----^----^----\n' +
        '    1750      3250  \n' +
        '1000     2500  ')
  })

  it('should multiline longer values', () => {
    assertStr(xAxis([
      {x: 1000000, y: 0},
      {x: 2000000, y: 0},
      {x: 3000000, y: 0},
      {x: 4000000, y: 0}
    ]), '`----^----^----^----\n' +
        '  1750000   3250000 \n' +
        '1000~  2500000 ')
  })

})
