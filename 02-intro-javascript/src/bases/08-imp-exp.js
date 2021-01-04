import heroes, { sayHiHeroe, owners } from '../data/heroes';
// SI TENEMOS UNA IMPORTAR POR DEFECTO, DEBE IR SIN PARÉNTESIS
// SI NECESITAMOS IMPORTAR OTROS ELEMENTOS, DEBEMOS ENCERRARLOS
// ENTRE CORCHETES, YA QUE ESTAMOS DESESTRUCTURANDO LA INFORMACIÓN
// QUE PROVIENE DEL OTRO ARCHIVO.


// IMPRIMIMOS EL ARRAY QUE VIENNE DEL ARCHIVO
console.log( heroes );

// SI USAMOS FIND, OBTENEMOS UNO DE LOS ELEMENTOS QUE COINCIDEN CON EL PARÁMETRO
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
// console.log( getHeroeById(2) );

// SI USAMOS FILTER, OBTENEMOS TODOS LOS QUE COINCIDEN CON EL PARÁMETRO ENVIADO
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );
// console.log( getHeroesByOwner('DC') );

// console.log(sayHiHeroe(getHeroeById(5)?.name));

