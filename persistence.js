function persistence(num) {
    let numString = '' + num;
    let count = 0;
  
    while(numString.length > 1) {
      num = numString.split('').reduce((prod, e) => {
        return prod * Number(e);
      });
      numString = '' + num;
      count++;
    } 
    return count;
  }