function countSmileys(arr) {
    if (arr.length === 0) return 0;
    let count = 0;
    for(face of arr) {
      if (isSmiley(face)) count++;
    }
    return count;
}
  
  function isSmiley(face) {
    if(face.length > 3) return false;
    
    let eyesArr = [':', ';'];
    let mouthsArr = [')', 'D'];
    
    if(face.length === 3 && face[1] != '-' && face[1] != '~') return false;
    return (eyesArr.includes(face[0]) && mouthsArr.includes(face[face.length - 1]));
}