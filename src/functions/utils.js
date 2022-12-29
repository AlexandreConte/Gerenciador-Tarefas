export function getLastId(todos) {
  let id = 1
  if (!todos) {
    return id
  }
  for (const todo of todos) {
    if (todo.id >= id) {
      id = todo.id + 1
    }
  }
  return id
}

export function removeTodo(todos, todo) {
  return todos.filter((t) => t.id !== todo.id)
}
