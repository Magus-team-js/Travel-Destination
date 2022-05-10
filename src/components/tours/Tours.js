import React from 'react';

const Tours = (params) => {
  return (
    <div>
      <img src={params.image} alt={params.name} />
      <h3>{params.name}</h3>
    </div>
  );
}

export default Tours;
