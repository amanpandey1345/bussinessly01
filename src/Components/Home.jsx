import Cards from "./Cards";
import Tranding from "./Tranding";
import Articals from "./Articals";
// import { useAsyncValue } from 'react-router-dom'
// import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/ReduxSlice/Counter.Slice";

import { CreateBlogApi, getBlogApi } from "../redux/Actions/BlogAction";
import { logOutApi } from "../redux/Actions/userAction";





const Home = () => {
  const dispatch = useDispatch();
  const { isAuth, User, isLoading, errorMessage } = useSelector((state) => state.auth);
  // const [pincode, setPincode] = useState()
  // console.log(pincode);
  // const { value } = useSelector(state=> state.counter);
  // const { data,errorMessage,isSuccess,isLoading } = useSelector(state=> state.postal);  
  // const { posts } = useSelector(state=> state.blog);  
  // console.log(posts);
  return (   
    <>
      <div className="flex items-center justify-center w-full">
        {/* <h1 className="text-3xl text-center">{value}</h1>  */}

        <button className="px-5 py-2 text-center bg-green-500" onClick={()=>dispatch(increment())}>+</button>
        <button className="px-5 py-2 bg-red-500" onClick={()=> dispatch(decrement())}>-</button>
      </div>
      
      <div className="flex flex-col items-center justify-center w-full h-auto min-h-screen bg-slate-300">
        {/* <input type="number" className="w-1/2 p-2" onChange={(e)=>setPincode(e.target.value) } /> */}
        {/* <button className="p-4 bg-green-600 "  onClick={()=> dispatch(getPostalApi(pincode))}>Get Post Office</button> */}
        <button className="p-4 bg-green-600 "  onClick={()=> dispatch(getBlogApi())}>Get Posts</button>
        <button className="p-4 bg-green-600 "  onClick={()=> dispatch(CreateBlogApi(datas))}>create Posts</button>
        <div className="w-full h-auto mt-10">
{/*           
          {
            !isLoading &&
          JSON.stringify(data)
          }
          {
            isLoading &&
          <h1 className="text-3xl "> Loading</h1>
          } */}
        </div>
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
            <input type="file" hidden id="imgs" />
          </label>
 
          <input type="text" placeholder="Name" className="p-2" defaultValue={User.user.name} />
          <input type="email" placeholder="Email" className="p-2"  defaultValue={User.user.email}/>
          <input type="text" placeholder="Password" className="p-2" defaultValue={User.user.role} /> 

        
          <button onClick={() => dispatch(logOutApi())} className="px-4 py-2 bg-red-500">Logout</button>
        </div>
          </>
      }  
      </div>

      <div className="w-full flex flex-col items-center gap-y-[50px] bg-gray-100 md:relative ">
        <div className="w-[90%] md:h-[85vh] gap-y-[20px] flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[50%] h-full relative">
            <img
              src="https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-2.jpg"
              alt=""
              className="w-full h-[85vh]"
            />
            <div className="absolute bottom-0 w-full h-full bg-black opacity-30 ">
              <div className="flex items-end w-full h-full ">
                <div className="w-full flex flex-col items-start text-white justify-center ml-[20px] mb-[20px] ">
                  <span className="px-3 py-2 bg-black text-[12px]">
                    Stock Market
                  </span>
                  <h1 className="text-[30px] font-[700]">
                    15 Shocking Elon Musk Tweets About Stock Market
                  </h1>
                  <div className=" w-1/5 flex justify-between text-[12px]">
                    <p>akbarh </p>
                    <p>June 28, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full gap-y-[20px] md:w-[49%] flex flex-col justify-between">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>

        <div className="w-[90%] flex flex-col gap-y-[20px]">
          <div className="w-full flex gap-x-[15px] ">
            {" "}
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              className="ji ah"
            >
              <path fill="#fff" d="M0 .8h28v28H0z"></path>
              <g opacity="0.8" clipPath="url(#trending_svg__clip0)">
                <path fill="#fff" d="M4 4.8h20v20H4z"></path>
                <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
                <path
                  d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
                  stroke="#000"
                  strokeLinecap="round"
                ></path>
              </g>
              <defs>
                <clipPath id="trending_svg__clip0">
                  <path
                    fill="#fff"
                    transform="translate(4 4.8)"
                    d="M0 0h20v20H0z"
                  ></path>
                </clipPath>
              </defs>
            </svg>{" "}
            <h1 className="font-[500] text-[16px]"> Trending on Medium</h1>
          </div>
          <div className="w-[100%] h-full flex justify-between flex-wrap gap-y-[50px] mb-[50px]">
            <Tranding />
            <Tranding />
            <Tranding />
            <Tranding />
            <Tranding />
            <Tranding />
          </div>
        </div>

        <div className="w-[90%] h-auto flex flex-wrap-reverse lg:flex-nowrap gap-x-[20px]">
          <div className="mt-[40px] lg:mt-[0px] lg:w-[60%] flex flex-col gap-y-[30px]">
            <Articals />
            <Articals />
            <Articals />
            <Articals />
            <Articals />
            <Articals />

            <div className="lg:hidden flex justify-center items-center h-[150px]">
              <button
                type="button"
                className="border-[2px] border-black px-[16px] py-[8px] rounded-full "
              >
                Load more stories
              </button>
            </div>
          </div>
          <div className="mb-[20px] lg:w-[40%] lg:sticky lg:top-0 flex flex-col gap-y-[20px] lg:px-[40px]">
            <h1 className="text-[16px] font-[500]">
              Discover more of what matters to you
            </h1>
            <div className="flex justify-between gap-y-[10px] flex-wrap w-[100%] ">
              <span className="py-[8px] px-[16px] text-[16px] font-[400] bg-slate-200 rounded-full ">
                Programming
              </span>
              <span className="py-[8px] px-[16px] text-[16px] font-[400] bg-slate-200 rounded-full ">
                Data Science
              </span>
              <span className="py-[8px] px-[16px] text-[16px] font-[400] bg-slate-200 rounded-full ">
                Technology
              </span>
              <span className="py-[8px] px-[16px] text-[16px] font-[400] bg-slate-200 rounded-full ">
                Self Improvement
              </span>
              <span className="py-[8px] px-[16px] text-[16px] font-[400] bg-slate-200 rounded-full ">
                Writing
              </span>
              <span className="py-[8px] px-[16px] text-[16px] font-[400] bg-slate-200 rounded-full ">
                Relationships
              </span>
              <span className="py-[8px] px-[16px] text-[16px] font-[400] bg-slate-200 rounded-full ">
                Machine Learning
              </span>
              <span className="py-[7px] px-[15px] text-[16px] font-[400] bg-slate-200 rounded-full ">
                Productivity
              </span>
              <span className="py-[7px] px-[15px] text-[16px] font-[400] bg-slate-200 rounded-full ">
                Politics
              </span>
            </div>
            <p className="text-[14] text-green-800 font-[500]">
              See more topics
            </p>
            <footer className="hidden lg:block">
              <ul className="flex gap-x-[20px] gap-y-[10px] flex-wrap">
                <li>
                  <a href="" className="font-[500] text-gray-600">
                    Help
                  </a>
                </li>
                <li>
                  <a href="" className="font-[500] text-gray-600">
                    Status
                  </a>
                </li>
                <li>
                  <a href="" className="font-[500] text-gray-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="" className="font-[500] text-gray-600">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="" className="font-[500] text-gray-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="" className="font-[500] text-gray-600">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="" className="font-[500] text-gray-600">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="" className="font-[500] text-gray-600">
                    Text to speech
                  </a>
                </li>
                <li>
                  <a href="" className="font-[500] text-gray-600">
                    Teams
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>

      <footer className="lg:hidden w-full flex flex-col gap-y-[20px] bg-black p-[10px] text-white px-[24px] py-[24px]">
        <h1 className="text-[30px]">LOGO</h1>
        <ul className="w-full flex gap-x-[20px] text-[13px]">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <a href="">Terms</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
        </ul>
        <hr className="bg-white md:hidden" />
        <h1 className="text-[16px] font-[500] md:hidden">Get the Medium app</h1>
        <div className="flex gap-x-[20px] md:hidden">
          <img src="app-store.png" alt="" className="w-[135px] h-[41px] " />
          <img src="play-store.png" alt="" className="w-[135px] h-[41px] " />
        </div>
      </footer>
    </>
  );
};

export default Home;
