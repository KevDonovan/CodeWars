var number = function(busStops){
    let riders = 0;
    
    for(let i = 0; i < busStops.length; i++) {
      riders += (busStops[i][0] - busStops[i][1]);
    }
    return riders;
}