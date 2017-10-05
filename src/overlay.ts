function times (x: number, thing?: string) {
  return new Array(x).fill(thing || '')
}

function rows (str: string) {
  return str.split('\n')
}

function leftPad (str: string, pad: number) {
  return rows(str).map(r => r.padStart(pad + r.length)).join('\n')
}

function bottomPad (str: string, pad: number) {
  const max = maxX(str)
  return rows(str)
    .concat(times(pad).map(r => r.padStart(max)))
    .join('\n')
}

function maxX (str: string) {
  return rows(str).reduce((memo, row) => memo > row.length ? memo : row.length, 0)
}

function makeSquareV (str: string, yLength: number) {
  const xLength = maxX(str)
  const pad = yLength - rows(str).length
  return times(pad).map(r => r.padStart(xLength)).concat(rows(str)).join('\n')
}

function makeSquareH (str: string, xLength: number) {
  return rows(str).map(row => row.padEnd(xLength)).join('\n')
}

function chars (str: string): string[][] {
  return rows(str).map(row => row.split(''))
}

function union (a: string[], b: string[]): string[] {
  return times(a.length, ' ')
    .map((x, ix) => b[ix] !== ' ' ? b[ix] : a[ix])
}

export default function overlay (a: string, b: string, offsetX = 0, offsetY = 0): string {
  const evenWidthA = bottomPad(leftPad(makeSquareH(a, maxX(a)), offsetX < 0 ? -offsetX : 0), offsetY < 0 ? -offsetY : 0)
  const evenWidthB = bottomPad(leftPad(makeSquareH(b, maxX(b)), offsetX > 0 ? offsetX : 0), offsetY > 0 ? offsetY : 0)
  const xLength = Math.max(maxX(evenWidthA), maxX(evenWidthB))
  const yLength = Math.max(rows(evenWidthA).length, rows(evenWidthB).length)
  const sameSizedA = makeSquareV(makeSquareH(evenWidthA, xLength), yLength)
  const sameSizedB = makeSquareV(makeSquareH(evenWidthB, xLength), yLength)
  const ac = chars(sameSizedA)
  const bc = chars(sameSizedB)

  const unionm = ac.map((row, iy) => union(row, bc[iy]))
  return unionm.map(row => row.join('')).join('\n')
}
