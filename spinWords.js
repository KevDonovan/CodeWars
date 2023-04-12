function spinWords(string){
    let jumbled = string.split(' ');
    
    jumbled = jumbled.map(e => {
      return e.length > 4 ? e.split('').reverse().join('') : e;
    })
    
    return jumbled.join(' ');
}