// DO NOT CHANGE THIS FILE //
// DO NOT CHANGE THIS FILE //
// DO NOT CHANGE THIS FILE //
// DO NOT CHANGE THIS FILE //
// DO NOT CHANGE THIS FILE //

const data = require('../data.js')
const funcs = require('../index.js')

describe('getFinals', () => {
  const result = funcs.getFinals(data)
  it('returns the right number of matches', () => {
    expect(result).toHaveLength(20)
  })
  it('matches returned are finals', () => {
    result.forEach(match => {
      expect(match).toMatchObject({
        Stage: 'Final'
      })
    })
  })
})

describe('getYears', () => {
  
})
