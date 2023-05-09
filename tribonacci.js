function tribonacci(signature,n){
    let sequence = [];
    let i = 0;
    
    for(let i = 0; i < n && i < signature.length; i++){
      sequence.push(signature[i]);
    }
    
    for(let i = sequence.length; i < n; i++){
      sequence.push(sequence.slice(i-3, i).reduce((sum, e) => sum + e, 0));
    }
    
    return sequence;
}