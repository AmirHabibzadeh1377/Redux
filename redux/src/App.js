import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { LogIn } from './stores/slices/AuthenticationSlice';
import Auth from './pages/Authentication/Auth';
import Card from './componenet/cardComponenet/Card';
function App() {
  const counter = useSelector((state)=>state.AddToCard.toatalQauntity);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const itemsList = useSelector((state)=>state.AddToCard.itemsList);
  const totalPrice = itemsList.map((item)=>item.price)
  const t = totalPrice[0]  + totalPrice[1];
  const dispatch = useDispatch();
  const data = [
    {id:1,price:200000,name:"apple mackbock1"},
    {id:2,price:300000,name:"apple mackbock1"}
    ,{id:3,price:400000,name:"apple mackbock1"},
    {id:4,price:500000,name:"apple mackbock1"},
    {id:5,price:60000,name:"apple mackbock1"},
    {id:6,price:700000,name:"apple mackbock1"},
    {id:7,price:800000,name:"apple mackbock1"},
    {id:8,price:900000,name:"apple mackbock1"},
  ]
  return (
    <div className="App">
      {!isLoggedIn ?
        <>
          <div className='card-counter'>
            your card conter : {counter}
          </div>
             {data.map(item=>{
              return  <Card key={item.id} name={item.name} id={item.id} price={item.price}/> 
             })}

              total price is :$ {t}
        </>
        :
        ""
      }
    </div>
  );
}

export default App;
