import { useDispatch, useSelector } from "react-redux";
import {
  getUserApi,
  logInApi,
  logOutApi,
  registerApi,
} from "../redux/Actions/userAction";
import { useEffect, useState } from "react";
import {  Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const { isAuth, User, isLoading, errorMessage } = useSelector((state) => state.auth);
  const { isRegisterSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [imgs, setImgs] = useState("");

  const navigate= useNavigate()


  const handleSub = (e) => {
    e.preventDefault();
    // const file = e.target[0].value
    const name = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;

    const formdata = new FormData();

    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("file", imgs);
    dispatch(registerApi(formdata));
  };
  const handleSubs = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    dispatch(logInApi({ email, password }));
    navigate("/")
  };

  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      setImgs(file);
      console.log(reader.result);
    };
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-5">
      <Link to={"/articlepage"} className=" p-2 bg-blue-400">/articlepage</Link>
      <Link to={"/dashboard"}>Dashboard</Link>    
      {
        isLoading && <h1 className="p-2 text-4xl text-red-500 bg-yellow-200">
        Loading....</h1>
      }
      {!isAuth && (
        <form
          onSubmit={handleSub}
          className="flex flex-col w-1/3 gap-2 p-4 bg-red-400 item-center registers h-[400px]"
        >
          <label htmlFor="imgs" className="flex justify-center">
            <img
              src={image}
              alt=""
              className="w-[150px] rounded-full h-[150px] ring-2 ring-blue-400"
            />
            <input type="file" hidden id="imgs" onChange={handleImage} />
          </label>

          <input type="text" placeholder="Name" className="p-2" />
          <input type="email" placeholder="Email" className="p-2" />
          <input type="text" placeholder="Password" className="p-2" />
          <button type="submit" className="px-4 py-2 bg-blue-500">
            Register
          </button>
          {isRegisterSuccess ? (
            <span className="text-green-600">User register Successfully</span>
          ) : (
            <span className="text-red-600">{errorMessage}</span>
          )}
        </form>
      )}
      {!isAuth && (
        <form 
          onSubmit={handleSubs}
          className="flex flex-col w-1/3 gap-2 p-4 bg-red-400 item-center login h-[200px]"
        >
          <input type="email" placeholder="Email" className="p-2" />
          <input type="text" placeholder="Password" className="p-2" />
          <button type="submit" className="px-4 py-2 bg-blue-500">
            Login
          </button>
        </form>
      )}

      {isAuth &&
<>
          
          <div
          className="flex flex-col w-1/3 gap-2 p-4 bg-red-400 item-center registers h-[400px]"
        >
          <label htmlFor="imgs" className="flex justify-center">
            <img
              src={User.user.avatar.url}
              alt=""
              className="w-[150px] rounded-full h-[150px] ring-2 ring-blue-400"
            />
            <input type="file" hidden id="imgs" onChange={handleImage} />
          </label>
 
          <input type="text" placeholder="Name" className="p-2" defaultValue={User.user.name} />
          <input type="email" placeholder="Email" className="p-2"  defaultValue={User.user.email}/>
          <input type="text" placeholder="Password" className="p-2" defaultValue={User.user.role} /> 

        
          <button onClick={() => dispatch(logOutApi())} className="px-4 py-2 bg-red-500">Logout</button>
        </div>
          </>
      }    

      {/*       
        <button onClick={()=> dispatch(getUserApi())} >Me</button>
        <button onClick={()=> dispatch(logInApi({email:"amanpandey1347@gmail.com",password:"123456789"}))} >Login</button>
        
        {JSON.stringify(isAuth)}  
        {JSON.stringify(User)}   */}
    </div>
  );
};

export default Hero;
