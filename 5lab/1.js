</-- замикання і чейнінг -->

function seq(fn) {
  const fns = [fn];

  function chain(next) {
    if (typeof next === "number") {
      return fns.reduce((acc, f) => f(acc), next);
    }
    fns.push(next);
    return chain;
  }

  return chain;
}

