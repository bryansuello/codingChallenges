// Think of a way to store the languages as a database (eg an object). The languages
// are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and
// returns a greeting - if you have it in your database. It should default to English
// if the language is not in the database, or in the event of an invalid input.
// The Database
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'
// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied

let language = 'tagalog';
console.log(typeof language);

function greet(language) {
  let langList = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
  };
  if (language in langList) {
    return langList[language];
  } else {
    return langList.english;
  }
}

console.log(greet(language));

// function greet(lang) {
//   return langs[lang]||langs['english'];
// }

// var langs = {
// 'english': 'Welcome',
// 'czech': 'Vitejte',
// 'danish': 'Velkomst',
// 'dutch': 'Welkom',
// 'estonian': 'Tere tulemast',
// 'finnish': 'Tervetuloa',
// 'flemish': 'Welgekomen',
// 'french': 'Bienvenue',
// 'german': 'Willkommen',
// 'irish': 'Failte',
// 'italian': 'Benvenuto',
// 'latvian': 'Gaidits',
// 'lithuanian': 'Laukiamas',
// 'polish': 'Witamy',
// 'spanish': 'Bienvenido',
// 'swedish': 'Valkommen',
// 'welsh': 'Croeso'
// };

// ___
// function greet(language) {
//   var GreetingsDB = {
//     english: 'Welcome',
//     czech: 'Vitejte',
//     danish: 'Velkomst',
//     dutch: 'Welkom',
//     estonian: 'Tere tulemast',
//     finnish: 'Tervetuloa',
//     flemish: 'Welgekomen',
//     french: 'Bienvenue',
//     german: 'Willkommen',
//     irish: 'Failte',
//     italian: 'Benvenuto',
//     latvian: 'Gaidits',
//     lithuanian: 'Laukiamas',
//     polish: 'Witamy',
//     spanish: 'Bienvenido',
//     swedish: 'Valkommen',
//     welsh: 'Croeso'
//   },
//   defaultLanguage = 'english';
//   return GreetingsDB[language] || GreetingsDB[defaultLanguage];
// }

// ___
// function greet(language) {
// return database[language] || "Welcome";
// }

// return language in welcomes ? welcomes[language] : welcomes.english;
