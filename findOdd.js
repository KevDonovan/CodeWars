function findOdd(A) {
    A = A.sort();
    let n = 0
    let i = 0;
    while(i < A.length) {
      n = A.lastIndexOf(A[i]) - i + 1;
      if(n % 2 != 0) return A[i];
      i += n;
    }
    return 0;
  }