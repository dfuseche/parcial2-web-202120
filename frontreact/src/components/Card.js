import React from 'react';

/**
 * Using react component based on function
 * @param {*} props
 * @returns
 */
export const Card = (props) => {
  const { name, picture, price, isActive } = props;


  return (
    <div>
      <div className={isActive=="true" ? "card": "card inactive" }>
        <p className='card-title'>{name}</p>
        <span className='material-icons card-favorite'>favorite_border</span>
      </div>
      <img className='card-img' src={picture} alt={name} />
      <div className='card-bottom'>
        <p className='price'>$ {price}</p>
      </div>
    </div>
  );
};
