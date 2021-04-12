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

### USO DEL USEEFFECT

Es un hook que nos permitirá ejecutar un efecto secundario cuando algo suceda en nuestros componentes.
Si no se le agrega la inyección de dependencias, el hook reacciona al "no importa que cambie, tu te tienes que volver a ejecutar". Para saber cuando un objeto se carga por primera vez, podemos emplear **[]**.
Si necesitamos saber cuando específicamente está cambiando el estado de un elemento en la página, podemos colocarlo como por ejemplo **[ email ]**.

```js
import React, { useState, useEffect } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({ name: "", email: "" });
  const { name, email } = formState;

  useEffect(() => {
    console.log("Hey, inició!");
  }, []);
  useEffect(() => {
    console.log("formState cambió!");
  }, [formState]);
  useEffect(() => {
    console.log("email cambió!");
  }, [email]);

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu correo"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "123" && <Message />}
    </>
  );
};

export default SimpleForm;
```
