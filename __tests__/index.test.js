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
  getAverageFinalsGoals,
  // badDefense,
  // getAverageGoals,
} = funcs

describe('Task 1: getFinals', () => {
  const result = getFinals()

  it('returns the right number of games', () => {
    expect(result).toHaveLength(19)
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
    expect(result).toHaveLength(19)
  })
  it('returns the right years', () => {
    expect(result).toEqual(expect.arrayContaining([
      1930, 1934, 1938, 1954,
      1958, 1962, 1966, 1970,
      1974, 1978, 1982, 1986,
      1990, 1994, 1998, 2002,
      2006, 2010, 2014,
    ]))
  })
})

describe('Task 3: getFinalsWinners', () => {
  const result = getFinalsWinners()

  it('returns the right number of countries', () => {
    expect(result).toHaveLength(19)
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
      'Germany',
    ]))
  })
})

describe('Task 4: getWinnersByYear', () => {
  const result = getFinalsWinnersByYear()
  it('returns the right number of strings', () => {
    expect(result).toHaveLength(19)
  })
  it('returns the right strings', () => {
    expect(result).toEqual(expect.arrayContaining([
      'In 1930, Uruguay won the world cup!',
      'In 1934, Italy won the world cup!',
      'In 1938, Italy won the world cup!',
      'In 1954, Germany FR won the world cup!',
      'In 1958, Brazil won the world cup!',
      'In 1962, Brazil won the world cup!',
      'In 1966, England won the world cup!',
      'In 1970, Brazil won the world cup!',
      'In 1974, Germany FR won the world cup!',
      'In 1978, Argentina won the world cup!',
      'In 1982, Italy won the world cup!',
      'In 1986, Argentina won the world cup!',
      'In 1990, Germany FR won the world cup!',
      'In 1994, Brazil won the world cup!',
      'In 1998, France won the world cup!',
      'In 2002, Brazil won the world cup!',
      'In 2006, Italy won the world cup!',
      'In 2010, Spain won the world cup!',
      'In 2014, Germany won the world cup!',
    ]))
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
  it('returns 1 win for France', () => {
    const result = getCountryWins('France')
    expect(result).toBe(1)
  })
  it('returns 1 win for England', () => {
    const result = getCountryWins('England')
    expect(result).toBe(1)
  })
  it('returns 1 win for Uruguay', () => {
    const result = getCountryWins('Uruguay')
    expect(result).toBe(1)
  })
  it('returns 3 wins for Germany FR', () => {
    const result = getCountryWins('Germany FR')
    expect(result).toBe(3)
  })
  it('returns 1 win for Germany', () => {
    const result = getCountryWins('Germany')
    expect(result).toBe(1)
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

describe('Task 6: getAverageFinalsGoals', () => {
  const result = getAverageFinalsGoals()

  it('returns an object with the correct number of teams', () => {
    expect(Object.keys(result)).toHaveLength(13)
  })
  it('returns the the right avg goals scored per final appearance per team', () => {
    expect(result).toMatchObject({
      Uruguay: 4,
      Argentina: 1.6,
      Italy: 1.8333333333333333,
      Czechoslovakia: 1,
      Hungary: 2,
      'Germany FR': 1.8333333333333333,
      Brazil: 2.3333333333333335,
      Sweden: 2,
      England: 4,
      Netherlands: 0.6666666666666666,
      France: 2,
      Germany: 0.5,
      Spain: 1,
    })
  })
})
