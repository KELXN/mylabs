</-- видалення одного елемента -->
function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

</-- видалення декількох елементів removeElements(array, ...items) -->

function removeElements(array, ...items) {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}

</-- унікальний масив - unique(Array) -->
//1 варіант
function unique(array) {
  return [...new Set(array)];
}

// 2 впаріант
function unique(array) {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}
