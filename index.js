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
  const result = data.filter(game => game.Stage === 'Final')
  return result
}

/* Task 2: Implement a function called `getFinalsYears` that returns an array containing all of the years of finals in the dataset */

function getFinalsYears() {
  /* code here */
  const result = getFinals().map(match => match.Year)
  return result
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
  const winners = getFinalsWinners()
  const years = getFinalsYears()

  return winners.map((country, idx) => {
    return `In ${years[idx]}, ${country} won the world cup!`
  })
}


/* Task 5: Create a function called `getCountryWins` that takes the parameters `data` and `country code` and returns the number of world cup wins that country has had. 

Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */

}


/* Task 6: Write a function called getGoals() that accepts a parameter `data` and calculates the team with the most goals score per appearance (avergae goals for) in the World Cup finals */

function getGoals(/* code here */) {

  /* code here */

}


/* Task 7: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (avergae goals against) in the World Cup finals */

function badDefense(/* code here */) {

  /* code here */

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
  getGoals,
  badDefense,
  getAverageGoals,
}
