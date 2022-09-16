const GifCard = ({ data }) => {
  const { title, img } = data;
  return (
    <div className="card">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifCard;
