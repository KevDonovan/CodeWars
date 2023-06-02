function inArray(array1,array2){
    let string2 = array2.join(' ');
    let result = [];
    array1.forEach(e => {
      if(string2.includes(e)) result.push(e);
    })
    return result.sort();
}