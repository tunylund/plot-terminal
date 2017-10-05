import { Point } from './plot'

function range (values: number[]): number {
  return Math.max(...values) - Math.min(...values)
}

function makeCanvas (points: Point[]) {
  const size = points.length
  const space = ' '.charCodeAt(0)
  return new Array(size).fill('').map(y => {
    return new Array(size).fill('').map(x => {
      return new Array(5).fill(space)
    })
  })
}

function placeMarks (canvas: number[][][], points: Point[]) {
  const y = points.map(p => p.y)
  const ymin = Math.min(...y)
  const yscale = range(y) / (range([1, points.length]) || 1)
  const x = points.map(p => p.x)
  const xmin = Math.min(...x)
  const xscale = range(x) / (range([1, points.length]) || 1)
  const mark = '*'.charCodeAt(0)
  points.forEach(p => {
    const y = Math.round((p.y - ymin) * yscale)
    const x = (p.x - xmin) * xscale
    const xa = Math.floor(x)
    const xb = Math.floor(x % 1 * 5)
    canvas[y][xa][xb] = mark
  })
  return canvas
}

function render (canvas: number[][][]) {
  return canvas.reverse().map(row => {
    return row.map((portion: number[]) => {
      return portion.map(x => String.fromCharCode(x)).join('')
    }).join('')
  }).join('\n').replace(/ +$/gm, '')
}

export default function graph (points: Point[]): string {
  return render(placeMarks(makeCanvas(points), points))
}
