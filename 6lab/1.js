</-- композиція зліва направо - pipe... -->
const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== "function") {
      throw new Error("pipe: all arguments must be functions");
    }
  }

  return x => {
    let result = x;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
};


</-- композиція зправа наліво -->
function composeRightSafe(...fns) {

  // Проверяем входные аргументы
  for (const fn of fns) {
    if (typeof fn !== "function") {
      throw new Error("composeRightSafe: all arguments must be functions");
    }
  }

  let errorHandler = null;

  function composed(initial) {
    let result = initial;

    for (let i = fns.length - 1; i >= 0; i--) {
      try {
        result = fns[i](result);
      } catch (e) {
        if (errorHandler) {
          errorHandler(e);
        }
        return undefined; // подавление ошибки
      }
    }

    return result;
  }

  composed.on = function (event, handler) {
    if (event === "error" && typeof handler === "function") {
      errorHandler = handler;
    }
  };

  return composed;
}
