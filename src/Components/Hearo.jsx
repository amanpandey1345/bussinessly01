import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutApi } from "../redux/Actions/userAction";
import { Link } from "react-router-dom";

const Hearo = () => {
  const { isAuth, User, isLoading, errorMessage } = useSelector(
    (state) => state.auth
  );
  
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center w-full h-screen">
            <Link to={"/articlepage"}>/articlepage</Link>
      {isAuth && (
        <>
          <div className="flex flex-col w-1/3 gap-2 p-4 bg-red-400 item-center registers h-[400px]">
            <label htmlFor="imgs" className="flex justify-center">
              <img
                src={User.user.avatar.url}
                alt=""
                className="w-[150px] rounded-full h-[150px] ring-2 ring-blue-400"
              />
              <input type="file" hidden id="imgs"/>
            </label>

            <input
              type="text"
              placeholder="Name"
              className="p-2"
              defaultValue={User.user.name}
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2"
              defaultValue={User.user.email}
            />
            <input
              type="text"
              placeholder="Password"
              className="p-2"
              defaultValue={User.user.role}
            />

            <button
              onClick={() => dispatch(logOutApi())}
              className="px-4 py-2 bg-red-500"
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Hearo;
