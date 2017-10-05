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
  const yWidth = y.split('\n').reduce((memo, line) => line.includes('|') ? line.indexOf('|') : memo, 0)
  const xHeight = x === '' ? 0 : x.split('/n').length
  const paddedTitle = title ? title.padStart(title.length + yWidth) + '\n' : ''
  const base = overlay(y, x, yWidth, -xHeight)
  const result = overlay(base, values, yWidth, xHeight)
  return points.length === 0 ? '' : paddedTitle + result
}
