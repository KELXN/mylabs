</-- приклад функції із підняттям змінної (hoisting) -->
function hoistingExample() {
  var x;           // объявление поднято вручную
  console.log(x);  // undefined
  x = 10;
  return x;
}
