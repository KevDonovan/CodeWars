function humanReadable (seconds) {
    let hours = pad(Math.floor(seconds / 3600));
    seconds = seconds % 3600;
    let minutes =  pad(Math.floor(seconds / 60));
    seconds = pad(seconds % 60);
    return `${hours}:${minutes}:${seconds}`;
}
  
  function pad(time) {
    return time < 10 ? '0' + time : '' + time;
}