
module.exports = function toReadable (number) {
  const numbers = ["zero","one","two","three","four","five","six","seven","eight","nine","ten",
                     "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety","hundred"];
    let output = "";
    if (number < 0 || number > 1000) {
        return 'out of bound';
    } else {
        if (number >= 100) {
            output += numbers[Math.floor(number/100)] + " hundred ";
            number %= 100;
        }
        if (number >= 20) {
            output += numbers[Math.floor(number/10)+18] + " ";
            number %= 10;
        }
        if (number > 0 && number < 20) {
            output += numbers[number] + " ";
        }
        return output;
      }
}
