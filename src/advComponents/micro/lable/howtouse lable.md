// how to use lable

import React from 'react';
import Label from './Label';

const MyForm = () => {
  return (
    <form>
      <Label text="Name" htmlFor="nameInput" />
      <input id="nameInput" type="text" />
      <Label text="Email" htmlFor="emailInput" />
      <input id="emailInput" type="email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
