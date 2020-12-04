function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
// getUserData({firstName: "Melissa"}) // ?
// getUserData({}) // ?


// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // ?
// console.log(second); // ?
// console.log(third); // ?


let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // ?
  console.log(whiskers); // ?
  console.log(aFewOfMyFavoriteThings); // ?

  let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers)


// ES5 Assigning Variables to Object Properties
// var obj = {
//   numbers: {
//     a: 1,
//     b: 2
//   }
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;


//ES2015 Verision of Assigning Variables to Object Propoerties

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };

  const {a,b} = obj.numbers;


// ES5 Array Swap
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;


//ES2015 Array Swap
var arr = [1, 2];
[arr[0],arr[1]] = [arr[1],arr[0]];


//raceResults
//   raceResults(raceArr)

const raceArr = ['chris', 'tom', 'alex','marvin', 'alice'];

// function raceResults([first,second,third,...rest]){
    
//     return {first, second, third, rest};
//     }


//One line version

const raceResults = ([first,second,third,...rest]) => ({first, second, third, rest});

