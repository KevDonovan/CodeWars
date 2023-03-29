function rowSumOddNumbers(n) {
    let sum = 0;
    let rowStart = 1;
    //test
    for(let i = 0; i < n; i++) {
      rowStart += i*2;
    }
    for( let i = 0; i < n; i++){
      sum += rowStart + i*2;
    } 
    return sum;
  }
