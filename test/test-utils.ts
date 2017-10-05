import * as assert from 'assert'

export function assertStr (actual: string, expected: string) {
  const a = actual.split('\n').map(r => `'${r}'`).join('\n')
  const e = expected.split('\n').map(r => `'${r}'`).join('\n')
  assert.equal(actual, expected, `\n${a}\n\ndoes not match\n\n${e}\n`)
}
