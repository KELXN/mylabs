// скалярні і посилальні типи даних - дві реалізації
</-- скалярна версія -->
function inc(n) {
  return n + 1;
}

const a = 5;
const b = inc(a);

console.log({ a, b }); 

</-- посилальна версія -->
function incObj(obj) {
  obj.n++;
}

const obj = { n: 5 };
incObj(obj);

console.log(obj);

