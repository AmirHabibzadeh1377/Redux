import './basket.scss'
import BasketItem from './BasketItem'
import { useSelector } from 'react-redux'
import iphoneImage from "../../images/download.jpg";
const Basket = ({showCart}) => {
  let items = useSelector((state)=>state.AddToCard.itemsList);
  items = items.filter((item)=>item.quantity > 0)
  console.log(items)
  return (
    <div className={showCart ? "basket-container visibility" :"basket-container un-visibility"}>
      {items.map(item=>{
        if(item.quantity > 0){
          return <BasketItem key={item.id} image={iphoneImage} name={item.name} price={item.price} id={item.id} quantity={item.quantity}/>
        }
      })}
    </div>
  )
}

export default Basket