import { useState } from "react";
import Form from "react-bootstrap/Form";

const AddGifs = ({ amountGifs }) => {
  const [inputRange, setInputRange] = useState(10);

  amountGifs(inputRange);

  return (
    <>
      <Form.Label>{inputRange}</Form.Label>
      <Form.Range
        max={100}
        min={10}
        step={5}
        value={inputRange}
        onChange={(e) => setInputRange(Number(e.target.value))}
      />
    </>
  );
};

export default AddGifs;
