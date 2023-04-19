function high(x){
    let words = x.split(' ');
    let maxVal = 0;
    let maxIndex = 0;
    for(let i = 0; i < words.length; i++) {
      if (maxVal < sumLetters(words[i])) {
        maxIndex = i;
        maxVal = sumLetters(words[i]);
      }
    }
    return words[maxIndex];
  }
  
  function sumLetters(word) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let sum = 0;
    for(let i = 0; i < word.length; i++) {
      sum += alpha.indexOf(word[i]) + 1;
    }
    return sum;
  }