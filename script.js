// //Functions
// //33

// function numbers(x, y) {
//   return x + y;
// }
// console.log(numbers(7, 9));

// //34

// const difference = () => {
//   return "Den mest uppenbara skillnaden är att en namnad function har ett namn och en anonym har inte ett namn";
// };

// console.log(difference());

// //35

// function subStr(string) {
//   return string.substring(0, 4);
// }
// console.log(subStr("1987-07-14"));

// //36

// function calcThis(num1, num2, artim) {
//   switch (artim) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     default:
//       return 'Ogiltig operator'
//   }

// }
// console.log(calcThis(3,123,'*'));

//Conditional

// //37
// function compareNum(num1, num2){
//     return num1 === num2;
// }

// console.log(compareNum(3, 3));

// //38
// function betweenNum(num){
//     if (num > 20 && num < 40){
//         return true;
//     } else {
//         return false;
//     }

// }

// console.log(betweenNum(30));

// //39

// function arrLength(arr1, arr2){
//     if (arr1 > arr2){
//         return arr1;
//     } else {
//         return arr2;
//     }
// }

// console.log(arrLength([1,2,3,4], [5,6,7,8,9]));

// //Program flow

// //47
// HelloAgainAgain();

// function hello(){
//     console.log('Hello!')
// };

// function helloAgain(){
//     console.log('Hello Again!')
//     hello();
// };

// function HelloAgainAgain(){
//     console.log('Hello Again Again!')
//     helloAgain();
// }

// //48
// function printPokemons() {
//     let pokemons = ['Pikachu', "Charmander", "Bulbasaur", "Squirtle"];

//     for(let i=0;i<=pokemons.length;i++) {
//         console.log("One awesome pokemon is " + pokemons[i]);
//     }
// }

// console.log(printPokemons());

// //49
// function reverseString(str) {
//     let newString = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }

//     return newString;
// }

// console.log(reverseString('hello'));


//Async/promises
//51

function fetchData() {
  new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("Data hämtad");
    } else {
      reject("Fel vid hämtning av data");
    }
  });

  fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error)
  })
}
