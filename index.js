import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
let x = fifaData.filter(data => data.Year === 2014 && data.Stage === "Final");
x = x[0];

console.log(x["Home Team Name"]);
console.log(x["Home Team Goals"]);
console.log(x["Away Team Name"]);
console.log(x["Away Team Goals"]);

if (x["Home Team Goals"] > x["Away Team Goals"]) {
    console.log("The winner is " + x["Home Team Name"]);

} else if (x["Home Team Goals"] < x["Away Team Goals"]){
    console.log("The winner is " + x["Away Team Name"]);

} else {
    console.log("It was a tie");
}



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let finals = data.filter(item => item.Stage === "Final");
    return finals;
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
    let list = cb(fifaData);
    let years = list.map(items => items.Year); 
    return years;
};

getYears(getFinals);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
    let list = cb(fifaData);
    let winners = [];
    list.forEach(element => {
        if (element["Home Team Goals"] > element["Away Team Goals"]) {
            winners.push(element["Home Team Name"]);
        
        } else if (element["Home Team Goals"] < element["Away Team Goals"]){
            winners.push(element["Away Team Name"]);
        
        } else {
            winners.push(element["Win conditions"].split(" ")[0]);
        } 
    });
    return winners;
};

getWinners(getFinals);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(win, year) {
    let winners = win(getFinals);
    let years = year(getFinals);
    let strings = [];
    for (let i = 0; i < years.length; i++) {
        strings.push(`In ${years[i]}, ${winners[i]} won the world cup!`);
    }
    return strings;
};

getWinnersByYear(getWinners, getYears);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeAvg = data.reduce((num, array) => {num = num + array["Home Team Goals"]; return num }, 0);
    homeAvg = homeAvg / data.length;
    let awayAvg = data.reduce((num, array) => {num = num + array["Away Team Goals"]; return num }, 0);
    awayAvg = awayAvg / data.length;
    console.log(homeAvg);
    console.log(awayAvg);
    
};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
