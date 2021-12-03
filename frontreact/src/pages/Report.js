import React, { useState, useEffect } from 'react';
import {Chart} from '../components/Chart';


export const Report = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/products")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setProducts(data))
  },[]) 
  return (
    <section id='report'>
      <div className='report-container'>
        <h1>Unidades en inventario</h1>
        <Chart
          width = {600} 
          height = {600}
          data = {products}
        />
      </div>
    </section>
  );
};
