import React, { useState } from "react";

type Props = {};

//  this component is controlled but isn't controlled by it's parent component.
// the input's value will now be known to the parent in real time.
const UncontrolledInput = (props: Props) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <input value={value} onChange={handleChange} />;
};

export default UncontrolledInput;
