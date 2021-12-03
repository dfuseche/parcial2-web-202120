import React, { useEffect, useState } from 'react';
import {Card} from '../components/Card'
export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);
  
  let link; 
  
  if(searchKey!= null)
  {
     link= `http://localhost:3001/api/products?q=${searchKey}`
  
  }
  else{
    link = "http://localhost:3001/api/products"
  }
    useEffect(() => {
      fetch(link)
      .then(response => response.json())
          // 4. Setting *dogImage* to the image url that we received from the response above
      .then(data => setProducts(data))
    },[searchKey]) 
  
    console.log(link)
  return (
    <section id='home'>
      <div className='home-container'>
        <h1>Gallery</h1>
        <div className='home-card'>
          {products.map((element) => ( 
            <Card
            name={element.name}
            picture={element.picture}
            price={element.price}
            isActive={element.isActive}
            />
         
        ))}
        </div>
      </div>
    </section>
  );
};
