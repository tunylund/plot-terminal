import overlay from '../src/overlay'
import { assertStr } from './test-utils'

describe('overlay', function () {

  it('should return empty when empty params', () => {
    assertStr(overlay('', ''), '')
  })

  it('should return empty when empty params', () => {
    assertStr(overlay('', ''), '')
  })

  it('should return combined string', () => {
    assertStr(overlay(`a`, `b`), `b`)
  })

  it('should return ignore spaces in b', () => {
    assertStr(overlay(`a\naa`, ` b\n  `), `ab\naa`)
  })

  it('should account padding', () => {
    assertStr(overlay(`a\naa`, `b`, 1, 1), `ab\naa`)
  })

  it('should account more padding', () => {
    assertStr(overlay(`aa\naa`, `b`, 2, 2), `  b\naa \naa `)
  })

  it('should account negative padding', () => {
    assertStr(overlay(`aa\naa`, `b`, -1, -1), ` aa\n aa\nb  `)
  })

  it('should account negative padding when b is larger', () => {
    assertStr(overlay(`a`, ` b\n b`, 0, -1), `ab\n b`)
  })

  it('should overlay axes', () => {
    assertStr(overlay(

      '   |\n' +
      ' 0 |',

      '`----\n' +
      '0', 3, -1),

      '   |    \n' +
      ' 0 `----\n' +
      '   0    ')
  })

})
