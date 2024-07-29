//33

function numbers(x, y) {
  return x + y;
}
console.log(numbers(7, 9));

//34

const difference = () => {
  return "Den mest uppenbara skillnaden är att en namnad function har ett namn och en anonym har inte ett namn";
};

console.log(difference());

//35

function subStr(string) {
  return string.substring(0, 4);
}
console.log(subStr("1987-07-14"));

//36

function calcThis(num1, num2, artim) {
  switch (artim) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return 'Ogiltig operator'
  }

}
console.log(calcThis(3,123,'*'));

//37


