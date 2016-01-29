var Stats = {};

  Stats.median = function(array) {
    var sarray = array.sort(function(a, b){return a-b});
    var med;
    if (array.length % 2 !== 0) {
      med = sarray[Math.floor(sarray.length / 2)];
    } else {
      med = ((sarray[(sarray.length/2) - 1] + sarray[(sarray.length / 2)]) / 2);
    }
    return Math.round(med * 100) / 100;
      
  }

  Stats.lowerQuartile = function(array) {
    var sarray = array.sort(function(a, b){return a-b});
    var low;
    if (array.length % 2 !== 0) {
      low = sarray.slice(0, Math.floor(sarray.length / 2));
    } else {
      low = sarray.slice(0, (sarray.length / 2));
    }
    return this.median(low);
  }

  Stats.upperQuartile = function(array) {
    var sarray = array.sort(function(a, b){return a-b});
    var up;
    if (array.length % 2 !== 0) {
      up = sarray.slice(Math.ceil(sarray.length / 2));
    } else {
      up = sarray.slice((sarray.length / 2), sarray.length);
    }
    return this.median(up);
  }
