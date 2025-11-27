//підрахунок елементів різних тіпов в масиві
</-- базовий варіант -->
const data = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, { a: 1 }, [1,2], 3n];

const types = { number: 0, string: 0, boolean: 0, object: 0, undefined: 0, bigint: 0 };

for (const item of data) {
  const type = typeof item;
  if (types.hasOwnProperty(type)) {
    types[type]++;
  }
}

console.log(types);

</-- создавання ключів динамічно -->
const data = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, { a: 1 }, [1, 2], 3n];

const types = {}; // пустая коллекция

for (const item of data) {
  const type = typeof item;

  if (!types[type]) {
    types[type] = 0;
  }

  types[type]++;
}

console.log(types);
