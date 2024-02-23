const factorialOfNumber = require('../factorial/index.js')
const ratioOfTwoNumbers = require('../ratio/index.js')

const ratioAndFactorial = (rationum1, rationum2, factNum) => {
  return {
    ratio: ratioOfTwoNumbers(rationum1, rationum2),
    factorial: factorialOfNumber(factNum),
  }
}

module.exports = ratioAndFactorial;
