const numberOfCupsOfCoffee = 3
const fullName = 'Brad Rowley'
let message = `Hi my name is ${fullName} and I drink ${numberOfCupsOfCoffee} cups of coffee a day`
console.log(message)

const userName = window.prompt(`What is your name?`)
const message2 = `Hello ${userName}`
console.log(message2)

// const int1 = window.prompt(` `)
// parseFloat({
//   int1: function () {
//     return '5'
//   },
// })
// const int2 = window.prompt(` `)

// const user = [5, 2]
// const firstOperand = parseInt(user`[2]`)
// const secondOperand = parseInt([3])
// console.log(`The answer is ${firstNumberToAdd + secondNumberToAdd}`)
let firstOperand = 5
let secondOperand = 2
let summ = firstOperand + secondOperand
let difference = secondOperand - firstOperand
let product = secondOperand * firstOperand
let quotient = firstOperand / secondOperand
let remainder = firstOperand % secondOperand
console.log(`if you add 5 and 2 you get ${summ}`)
console.log(`if you minus 5 and 2 you get ${difference}`)
console.log(`if you times 5 and 2 you get ${product}`)
console.log(`if you divide 5 and 2 you get ${quotient}`)
console.log(`if you remainder 5 and 2 you get ${remainder}`)

const numbers = new Array(
  36,
  82,
  99,
  46,
  39,
  93,
  61,
  22,
  85,
  16,
  6,
  17,
  38,
  84,
  80,
  16,
  22,
  38,
  17,
  31,
  87,
  87,
  30,
  42,
  17,
  40,
  92,
  64,
  32,
  79,
  53,
  95,
  39,
  1,
  13,
  19,
  17,
  37,
  53,
  6,
  44,
  75,
  81,
  87,
  24,
  71,
  88,
  73,
  80,
  33,
  66,
  29,
  24,
  30,
  1,
  81,
  11,
  11,
  67,
  33,
  77,
  51,
  90,
  60,
  5,
  6,
  57,
  15,
  52,
  13,
  3,
  100,
  66,
  47,
  4,
  7,
  63,
  26,
  62,
  86,
  50,
  71,
  85,
  1,
  2,
  37,
  74,
  92,
  32,
  48,
  10,
  50,
  50,
  8,
  23,
  8,
  7,
  82,
  29,
  90,
  26,
  34,
  57,
  76
)
let minimum = numbers[0]
for (let i = 1; i < numbers.length; i++) {
  let value = numbers[i]
  minimum = value < minimum ? value : minimum
}
console.log(minimum)

let max = numbers[0]
for (let i = 1; i < numbers.length; i++) {
  let value = numbers[i]
  max = value > max ? value : max
}
console.log(max)

let sum = numbers[0]
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
console.log(sum)

let average = sum / numbers.length
console.log(average)
