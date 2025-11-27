</-- різниця масивів -->
function difference(array1, array2) {
  const set2 = new Set(array2);
  return array1.filter(item => !set2.has(item));
}
