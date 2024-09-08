import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart } from "../../utilities/localStroage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from LS
  useEffect(() => {
    const storedCart = getStoredCart();
    console.log(storedCart);
    const savedCart = [];
    for(const id of storedCart){
      console.log(id);
      const bottle = bottles.find(bottle => bottle.id === id);
      if(bottle){
        savedCart.push(bottle);
        setCart(savedCart);
      }
    }

  }, [bottles])

  const handleToCart = (bottle) => {
    // console.log("Hi", bottle);
    const updateCart = [...cart, bottle];
   
    setCart(updateCart);
    
    addToLS(bottle.id);
    
  };

  return (
    <div className="main">
      <h2>ALl Bottles are Here: {bottles.length}</h2>

      <Cart cart={cart}></Cart>

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
