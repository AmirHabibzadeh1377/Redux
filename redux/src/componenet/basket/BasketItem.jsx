import "./basketItem.scss";
import { useDispatch } from "react-redux";
import {RemoveFromCart , AddToCart} from '../../stores/slices/Slices'
const BasketItem = ({ image, name, price, quantity,id }) => {
  const dispatch = useDispatch();
  const decrementHandel = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(RemoveFromCart({id:id}))
  };
  const incrementHandel = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(AddToCart({id:id, price:price,name:name }))
  };
  return (
    <div className="basket-item-container">
      <div className="image-container">
        <img className="img" src={image} alt="" />
      </div>
      <div className="name-price">
        <span>{name}</span>
        <span className="price">{price}</span>
      </div>
      <div className="inc-dec-btn">
        <button className="decrement" data-id={id} onClick={decrementHandel}>
          -
        </button>
        {quantity}
        <button className="increment" data-id={id} onClick={incrementHandel}>
          +
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
