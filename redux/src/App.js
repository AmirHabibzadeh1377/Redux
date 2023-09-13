import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, Add } from './stores/slices/Slices';
import { LogIn } from './stores/slices/AuthenticationSlice';
import Auth from './pages/Authentication/Auth';
import Card from './componenet/cardComponenet/Card';
function App() {
  const counter = useSelector((state) => state.AddToCard.value);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const decrementfunc = () => {
    dispatch(decrement())
  }
  const incrementfunc = () => {
    dispatch(increment())
  }
  const addFunc = () => {
    dispatch(Add({ payload: 10 }))
  }
  return (
    <div className="App">
      {!isLoggedIn ?
        <Auth />
        :
        <Card/>
        // <div>
        //   <h1>Counter App :</h1>
        //   <button onClick={decrementfunc}>decrement</button>
        //   <p>{counter}</p>
        //   <button onClick={incrementfunc}>increment</button>
        //   <button onClick={addFunc}>Add 10 To counter :{counter}</button>
        // </div>
      }
    </div>
  );
}

export default App;
