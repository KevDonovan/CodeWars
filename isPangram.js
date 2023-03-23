function isPangram(string){
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    string = string.replace(/\W/g, "");
    
    for (let i = 0; i < abc.length; i++) {
      if (!string.toLowerCase().includes(abc[i])) return false;
    }
    return true;
  }