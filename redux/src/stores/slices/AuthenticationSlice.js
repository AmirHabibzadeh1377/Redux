import  {createSlice} from '@reduxjs/toolkit'
const AuthentcationSlice=createSlice({
    name:"auth",
    initialState:{isLoggedIn: false},
    reducers:{
        LogIn(state){
state.isLoggedIn = true;
        },
        LogOut(state){
            state.isLoggedIn = false;
        }
    }
})

export const {LogIn , LogOut} = AuthentcationSlice.actions;
export default AuthentcationSlice.reducer;