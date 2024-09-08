import "./Bottle.css";

const Bottle = ({ bottle, handleToCart }) => {
  const { img, name, price, quantity, ratings, stock } = bottle;
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="Product Image" />
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <h3>Price: {price}</h3>
        <button onClick={() => handleToCart(bottle)} className="purches">
          Purches
        </button>
      </div>
    </div>
  );
};

export default Bottle;
