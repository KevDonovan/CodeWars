function count(string) {
    const charCount = {};
    for(let i = 0; i < string.length; i++) {
      if(charCount[string[i]]) charCount[string[i]]++;
      else charCount[string[i]] = 1;
    }
    return charCount;
}