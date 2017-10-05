import { assertStr } from './test-utils'
import graph from './../src/graph'

describe('graph', function () {

  it('should return nothing for no data', () => {
    assertStr(graph([]), '')
  })

  it('should plot a 1 datapoint', () => {
    assertStr(graph([{x: 0, y: 0}]), '*')
  })

  it('should plot a datapoint on y axis', () => {
    assertStr(graph([
      {x: 0, y: 0},
      {x: 0, y: 1}
    ]), '*\n*')
  })

  it('should plot a datapoint on x axis', () => {
    assertStr(graph([
      {x: 0, y: 0},
      {x: 1, y: 0}
    ]), '\n' +
        '*    *')
  })

  it('should plot a datapoint on x and y axises', () => {
    assertStr(graph([
      {x: 0, y: 0},
      {x: 1, y: 1}
    ]), '     *\n' +
        '*')
  })

  it('should plot fractions', () => {
    assertStr(graph([
      {x: 0, y: 0},
      {x: 1.6, y: 1.4},
      {x: 2, y: 2}
    ]), '          *\n' +
        '        *\n' +
        '*')
  })

  it('should plot more graphs', () => {
    assertStr(graph([
      { x: 1, y: 0 },
      { x: 10, y: 0 },
      { x: 50, y: 0 },
      { x: 100, y: 0 },
      { x: 200, y: 0 }]),
      '\n' +
      '\n' +
      '\n' +
      '\n' +
      '*   *    *          *')
  })

})
