module.exports = function toReadable(number) {
  const units = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number === 0) return 'zero';

  if (number < 10) return units[number - 1];

  if (number < 20) return teens[number - 10];
  if (number < 100) {
    const ten = Math.floor(number / 10) - 2;
    const unit = number % 10;
    return tens[ten] + (unit !== 0 ? ` ${units[unit - 1]}` : '');
  }
  if (number < 1000) {
    const hundred = Math.floor(number / 100);
    const remainder = number % 100;
    let result = `${units[hundred - 1]} hundred`;
    if (remainder !== 0) {
      if (remainder < 10) {
        result += ` ${units[remainder - 1]}`;
      } else if (remainder < 20) {
        result += ` ${teens[remainder - 10]}`;
      } else {
        const ten = Math.floor(remainder / 10) - 2;
        const unit = remainder % 10;
        result += ` ${tens[ten]}`;
        if (unit !== 0) {
          result += ` ${units[unit - 1]}`;
        }
      }
    }
    return result;
  }
  return '';

  // if (length === 1) {
  //   return oneNumber[number - 1];
  // } else if (length === 2) {
  //   let num1 = number % 10;
  //   let num2 = Math.floor(number / 10);
  //   return twoNumbers[num2 - 1] + ' ' + oneNumber[num1 - 1];
  // } else if (length === 3) {
  //   let num1 = number % 10;
  //   let num2 = Math.floor((number % 100) / 10);
  //   let num3 = Math.floor(number / 100);
  //   return oneNumber[num3 - 1] + ' hundred ' + twoNumbers[num2 - 1] + ' ' + oneNumber[num1 - 1];
  // }
};
