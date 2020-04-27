/// ⚽️ M V P ⚽️ ///
/// ⚽️ M V P ⚽️ ///
/// ⚽️ M V P ⚽️ ///
const data = require("./data.js");

/* Task 0: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup
(b) Away Team name for 2014 world cup
(c) Home Team goals for 2014 world cup
(d) Away Team goals for 2014 world cup
(e) Winner of 2014 world cup  */


/* Task 1: Create a function called getFinals that returns an array of objects with only finals data */

function getFinals() {
  /* code here */
  return data.filter(game => game.Stage === 'Final')
}


/* Task 2: Implement a function called `getFinalsYears` that returns an array containing all of the years of finals in the dataset */

function getFinalsYears() {
  /* code here */
  return getFinals().map(match => match.Year)
}


/* Task 3: Implement a function called `getFinalsWinners` that returns an array of strings which are the names of the country that won each final */

function getFinalsWinners() {
  /* code here */
  const finals = getFinals()
  const winnerCountries = finals.map(match => {
    if (match['Win conditions']) {
      return match['Win conditions'].split(' ')[0]
    }
    return match['Home Team Goals'] > match['Away Team Goals']
      ? match['Home Team Name']
      : match['Away Team Name']
  })
  return winnerCountries
}


/* Task 4: Implement a function called `getFinalsWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!"
 */

function getFinalsWinnersByYear() {
  /* code here */
  const winners = getFinalsWinners()
  const years = getFinalsYears()

  return winners.map((country, idx) => {
    return `In ${years[idx]}, ${country} won the world cup!`
  })
}


/* Task 5: Create a function called `getCountryWins` that takes a country name as its argument, and returns the number of world cup wins that country has had. 

Hint: use `.reduce` */

function getCountryWins(country/* code here */) {
  /* code here */
  return getFinalsWinners().reduce((acc, winner) => {
    if (winner === country) {
      return acc + 1
    }
    return acc
  }, 0)
}


/* Task 6: Write a function called getAverageFinalsGoals() that returns an object containing as properties the names of all teams with appearances in a final, and as values the average number of goals scored per appearance (in a final) */

function getAverageFinalsGoals() {
  /* code here */
  const finals = getFinals()

  const goalsByTeam = {}
  const avgGoals = {}

  // aggregating team appearances and goals
  finals.forEach(final => {
    const homeTeam = final['Home Team Name']
    const homeGoals = final['Home Team Goals']
    const awayTeam = final['Away Team Name']
    const awayGoals = final['Away Team Goals']

    if (!goalsByTeam[homeTeam]) {
      goalsByTeam[homeTeam] = { goalsScored: homeGoals, appearances: 1 }
    } else {
      goalsByTeam[homeTeam].goalsScored += homeGoals
      goalsByTeam[homeTeam].appearances++
    }

    if (!goalsByTeam[awayTeam]) {
      goalsByTeam[awayTeam] = { goalsScored: awayGoals, appearances: 1 }
    } else {
      goalsByTeam[awayTeam].goalsScored += awayGoals
      goalsByTeam[awayTeam].appearances++
    }
  })

  // calculating avg number of goals per appearance
  Object.keys(goalsByTeam).forEach(team => {
    avgGoals[team] = goalsByTeam[team].goalsScored / goalsByTeam[team].appearances
  })

  return avgGoals
}


/* Task 7: Write a function called badDefense() that returns an object containig the name of the team with the most goals scored against in a single finals game paired with the number of goals scored against in that game, i.e.: { Germany: 7 }. If there are several teams with the same number of goals include them all in the result, i.e.: { Germany: 7, Spain: 7 } */

function badDefense(/* code here */) {

  /* code here */
  const finals = getFinals()

  const result = []

  const goalsAgainst = finals.reduce((acc, final) => {
    const homeTeam = final['Home Team Name']
    const homeGoals = final['Home Team Goals']
    const awayTeam = final['Away Team Name']
    const awayGoals = final['Away Team Goals']

    return acc.concat({ [homeTeam]: awayGoals }, { [awayTeam]: homeGoals})
  }, result)

  goalsAgainst.sort((a, b) => {
    return Object.values(b)[0] - Object.values(a)[0]
  })

  return goalsAgainst
}


/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

  /* code here */

}


/// STRETCH 🥅 //
/// STRETCH 🥅 //
/// STRETCH 🥅 //


/* Use this space to work on any stretch goals of your chosing as listed in the README file. */


/// END OF CHALLENGE ///
/// END OF CHALLENGE ///
/// END OF CHALLENGE ///
module.exports = {
  getFinals,
  getFinalsYears,
  getFinalsWinners,
  getFinalsWinnersByYear,
  getCountryWins,
  getAverageFinalsGoals,
  badDefense,
  getAverageGoals,
}
