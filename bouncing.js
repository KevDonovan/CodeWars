function bouncingBall(h,  bounce,  window) {
    if(bounce >= 1 || bounce < 0 || h < 0 || window >= h) return -1;
    let count = 0;
    while (h > window) {
      count++;
      h *= bounce;
      if(h > window) count++;
    }
    
    return count;
}