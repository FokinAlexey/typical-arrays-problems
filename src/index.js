
exports.min = function min (array) {
  let array = [];
  if array.length === 0 {
      return 0;
  } else if {
      for (i = 0, i < array.length, i++) {
          typeof array[i] !== 'number';
          return 0;
      };
    };
    return Math.min.apply(null, array);
}

exports.max = function max (array) {
    let array = [];
    if array.length === 0 {
        return 0;
    } else if {
        for (i = 0, i < array.length, i++) {
            typeof array[i] !== 'number';
            return 0;
        };
      };
      return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    let array = [];
    if array.length === 0 {
        return 0;
    } else if {
        for (i = 0, i < array.length, i++) {
            typeof array[i] !== 'number';
            return 0;
        };
      };
    let result = 0;  
    for (i = 0, i < array.length, i++) {
        result += array[i];
    };
      return (result / array.length);
}
