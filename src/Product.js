import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Product({ id, title, image, price, rating, description }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price product__prop">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating ">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" className="product__prop"/>
      <h5 className="product__info">{description}</h5>

      <Link to={`/product/${id}`}>
        <button className="product__mybutton">More Info</button>
      </Link>
      {/* Profe acá no logré que me funcionara el onClick del botón */}

      <button onClick={addToBasket} className="product__prop">Add to Basket</button>
      
      
    </div>
  );
}

export default Product;
