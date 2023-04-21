function dirReduc(arr){
    let directions = ['NORTHSOUTH', 'SOUTHNORTH', 'EASTWEST', 'WESTEAST'];
    let result = [];
    
    
    for(let i = 0; i < arr.length; i++) {
      if (!directions.includes(arr[i] + arr[i + 1])) result.push(arr[i]);
      else i++;
    }
  
    if(arr.length != result.length) result = dirReduc(result);
    return result;
  }