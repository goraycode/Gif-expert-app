import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import DeleteAllGifs from "./components/DeleteAllGifs";

const GifExpertApp = () => {
  let [categories, setCategories] = useState([""]);
  const [amount, setAmount] = useState(0);

  const onAddCategory = (newCategory) => {
    //para que no se repitan los valores insertados
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    //console.log(newCategory);
  };

  const changeAmount = (amount) => {
    setAmount(amount);
  };

  const deleteGif = (keyword) => {
    const newCategories = categories.filter((category) => category !== keyword);
    setCategories(newCategories);
  };

  const onDeleteAllGifs = (arr) => {
    arr = [];
    setCategories(arr);
  };

  return (
    <>
      <header className="container">
        <div className="header">
          <h1 className="text-white">GifExpertApp</h1>
          <DeleteAllGifs
            onDeleteAllGifs={(value) => onDeleteAllGifs(value)}
            categories={categories}
          />
        </div>

        <AddCategory
          //setCategories={setCategories}
          onNewCategory={(value) => onAddCategory(value)}
          onChangeAmount={(value) => changeAmount(value)}
        />

        {categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
            amount={amount}
            onDeleteGifs={(value) => deleteGif(value)}
          />
        ))}
      </header>
    </>
  );
};

export default GifExpertApp;
