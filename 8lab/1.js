</-- функція вищого порядку -->
function iterate(object, callback) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      callback(key, object[key], object);
    }
  }
}

</-- функція замикання - store(value)-->
function store(value) {
  return function () {
    return value;
  };
}

</-- функція contract(fn, ...types) -->
function contract(fn, ...types) {
  return function (...args) {
    if (args.length !== types.length - 1) {
      throw new TypeError("Invalid number of arguments");
    }

    for (let i = 0; i < args.length; i++) {
      if (!(args[i] instanceof types[i]) && typeof args[i] !== types[i].name.toLowerCase()) {
        throw new TypeError(`Argument ${i} has wrong type`);
      }
    }

    const result = fn(...args);

    const returnType = types[types.length - 1];

    if (!(result instanceof returnType) && typeof result !== returnType.name.toLowerCase()) {
      throw new TypeError("Return type mismatch");
    }

    return result;
  };
}
