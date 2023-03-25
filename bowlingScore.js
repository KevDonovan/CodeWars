function bowlingScore(frames) {
  const frameArr = frames.split(' ');
  let score = 0;
  let currentFrame = 0;
  
  for(let i = frameArr.length - 1; i >= 0; i--) {
    if(frameArr[i].length === 3) {
      score += extraRoll(frameArr[i])
    } else if (frameArr[i].includes('/')) {
      score += spare(frameArr[i+1]);
    } else if (frameArr[i].length === 1) {
      score += strike(frameArr.slice(i + 1, i + 3));
    } else {
      score += Number(frameArr[i][0]) + Number(frameArr[i][1])
    }
  }
  return score;
}

function extraRoll(rolls) {
  rolls = rolls.split('');
  rolls = rolls.map(e => {return e === 'X' ? 10 : e});
  if (rolls.includes('/')) return 10 + Number(rolls[2]);
  return Number(rolls[0]) + Number(rolls[1]) + Number(rolls[2]);
}

function spare(nextFrame){
  if(nextFrame[0] === 'X') return 20;
  return 10 + Number(nextFrame[0]);
}

function strike(rolls) {
  rolls = rolls.join('');
  let roll1 = rolls[0];
  roll1 = roll1.replace('X', 10);
  let roll2 = rolls[1];
  roll2 = roll2.replace('X', 10);
  if(roll2 === '/') return 20;
  return 10 + Number(roll1) + Number(roll2);
}
