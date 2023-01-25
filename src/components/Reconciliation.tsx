import React, { useEffect, useState } from "react";
import Input from "./ControlledInput";
import UncontrolledInput from "./UncontrolledInput";

type Props = {};

const Reconciliation = (props: Props) => {
  const [isSpan, setSpan] = useState(false);

  const toggleState = () => setSpan((prevState) => !prevState);

  useEffect(() => {
    let interval = setInterval(toggleState, 500);

    return () => {
      clearTimeout(interval);
    };
  }, []);

  // across renders, the parent element changes from div to span and vice versa
  // so react tears down the whole parent component and re-renders the whole parent component and it's children
  // which is not very good for performance
  // this issue is fixed in another component
  return isSpan ? (
    <span>
      <UncontrolledInput />
    </span>
  ) : (
    <div>
      <Input value="" onChange={(e) => {}} />
    </div>
  );
};

export default Reconciliation;
