
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let [num1, , num2, , num3, ...resto] = numeros;



let mascota = {
  nombre: 'Pancho',
  tipo: 'Perro',
  color: 'Dorado',
  raza: 'Beagle'
};


let {nombre, tipo, color, raza} = mascota;

console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}.`);
