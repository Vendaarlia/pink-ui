// how to use input

import React from 'react';
import Input from './Input';

const MyForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Name" placeholder="Enter your name" required />
      <Input label="Email" type="email" placeholder="Enter your email" errorMessage="This field is required" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
