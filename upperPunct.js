String.prototype.upperPunct = function () {
    return this.split(' ').map(e => e.replace(e[0], e[0].toUpperCase())).join(' ');
  };