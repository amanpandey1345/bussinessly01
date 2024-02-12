import { useDispatch, useSelector } from "react-redux";
import { getUserApi, logInApi, logOutApi } from "../redux/Actions/userAction";
import { useEffect } from "react";


const Hero = () => {
    const { isAuth,User } = useSelector(state=> state.auth);  
    const dispatch = useDispatch();

    useEffect(() => {    
   dispatch(getUserApi())
    }, [dispatch])  
    
  return (
    <div className='flex justify-center w-full h-screen'>
    
      
        <button onClick={()=> dispatch(getUserApi())} >Me</button>
        <button onClick={()=> dispatch(logOutApi())} >Logout</button>
        <button onClick={()=> dispatch(logInApi({email:"amanpandey1347@gmail.com",password:"123456789"}))} >Login</button>
        
        {JSON.stringify(isAuth)}  
        {/* {JSON.stringify(User)}   */}
    </div>
  )
}

export default Hero