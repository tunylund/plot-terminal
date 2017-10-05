import yAxis from './y-axis'
import xAxis from './x-axis'
import overlay from './overlay'
import graph from './graph'

export interface Point {
  x: number
  y: number
}

export default function plot (points: Point[], title?: string): string {
  const y = yAxis(points)
  const x = xAxis(points)
  const values = graph(points)
  const leftPad = y.split('\n').reduce((memo, line) => line.includes('|') ? line.indexOf('|') : memo, 0)
  const bottomPad = x === '' ? 0 : (x.split('\n').length - 1) * -1
  const paddedTitle = title ? title.padStart(title.length + leftPad) + '\n' : ''
  const base = overlay(y, x, leftPad, bottomPad)
  const result = overlay(base, values, leftPad, -bottomPad)
  return points.length === 0 ? '' : paddedTitle + result
}
