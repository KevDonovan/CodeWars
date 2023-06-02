function twoSum(numbers, target) {
  for(let i = 0; i < numbers.length; i++){
    if (numbers.slice(i+1).includes(target - numbers[i])) {
      return [i, numbers.lastIndexOf(target - numbers[i])];
    }
  }
}