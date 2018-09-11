import React from 'react';

const NinjaList = ({ ninjas, deleteNinja }) => {
  return ninjas.map(
    ({ id, name, age, belt }) =>
      age > 20 ? (
        <div key={id}>
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>Belt: {belt}</div>
          <button onClick={() => deleteNinja(id)} />
        </div>
      ) : null
  );
};

export default NinjaList;
