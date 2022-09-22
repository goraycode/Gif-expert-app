import useFetchGifs from "../hooks/useFetchGifs";
import GifCard from "./GifCard";
import Loading from "./Loading";
import PropTypes from "prop-types";

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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default GifGrid;
