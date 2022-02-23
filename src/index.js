module.exports = function toReadable(number) {
   const firstTwenty = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
   }

   const decades = {
      10: 'ten',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
   }

   const decade = number % 10;
   const hundred = number % 100;

   if (number < 20) {
      return firstTwenty[number];
   } else if (number < 100) {
      return decade === 0 ? decades[number] : `${decades[number - decade]} ${firstTwenty[decade]}`;
   } else {
      if (hundred === 0) {
         return `${firstTwenty[Math.trunc(number / 100)]} hundred`;
      } else {
         return `${firstTwenty[Math.trunc(number / 100)]} hundred ${decade === 0 ? decades[hundred] : `${firstTwenty[hundred] || (decades[hundred - decade] + ' ' + firstTwenty[decade])}`}`;
      }
   }
}
