function dirReduc(arr){
    let opposites = ['NORTHSOUTH', 'SOUTHNORTH', 'EASTWEST', 'WESTEAST'];
    let result = [];   
    
    for(let i = 0; i < arr.length; i++) {
      if (!opposites.includes(arr[i] + arr[i + 1])) result.push(arr[i]);
      else i++;
    }
  
    if(arr.length != result.length) result = dirReduc(result);
    return result;
  }