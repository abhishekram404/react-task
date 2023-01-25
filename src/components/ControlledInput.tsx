import React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// this component is controlled by it's parent component.
// it's parent component will know the value of the input field in realtime
const Input = ({ value, onChange }: Props) => {
  return <input value={value} onChange={onChange} />;
};

export default Input;
