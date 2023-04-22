function narcissistic(value) {
    const valString = '' + value;
    let valArr = valString.split('');
    const power = valArr.length;
    return (value == valArr.reduce((acc, e) => acc + Math.pow(Number(e), power), 0));
  }