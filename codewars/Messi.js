// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17
let lal = 5;
let copa = 10;
let cl = 2;

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

console.log(goals(lal, copa, cl));

// const goals = (...a) => a.reduce((s, v) => s + v, 0);

// const goals = (a,b,c) => a + b + c;
