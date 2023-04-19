function findEvenIndex(arr)
{
  let result = -1;
  let leftSum = 0;
  let rightSum = 0;
  
  for(let i = 0; i < arr.length; i++) {
    leftSum = arr.slice(0, i).reduce((sum, e) => sum += e, 0);
    rightSum = arr.slice(i + 1, arr.length).reduce((sum, e) => sum += e, 0);
    if(leftSum === rightSum) return i;
  }
  return -1;
}