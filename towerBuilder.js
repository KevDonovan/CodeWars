function towerBuilder(nFloors) {
    let pyramid = [];

    let numStars = 0;
    let numSpaces = 0
    const numBottom = nFloors*2 - 1;
    
    for(let i = 1; i <= nFloors; i++){
      numStars = (i*2) - 1;
      numSpaces = (numBottom - numStars)/2;
      pyramid.push(' '.repeat(numSpaces) + '*'.repeat(numStars) + ' '.repeat(numSpaces));
    }
    
    return pyramid;
}