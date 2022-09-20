import PropTypes from "prop-types";
import urlPropType from "url-prop-type"; //para validar si es un URL válida

const GifCard = ({ img, title }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: urlPropType.isRequired,
};

export default GifCard;
