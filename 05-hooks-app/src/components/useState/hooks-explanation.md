### USO DEL USESTATE

- Cuando se utiliza el useState(), normalmente únicamente contemplamos dentro de los valores
  de creación de un estado, un elemento y una función con específicos valores de un tipo de variable común. En el ejemplo presentado en el archivo **CounterApp.js** pudimos ver como se definían los valores de un objecto, desestructurándolo dentro de los valores de creación del Hook useState.

- Es válido, colocar los elementos que queremos integrar a nuestro estado, dentro la función del valor inicial que se encuentra en la sintaxis del **useState()**. Por ejemplo:

```js
const [{ counter01, counter02, counter03, counter04 }, setCounter] = useState({
  counter01: 10,
  counter02: 20,
  counter03: 30,
  counter04: 40,
});

// ó bien usar

const [counter, setCounter] = useState({
  counter01: 10,
  counter02: 20,
  counter03: 30,
  counter04: 40,
});
```

- Debemos de recordar que **cuando el valor del estado es cambiado, este mismo le cae encima al anterior**. Por ello, es necesario recordar que a la hora de necesitar cambiar un **estado** de tipo objeto, necesitamos llamar al **estado actual** y luego cambiar el valor del uno de sus elementos, si no se hará el cambio en todos los valores.

```js
import React, { useState } from "react";

export default function CounterApp() {
  const [counter, setCounter] = useState({
    counter01: 10,
    counter02: 20,
    counter03: 30,
    counter04: 40,
  });

  // const { counter01:c1 } = counter;
  return (
    <>
      <div className="content">
        <div className="content-counter__values">
          <h1> Counter 01 {counter.counter01} </h1>
          <h1> Counter 02 {counter.counter02} </h1>
          <button
            className="btn btn-primary"
            onClick={() =>
              setCounter({
                ...counter,
                counter01: counter.counter01 + 1,
                // counter01: c1 + 1,
              })
            }
          >
            Sumar
          </button>
        </div>
      </div>
    </>
  );
}
```
