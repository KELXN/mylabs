</-- ітерування об'єкта справочника -->
function ages(persons) {
  const result = {};
  for (const name in persons) {
    const p = persons[name];
    result[name] = p.died - p.born;
  }
  return result;
}
