import React from 'react';

const Contact = props => {
  console.log(props);
  setTimeout(() => {
    props.history.push('/about');
  }, 2000);
  return (
    <div className="container">
      <h4 className="center">Contact page</h4>
    </div>
  );
};

export default Contact;
