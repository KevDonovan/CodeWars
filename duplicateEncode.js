function duplicateEncode(word){
    let encoded = new String('');
    
    word = word.toLowerCase();
    
    for (let i = 0; i<word.length; i++) {
      if (word.indexOf(word[i]) == word.lastIndexOf(word[i])) encoded += '(';
      else encoded += ')';
    }
    
    return encoded;
  }