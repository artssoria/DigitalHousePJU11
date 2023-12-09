
const importar = require('./collectibles');

let hotToys = importar('Hot Toys');
let bandai = importar('Bandai');
let starWars = importar('Star Wars');


let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];


let collectibles = {
  figuras: unifiedCollectibles,

 
  listFigures: function() {
    this.figuras.forEach(figura => {
      console.log(`Marca: ${figura.marca}, Nombre: ${figura.nombre}, Precio: ${figura.precio}, Stock: ${figura.stock}`);
    });
  },

 
  figuresByBrand: function(marca) {
    return this.figuras.filter(figura => figura.marca === marca);
  }
};


console.log("Listado de figuras:");
collectibles.listFigures();

console.log("Figuras de la marca 'Hot Toys':");
console.log(collectibles.figuresByBrand('Hot Toys'));
console.log("Figuras de la marca 'Bandai':");
console.log(collectibles.figuresByBrand('Bandai'));
console.log("Figuras de la marca 'Star Wars':");
console.log(collectibles.figuresByBrand('Star Wars'));
