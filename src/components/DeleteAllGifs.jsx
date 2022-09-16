const DeleteAllGifs = ({ onDeleteAllGifs, categories }) => {
  const handleClick = () => {
    onDeleteAllGifs(categories);
  };

  return (
    <>
      <button className="btnDeleteAll" onClick={handleClick}>
        Delete all
      </button>
    </>
  );
};

export default DeleteAllGifs;
