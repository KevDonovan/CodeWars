function wave(str){
    let strArr = str.split('');
    let waveStr = [];
    
    for(let i = 0; i < strArr.length; i++) {
      if(str[i] !== ' ') {
        strArr[i] = strArr[i].toUpperCase();
        waveStr.push(strArr.join(''));
        strArr[i] = strArr[i].toLowerCase();
      }
    }
    return waveStr;
}