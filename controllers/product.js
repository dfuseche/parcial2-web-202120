const data = require('../assets/data');

function getProducts(query) {
  if(!query)
  {
    return data;
  }
  else{
    return data.filter((product) => product.name.toLowerCase().includes(query));
  }
}

module.exports = { getProducts };
