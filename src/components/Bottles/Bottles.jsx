import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleToCart = (bottle) => {
    // console.log("Hi", bottle);
    const updateCart = [...cart, bottle];
    setCart(updateCart);
  };

  return (
    <div className="main">
      <h2>ALl Bottles are Here: {bottles.length}</h2>
      <h3>My Cart: {cart.length}</h3>

      <section className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleToCart={handleToCart}
          ></Bottle>
        ))}
      </section>
    </div>
  );
};

export default Bottles;
