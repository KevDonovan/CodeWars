function SeriesSum(n)
{
  let sum = 0;
  
  for(i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}