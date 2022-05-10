// Saludo

// Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada".

// const nombre = prompt("Ingrese su nombre");
// const apellido = prompt("Ingrese su apellido");
// alert(`Hola ${nombre} ${apellido}, bienvenida a Ada`);

// las `` se hacen con "alt" + "}"


// ----------------------------------------------------------------

// Heladería

// Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".

// const sabor1 = prompt("Ingrese el primer sabor");
// const sabor2 = prompt("Ingrese el segundo sabor");
// const sabor3 = prompt("Ingrese el tercer sabor");

// console.log(`Aquí tiene su helado de ${sabor1}, ${sabor2} y ${sabor3}`);

// ----------------------------------------------------------------

// Datos personales

// Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.

// const nombre = prompt("Ingrese su nombre");
// const apellido = prompt("Ingrese su apellido");
// const edad = prompt("Ingrese su edad");
// const nacionalidad = prompt("Ingrese su nacionalidad");
// const dni = prompt("Ingrese su dni");

// console.log(`Nuevo usuario agregado al sistema: Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}, Nacionalidad: ${nacionalidad}, Dni: ${dni}.`);


// ----------------------------------------------------------------

// Lista de reproducción

// Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".

// const playlist = prompt("Ingrese el nombre de la playlist");
// const cancion1 = prompt("Ingrese la primer canción");
// const cancion2 = prompt("Ingrese la segunda canción");
// const cancion3 = prompt("Ingrese la tercer canción");
// console.log(`Se ha creado la playlist "${playlist}" con las canciones "${cancion1}", "${cancion2}" y "${cancion3}".`);


// ----------------------------------------------------------------

// Dirección completa

// Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".

// const calle = prompt("Ingrese el nombre de la calle");
// const numero = prompt("Ingrese el número");
// const departamento = prompt("Ingrese el departamento");
// const cp = prompt("Ingrese el código postal");
// const ciudad = prompt("Ingrese la ciudad");
// const pais = prompt("Ingrese el país");
// console.log(`La dirección que ha ingresado es: ${calle} ${numero} ${departamento}, CP. ${cp}, ${ciudad}, ${pais}.`);

// ----------------------------------------------------------------

// Años perro

// Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro.

// const edad = prompt("Ingrese la edad del perro");
// console.log(`Su perro tiene ${edad*7}`);

// ----------------------------------------------------------------

// Minutos a segundos

// Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión en segundos.

// const minutos = prompt("Ingrese cantidad de minutos");
// console.log(`${minutos} minutos son el equivalente a ${minutos*60} segundos`);

// ----------------------------------------------------------------

// Días a segundos

// Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos.

// const dias = prompt("Ingrese cantidad de días");
// const horas = dias*24;
// const minutos = horas*60;
// console.log(`${dias} días equivalen a ${minutos*60} segundos`);

// ----------------------------------------------------------------

// Kilómetros a millas

// Crear un programa que pida ingresar una cantidad de kilómetros y muestre un mensaje con el resultado de la conversión en millas.

const km = prompt("Ingrese cantidad de km");
console.log(`${km} km equivalen a ${km / 1.609344} millas`);