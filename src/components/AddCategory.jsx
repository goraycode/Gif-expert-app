import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ onNewCategory, onChangeAmount }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputRange, setInputRange] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim().length) return;

    onNewCategory(inputValue);

    onChangeAmount(inputRange);

    //clean input
    setInputValue("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="form"
        className="mt-2 flex-column"
        aria-label="formulario"
      >
        <input
          className="boxSearch"
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          aria-label="inputSearch"
        />
        <div className="range mt-2">
          <label htmlFor="range text-white">{inputRange} gifs</label>
          <input
            type="range"
            name="range"
            id="range"
            min={5}
            max={100}
            step={5}
            value={Number(inputRange)}
            aria-label="range"
            onChange={(e) => setInputRange(Number(e.target.value))}
          />
        </div>
      </form>
    </>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
  onChangeAmount: PropTypes.func.isRequired,
};

export default AddCategory;
