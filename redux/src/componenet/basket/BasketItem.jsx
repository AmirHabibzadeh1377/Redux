import './basketItem.scss'

const BasketItem = ({image,name,price,quantity}) => {
  return (
    <div className='basket-item-container'>
      <div className='image-container'>
        <img className='img' src={image} alt="" />
      </div>
      <div className='name-price'>
        <span>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <div className='inc-dec-btn'>
        <button className='decrement'>-</button>
        {quantity}
        <button className='increment'>+</button>
      </div>
    </div>
  )
}

export default BasketItem