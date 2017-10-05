import { assertStr } from './test-utils'
import yAxis from '../src/y-axis'

describe('y-axis', function () {

  it('should return nothing for no data', () => {
    assertStr(yAxis([]), ``)
  })

  it('should return an axis for 1 data', () => {
    assertStr(yAxis([{x: 0, y: 0}]), `   |\n 0 |`)
  })

  it('should return an axis for several data', () => {
    assertStr(yAxis([
      {x: 0, y: 1},
      {x: 0, y: 2}
    ]), `   |\n 2 |\n 1 |`)
  })

  it('should left pad long values', () => {
    assertStr(yAxis([
      {x: 0, y: 20},
      {x: 0, y: 2}
    ]), `    |\n 12 |\n  2 |`)
  })
})
