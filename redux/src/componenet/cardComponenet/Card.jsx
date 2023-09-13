import './card.scss'
import iphoneImage from '../../images/download.jpg'
const Card = () => {
  return (
    <div className='card-container'>
      <div className="cardWraper">
        <div className='card-image'>
            <img src={iphoneImage} alt="" />
        </div>
        <div className='card-detail'>
            <div className='card-price'>$25</div>
            <div className='card-name'>iphone 11 promax</div>
        </div>
        <button className='add-to-card'>add to card</button>
      </div>
    </div>
  )
}

export default Card 
