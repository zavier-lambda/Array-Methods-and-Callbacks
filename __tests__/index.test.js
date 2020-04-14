// DO NOT CHANGE THIS FILE //
// DO NOT CHANGE THIS FILE //
// DO NOT CHANGE THIS FILE //
// DO NOT CHANGE THIS FILE //
// DO NOT CHANGE THIS FILE //

const data = require('../data.js')
const funcs = require('../index.js')

const {
  getFinals,
  getFinalsYears,
  getFinalsWinners,
  getFinalsWinnersByYear,
  getCountryWins,
  // getGoals,
  // badDefense,
  // getAverageGoals,
} = funcs

describe('Task 1: getFinals', () => {
  const result = getFinals()

  it('returns the right number of games', () => {
    expect(result).toHaveLength(20)
  })
  it('games returned are finals', () => {
    result.forEach(match => {
      expect(match).toMatchObject({
        Stage: 'Final'
      })
    })
  })
})

describe('Task 2: getFinalsYears', () => {
  const result = getFinalsYears()

  it('returns the right number of years', () => {
    expect(result).toHaveLength(20)
  })
  it('returns the right years', () => {
    expect(result).toEqual(expect.arrayContaining([
      1930, 1934, 1938, 1954,
      1958, 1962, 1966, 1970,
      1974, 1978, 1982, 1986,
      1990, 1994, 1998, 2002,
      2006, 2010, 2014, 2014,
    ]))
  })
})

describe('Task 3: getFinalsWinners', () => {
  const result = getFinalsWinners()

  it('returns the right number of countries', () => {
    expect(result).toHaveLength(20)
  })
  it('returns the right countries', () => {
    expect(result).toEqual(expect.arrayContaining([
      'Uruguay', 'Italy',
      'Italy', 'Germany FR',
      'Brazil', 'Brazil',
      'England', 'Brazil',
      'Germany FR', 'Argentina',
      'Italy', 'Argentina',
      'Germany FR', 'Brazil',
      'France', 'Brazil',
      'Italy', 'Spain',
      'Germany', 'Germany'
    ]))
  })
})

describe('Task 4: getWinnersByYear', () => {
  const result = getFinalsWinnersByYear()
  it('returns the right number of strings', () => {
    expect(result).toHaveLength(20)
  })
})

describe('Task 5: getCountryWins', () => {
  it('returns 5 wins for Brazil', () => {
    const result = getCountryWins('Brazil')
    expect(result).toBe(5)
  })
  it('returns 1 win for Spain', () => {
    const result = getCountryWins('Spain')
    expect(result).toBe(1)
  })
  it('returns 1 win for England', () => {
    const result = getCountryWins('England')
    expect(result).toBe(1)
  })
  it('returns 3 wins for Germany FR', () => {
    const result = getCountryWins('Germany FR')
    expect(result).toBe(3)
  })
  it('returns 2 wins for Germany', () => {
    const result = getCountryWins('Germany')
    expect(result).toBe(2)
  })
  it('returns 4 wins for Italy', () => {
    const result = getCountryWins('Italy')
    expect(result).toBe(4)
  })
  it('returns 2 wins for Argentina', () => {
    const result = getCountryWins('Argentina')
    expect(result).toBe(2)
  })
})
