import { Point } from './plot'

function labels (values: number[]): number[] {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const step = Math.ceil((max - min) / values.length)
  return new Array(values.length)
    .fill(0)
    .map((i, ix) => ix * step + min)
}

function trimToMaxLength (str: string, maxLength: number) {
  return str.length <= maxLength ? str :
    str.slice(0, maxLength - 1).concat('~')
}

function centerStr (str: string, length: number) {
  const neededPadding = length - str.length
  const makeSpace = (length: number) => new Array(length).fill(' ').join('')
  const left = makeSpace(Math.ceil(neededPadding / 2))
  const right = makeSpace(Math.floor(neededPadding / 2))
  return left + str + right
}

function xAxisLabels (points: Point[]): string {
  const xLabels = labels(points.map(p => p.x))
    .map(String)
  if (xLabels.some(l => l.length > 3)) {
    return xLabels
      .map((l, ix) => trimToMaxLength(l, ix === 0 ? 5 : 9))
      .map((l, ix) => ix === 0 ? l.padEnd(5) : (ix === 1 ? ' ' : '') + centerStr(l, 9))
      .reduce((memo, l, ix) => {
        memo[ix % 2].push(l)
        return memo
      }, [[], []] as string[][])
      .reverse()
      .map(row => row.join(' '))
      .join('\n')
  } else {
    const maxLength = 3
    return xLabels
      .map((l, ix) => ix === 0 ? l : l.padStart(maxLength + 2, ' '))
      .join('')
  }
}

export default function xAxis (points: Point[]): string {
  return [
    labels(points.map(p => p.x)).map((x, ix) => ix === 0 ? '`----' : '^----').join(''),
    xAxisLabels(points)
  ].filter(x => x !== '')
   .join('\n')
}
