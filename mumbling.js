function accum(s) {
    let arr = s.toUpperCase().split('');
  
    return arr.map((e, i) => e + e.toLowerCase().repeat(i)).join('-');
  }