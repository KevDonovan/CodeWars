function comp(array1, array2){
    if(array1 === null || array2 === null) return false;
    let squares = array1.map(i => i * i);
    let same = (array1.length === array2.length);
    array2.forEach(e => {
      if(!squares.includes(e)) same = false;
      else squares[squares.indexOf(e)] = -1;
    })
    return same;
  }