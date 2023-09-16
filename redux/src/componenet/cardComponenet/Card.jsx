import "./card.scss";
import iphoneImage from "../../images/download.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../stores/slices/Slices";
import { useState } from "react";
const Card = ({ price, id, name }) => {
  const [quantity, setQuantity] = useState(0);
  const itemsList = useSelector((state) => state.AddToCard.itemsList);
  const dispatch = useDispatch();
  const addToCrdHandel = (e) => {
    dispatch(
      AddToCart({
        price: parseInt(e.target.dataset.price),
        id: e.target.dataset.id,
      })
    );
    const product = itemsList.filter((item) => item.id == id)[0];
    if (product) {
      setQuantity(product.quantity);
    }
  };
  const incrementClickHandel = (e) => {
    dispatch(
      AddToCart({
        price: parseInt(e.target.dataset.price),
        id: e.target.dataset.id,
      })
    );
    const product = itemsList.filter((item) => item.id == id)[0];
    if (product) {
      setQuantity(product.quantity);
    }
  };
  return (
    <div className="card-container">
      <div className="cardWraper">
        <div className="card-image">
          <img src={iphoneImage} alt="" />
        </div>
        <div className="card-detail">
          <div className="card-price">${price}</div>
          <div className="card-name">{name}</div>
        </div>
        {quantity == 0 ? (
          <button
            className="add-to-card"
            data-id={id}
            data-price={price}
            onClick={addToCrdHandel}
          >
            add to card
          </button>
        ) : (
          <div>
            <button
              className="plus-btn"
              data-id={id}
              data-price={price}
              onClick={incrementClickHandel}
            >
              +
            </button>
            {quantity}
            <button className="mines-btn" data-id={id} data-price={price}>
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
