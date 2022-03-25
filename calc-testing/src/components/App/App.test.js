function toLocaleString(num) {
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
}
console.log(toLocaleString("22..2"));

test("check if number is converted to a string and all space/extra characters are removed", () => {
  //arrange

  const actual = "22";
  //act

  const expected = toLocaleString(22);
  //assert
  expect(expected).toBe(actual);
});

// function removeSpaces(num) {
//   num.toString().replace(/\s/g, "");
//   console.log(155);
// }
// test("check if white spaces are being removed from the string", () => {
//   //arrange
//   const actual = "134";
//   //act

//   const expected = removeSpaces(134);
//   //assert
//   expect(expected).toBe(actual);
// });

// const equalsClickHandler = () => {
//   if (calc.sign && calc.num) {
//     const math = (a, b, sign) =>
//       sign === "+"
//         ? a + b
//         : sign === "-"
//         ? a - b
//         : sign === "X"
//         ? a * b
//         : a / b;
//   }

//   const percentClickHandler = () => {
//     let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
//     let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;
//     setCalc({
//       ...calc,
//       num: (num /= Math.pow(100, 1)),
//       res: (res /= Math.pow(100, 1)),
//       sign: "",
//     });
//   };

//   const resetClickHandler = () => {
//     setCalc({
//       ...calc,
//       sign: "",
//       num: 0,
//       res: 0,
//     });
//   };
// };
