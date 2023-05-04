function findMissingLetter(array)
{
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  alphabet += alphabet.toUpperCase();
  let subStr = alphabet.slice(
    alphabet.indexOf(array[0]), 
    alphabet.indexOf(array[array.length - 1]));
  return subStr.split('').filter(e => !array.includes(e))[0];
}