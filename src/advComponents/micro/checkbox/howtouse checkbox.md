// how to use Checkbox


import React from 'react';
import Checkbox from './Checkbox';

const MyForm = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <form>
      <Checkbox
        label="I agree to the terms and conditions"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <button type="submit" disabled={!isChecked}>Submit</button>
    </form>
  );
};

export default MyForm;
