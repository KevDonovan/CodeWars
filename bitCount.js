var countBits = function(n) {
    let bits = 0;
    while(n > 0) {
      if(n % 2 === 1) bits++;
      n = Math.floor(n/2);
    }
    return bits;
  };