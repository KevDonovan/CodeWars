function DNAStrand(dna){
    let comp = '';
    for(e of dna) {
      switch (e) {
          case 'A':
            comp +='T';
            break;
          case 'T':
            comp +='A';
            break;
          case 'C':
            comp +='G';
            break;
          case 'G':
            comp +='C';
            break;
          default: break;
      }
    }
    
    return comp;
  }