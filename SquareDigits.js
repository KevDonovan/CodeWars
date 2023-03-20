function squareDigits(num){
    let numStr = '' + num;
    let result = '';
    for(let i = 0; i < numStr.length; i++) {
      result += Math.pow(Number(numStr[i]), 2);
    }
    return Number(result);
  }