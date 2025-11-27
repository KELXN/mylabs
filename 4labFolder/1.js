<!-- цикл for -->

function sumFor(...args) {
  let s = 0;
  for (let i = 0; i < args.length; i++) {
    s += args[i];
  }
  return s;
}

<!-- цикл for...of -->

function sumForOf(...args) {
  let s = 0;
  for (const x of args) {
    s += x;
  }
  return s;
}

<!-- цикл while -->

function sumWhile(...args) {
  let s = 0;
  let i = 0;
  while (i < args.length) {
    s += args[i];
    i++;
  }
  return s;
}


<!-- цикл do...while -->
function sumDoWhile(...args) {
  if (args.length === 0) return 0;

  let s = 0;
  let i = 0;
  do {
    s += args[i];
    i++;
  } while (i < args.length);

  return s;
}

<!-- метод reduce -->

function sumReduce(...args) {
  return args.reduce((acc, x) => acc + x, 0);
}
