const initialState = [{
  id: 1,
  todo: 'Comprar pan',
  done: false,
}]

const todoReducer = ( state = initialState, action ) => {
  if (action?.type === 'AGREGAR') {
    return [ ...state, action?.payload ];
  }
}

let todos = todoReducer(); // Inicialización

const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false
}

const agregarTodoAction = {
  type: 'AGREGAR',
  payload: newTodo
}

todos = todoReducer( todos, agregarTodoAction )

console.log(todos);
