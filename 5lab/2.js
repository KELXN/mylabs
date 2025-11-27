</-- функціональний об'єкт array() із замиканням -->

function array() {
  const data = [];

  function arr(i) {
    return data[i];
  }

  arr.push = function (value) {
    data.push(value);
  };

  arr.pop = function () {
    return data.pop();
  };

  return arr;
}
