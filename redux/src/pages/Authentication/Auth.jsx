import './auth.scss'
import { useDispatch, useSelector } from 'react-redux'
import { LogIn, LogOut } from '../../stores/slices/AuthenticationSlice'
import { useRef } from 'react'
const Auth = () => {
    const Id = useRef();
    const Password = useRef();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const handelLogin = () => {
        const userName = Id.current.value;
        const pass = Password.current.value;
        if(userName == "amir" && pass ==123){
            dispatch(LogIn());
        }
        else{
            dispatch(LogOut())
        }
       
    }
    return (
        <div className='authCotainer'>
            <div className="authWraper">
                <span className='logo'>Login</span>
                <div className='authInput'>
                    Id
                    <input type="text" ref={Id} />
                    password
                    <input type="number" ref={Password}/>
                    <button onClick={handelLogin}>Login</button>
                </div>
            </div >
        </div>
    )
}

export default Auth
