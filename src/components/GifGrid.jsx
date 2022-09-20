import useFetchGifs from "../hooks/useFetchGifs";
import GifCard from "./GifCard";
import Loading from "./Loading";

const GifGrid = ({ category, amount, onDeleteGifs }) => {
  const { images, isLoading } = useFetchGifs(category, amount);

  const handleDelete = () => {
    onDeleteGifs(category);
  };

  return (
    <>
      {category && (
        <div className="titular mt-5">
          <h2>{category}</h2>
          <button className="btnDelete" onClick={handleDelete}>
            X
          </button>
        </div>
      )}

      {isLoading && <Loading />}

      <div className="card-grid mt-2">
        {images.map((img) => (
          <GifCard key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
