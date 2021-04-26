## QUÉ ES UN REDUCER

1. Es una función común y corriente
2. Debe ser una función pura
3. Debe retornar un nuevo estado
4. Usualmente solo recibe dos argumentos

   4.1 El valor Inicial (initialState) y la acción a ejecutar.

```js
const todoReducer = () => {
  // ...
};
```

1. Los reducer no deben de tener efectos secundarios
2. No debe de realizar tareas asíncronas.
3. Debe de retornar siempre un estado nuevo sin mutarlo.
4. No debe de llamar localStorage o sessionStorage dentro del reducer
   para evitar cualquier error.

```js
const initialTodos = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

const todoReducer = (state = initialTodos, action) => {
  console.log(`ACTION: ${action}`);
  return state;
};
```

```js
let todos = todoReducer();
console.log(todos);
// [{...}]
// 0: { id: 1, todo: "Comprar pan", done: false }
```

Al iniciar la aplicación, tendremos un estado inicial. El **state** va a pasar a la página o vista la información.
Luego, si queremos agregar un elemento del TODO, llamamos al **action**, que correrá alguna petición y luego, esta irá
al reducer para ser adherida al estado y el mismo, cambiará para el usuario.

```js
const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "AGREGAR") {
    return [...state, action?.payload];
  }
};

let todos = todoReducer(); // Inicialización

const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};

const agregarTodoAction = {
  type: "AGREGAR",
  payload: newTodo,
};

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);
```

Como podemos ver en el ejemplo, todo **reducer** contiene una acción, que será la encargada de llevar los datos
nuevos al mismo para que el **state** modifique su valor. **El state** por su parte, siempre tendrá un valor inicial, al que se deberá de llamar para agregarle los valores.

El **useReducer** es un símul del **useState** pero para manejar estados más complejos con muchas más acciones.
