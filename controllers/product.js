const data = require('../assets/data');

function getProducts(query) {
  let arreglo = JSON.stringify(data)

  //Object.values(arreglo).filter(obj => obj.Object.includes(query) )
  return arreglo;
}

module.exports = { getProducts };
