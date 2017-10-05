import { Point } from './plot'

function range (values: number[]): number {
  return Math.max(...values) - Math.min(...values)
}

function times (size: number, thing: any = '') {
  return new Array(size).fill(thing)
}

function makeCanvas (points: Point[]) {
  const size = points.length
  return times(size).map(y => {
    return times(size).map(x => {
      return times(5, ' ')
    })
  })
}

function placeMarks (canvas: string[][][], points: Point[]) {
  const targetRange = range([1, points.length]) || 1

  const yRange = range(points.map(p => p.y)) || 1
  const yMin = Math.min(...points.map(p => p.y))
  const yScale = targetRange / yRange

  const xRange = range(points.map(p => p.x)) || 1
  const xMin = Math.min(...points.map(p => p.x))
  const xScale = targetRange / xRange

  const row = (v: number) => Math.round((v - yMin) * yScale)
  const col = (v: number) => Math.floor((v - xMin) * xScale)
  const fraction = (v: number) => Math.floor(((v - xMin) * xScale) % 1 * 5)

  points.forEach(p => {
    canvas[row(p.y)][col(p.x)][fraction(p.x)] = '*'
  })
  return canvas
}

function render (canvas: string[][][]) {
  return canvas.reverse().map(row => {
    return row.map(column => {
      return column.join('')
    }).join('')
  }).join('\n').replace(/ +$/gm, '')
}

export default function graph (points: Point[]): string {
  return render(placeMarks(makeCanvas(points), points))
}
