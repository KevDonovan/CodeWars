function expandedForm(num) {
    let numArr = ('' + num).split('');
    let result = []
    
    numArr.forEach((e,i) => {
      let digit = e * Math.pow(10,numArr.length - (i + 1));
      if(digit != 0) result.push(digit);
    });
    
    return result.join(' + ');
}