import React from 'react';

export const Component = ({ ninjas }) => {
  return ninjas.map(({ id, name, age, belt }) => (
    <div key={id}>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Belt: {belt}</div>
    </div>
  ));
};

export default Component;
