## REACTJS COURSE (FERNANDO HERRERA)

### ¿QUÉ ES REACT?

Es una librería que nos permite hacer aplicaciones web.
Está hecho para trabajar con aplicaciones de toda magnitud.
Es declarativa y eficiente. Unicamente hace el cambio en el elemento que ha
modificado su valor.
Trabaja con componentes (pequeñas piezas encapsuladas) sencillas y fáciles de mantener.

**JSX = JS + XML**

```JSX
  <div id="root">

  </div>

  <script type="text/babel">
    const divRoot = document.querySelector("#root");
    const nombre = "Goku";
    const h1Tag = <h1>Hola, soy { nombre }</h1>;
    ReactDOM.render(h1Tag, divRoot);
  </script>
```

El Objeto **ReactDOM.render()** permite renderizar el objeto JSX dentro de una etiqueta seleccionada.

### BABEL

Es un transpilador de Javascript moderno. Esta herramienta transforma el código hacia una versión
compatible para todos los exploradores.

**Nueva Sintaxis:**

```js
const restApi = {
  personajes: ["Goku", "Vegeta"],
};
console.log(restApi.personajes?.length);
```

**Sintaxis Compatible:**

```js
var _restApi$personajes;

const restApi = {
  personajes: ["Goku", "Vegeta"],
};
console.log(
  (_restApi$personajes = restApi.personajes) === null ||
    _restApi$personajes === void 0
    ? void 0
    : _restApi$personajes.length
);
```

### JAVASCRIPT MODERNO

#### Objetos:

Son elementos de memoria que pueden tener diferentes datos.
Es necesario saber que inicialmente debe de crearse la estructura:

```js
const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 55321321,
    lat: 14.3232,
    lng: 34.9233321,
  },
};
```

Si queremos crear otro objeto, con la referencia de memoria que ya poseemos, necesitamos saber que no podemos
asignarlo directamente a otra variable, ya que estariamos cambiando la referencia inicial de nuestro objeto padre.

```js
const persona2 = persona;
// FORMA INCORRECTA SI SE IMPRIME AQUÍ, VEREMOS UN FALSO POSITIVO
// SI LO IMPRIMIMOS ABAJO, VEREMOS QUE EL OBJETO PERSONA CAMBIÓ EL NOMBRE DEBIDO A QUE SE LA ASIGNACIÓN
// NO COPIA EL OBJETO SINO LO MODIFICA
const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);
```

#### Arreglos:

Para adherir un nuevo elemento a un array, es recomendable hacerlo de la siguiente manera
y no usando el método **PUSH** ya que el mismo, modifica el array y no siempre queremos eso.

```js
const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5];
const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});
```

#### Funciones:

Es recomendable usar la sintaxis con **CONST** para evitar que cambien los valores si se hace un cambio de valores por error:

```js
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar2("Vegeta"));
console.log(saludar3("Goku"));
console.log(saludar4());
// Hola, Vegeta
// Hola, Goku
// Hola Mundo
```

Para imprimir un elemento más complejo en un **RETURN** como un objeto en una **Función de Flecha**, es necesario agregar paréntesis y corchetes para hacerle entender a JS que estamos regresando un objeto.

Si declaramos una función así con un **return** implícito, tendremos un **error** ya que el JS no entenderá que lo que se está regresando es un objeto.

```js
const getUsuarioActivo = (nombre) => {
  uid: "ABC567",
  username: nombre,
};
```

Para retornar un objeto de con un **return implícito**, se deberá de hacer de la siguiente manera:

```js
const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
```

#### Desestructuración de Objetos:

Uso común para desestructurar un **const objeto:**

```js
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};
const { edad, clave, nombre: nombreCompleto } = persona;
console.log(nombreCompleto);
console.log(edad);
console.log(clave);
// Tony
// 45
// Ironman
```

Uso para una función:

```js
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const retornaPersona = (usuario) => {
  const { edad, clave, nombre } = usuario;
  console.log(edad, clave, nombre);
};

// Ó TAMBIÉN PODRÍA DESESTRUCTURARSE EL PARÁMENTRO EN LA DECLARACIÓN DE LA FUNCIÓN
const retornaPersona = ({ clave, edad, nombre }) => {
  console.log(edad, clave, nombre);
};

retornaPersona(persona);
```

También se puede establecer valores por defecto, en caso el mismo no se encuentre
entre los parámetros de la función:

```js
const persona = { nombre: "Tony", edad: 45, clave: "Ironman", rango: "Cadete" };
const retornaPersona = ({ clave, edad, nombre, rango = "Capitan" }) => {
  console.log(edad, clave, rango);
};
retornaPersona(persona);
// 9 45 "Ironman" "Tony" "Cadete"

const persona = { nombre: "Tony", edad: 45, clave: "Ironman" };
const retornaPersona = ({ clave, edad, nombre, rango = "Capitan" }) => {
  console.log(edad, clave, rango);
};
retornaPersona(persona);
// 9 45 "Ironman" "Tony" "Capitan"
```

Para desestructurar un objecto que proviene del return de una función, podríamos emplear el siguiente código:

```js
const persona = { nombre: "Tony", edad: 45, clave: "Ironman" };
const useContext = ({ clave, nombre, edad, rango = "Capitán" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);

// Ironman 45
// 14.1232 -12.3232
```

#### Desestructuración de Arreglos:

Para seleccionar un solo elemento y si sabemos su posición, podemos usar el siguiente código:

```js
const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes;
console.log(p3);
// Trunks
```

Para desestructurar elementos de una función que retorna un ARRAY, podemos emplear la mecánica de la desestructuración,
tomando los valores que se despliegan en las posiciones y determinandoles un variable:

```js
const retornaArreglo = () => {
  return ["ABC", 123];
};
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);
```

Y por último, si tenemos como respuesta una **función** dentro de los valores de un **return** podemos emplear la misma desestructuración, pero luego al llamar a la función, podemos recogerla con paréntesis como lo correriamos en cualquier función:

```js
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};
const [nombre, setNombre] = useState("Goku");
console.log(nombre);
setNombre();
// Goku
// Hola Mundo
```

#### Import & Exports

Para extraer o importar elementos, funciones o variables de otros archivos, nos es necesario tener dos (o los que hagan falta) archivos. Estos, serán requeridos mediante la sintaxis de JS más actualizada, pero para ello debemos saber como requerirlos y emplearlos en nuestros archivos que harán uso de los objetos encontrados en el que vamos a importar.
Por ejemplo, en el siguiente archivo, tenemos un dos array y una función.

**heroes.js**

```js
const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];

export const owners = ["DC", "Marvel"];

export const sayHiHeroe = (value) => `Say hi to ${value}`;

export default heroes;
// export {
//     heroes as default,
//     owners
// }
```

Para permitirnos traer los objetos, funciones y demás, tenemos que colocarles de forma anterior, la palabra **export**. Esta nos brinda la capacidad de hacer que los objetos que vamos a emplear en el otro archivo estén disponibles si se atraen con la palabra **import**. En el ejemplo del archivo **heroes.js** podemos visualizarlo.
También podemos definir que un elemento de todos, sea el que se exportará por defecto.

En el siguiente archivo, veremos la forma en que se importa un archivo y sus objetos, empleando la palabra **import**:

**index.js**

```js
import heroes, { sayHiHeroe, owners } from "./data/heroes";
// SI TENEMOS UNA IMPORTAR POR DEFECTO, DEBE IR SIN PARÉNTESIS
// SI NECESITAMOS IMPORTAR OTROS ELEMENTOS, DEBEMOS ENCERRARLOS
// ENTRE CORCHETES, YA QUE ESTAMOS DESESTRUCTURANDO LA INFORMACIÓN
// QUE PROVIENE DEL OTRO ARCHIVO.

// IMPRIMIMOS EL ARRAY QUE VIENNE DEL ARCHIVO
console.log(heroes);

// SI USAMOS FIND, OBTENEMOS UNO DE LOS ELEMENTOS QUE COINCIDEN CON EL PARÁMETRO
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroeById(2));

// SI USAMOS FILTER, OBTENEMOS TODOS LOS QUE COINCIDEN CON EL PARÁMETRO ENVIADO
export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);
console.log(getHeroesByOwner("DC"));

console.log(sayHiHeroe(getHeroeById(15)?.name));
```

Si queremos importar todos los elementos dentro de los corchetes, podemos emplear en el archivo **heroes.js** la siguiente sintaxis:

```js
const owners = ["DC", "Marvel"];
const sayHiHeroe = (value) => `Say hi to ${value}`;

// export default heroes;
export { heroes, owners, sayHiHeroe };
```

Así, entonces en el archivo **index.js** podremos llamarlo de la siguiente manera:

```js
import { heroes, sayHiHeroe, owners } from "./data/heroes";
```

#### Promises:

Para responder una promesa, es necesario emplear los métodos parámetro **resolve()** y **reject()**. Estos nos permitirán hacer uso de los métodos **then** y **catch** de una promesa.

```js
import { getHeroeById } from "./bases/08-imp-exp";
const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      // importen el
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(5).then(console.log).catch(console.warn);
```

#### Fetch API:

```js
const apiKey = "###########";
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
```

### Async / Await

La finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas y realizar algún comportamiento específico en un grupo de Promises. Del mismo modo que las Promises son semejantes a las devoluciones de llamadas estructuradas, async/await se asemejan a una combinación de generadores y promesas.
[Referencia: Mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona)

```js
import apiKey from "./data/giphy";
const getImagen = async () => {
  try {
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImagen();
```

### Operador Condicional Ternario

```js
const activo = true;
// let mensaje = '';

// if ( activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
// const mensaje = ( activo ) ? 'Activo' : null;
const mensaje = activo && "Activo";
// true
const mensaje = !activo && "Activo";
// false

console.log(mensaje);
```
