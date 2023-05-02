const binaryArrayToNumber = arr => {
    return arr.reduce((result, e, i) => {
      return result + e * Math.pow(2, arr.length - (i + 1))
    }, 0);
  };