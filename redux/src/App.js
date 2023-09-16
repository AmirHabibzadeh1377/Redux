import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { LogIn } from './stores/slices/AuthenticationSlice';
import Auth from './pages/Authentication/Auth';
import { Product } from './componenet/data/data'
import Card from './componenet/cardComponenet/Card';
import {setShowCart} from './stores/slices/Slices'
function App() {
  const totalQauntity = useSelector((state) => state.AddToCard.toatalQauntity);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const showCart = useSelector((state)=>state.AddToCard.showCart);
  const dispatch = useDispatch();
  const showCartHandel=()=>{
    dispatch(setShowCart())
  }
  return (
    <div className="App">
      {!isLoggedIn ?
        <>
          <div className='shopping-header'>
            <div className='card-number' onClick={showCartHandel}>
              cart items : {totalQauntity}
            </div>
            <div className='card-title'>
              redux shopping cart 
            </div>
          </div>
          <div className='cardCotnainer'>
            {Product.map(item => {
              return <Card key={item.id} name={item.name} id={item.id} price={item.price} />
            })}
          </div>
        </>
        :
        ""
      }
    </div>
  );
}

export default App;
