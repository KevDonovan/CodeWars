function deleteNth(arr,n){
    let result = [];
    
    for(let e of arr) {
      if(result.filter(x => x === e).length < n) result.push(e);
    }
    return result;
  }