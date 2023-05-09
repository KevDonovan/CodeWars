function validBraces(braces){
    const openRef = '({[';
    const pairs = ['()', '{}', '[]'];
    let openArr = [];
    
    for(let i = 0; i<braces.length; i++) {
      if(openRef.includes(braces[i])) openArr.push(braces[i])
      else if(!pairs.includes(openArr.pop() + braces[i])) return false;
    }
    return openArr.length === 0;
}