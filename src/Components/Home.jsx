import Cards from "./Cards";
import Tranding from "./Tranding";
import Articals from "./Articals";
// import { useAsyncValue } from 'react-router-dom'
// import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/ReduxSlice/Counter.Slice";
import { useState } from "react";
import { getPostalApi } from "../redux/Actions/postalAction";
import { CreateBlogApi, getBlogApi } from "../redux/Actions/BlogAction";


const datas = {
  title:"hello Redux",
imgUrl:"data:image/jpeg;base64,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",
content:"thsidfadsf asdfljf",
tag:"tag",
cat:"cat" ,
slug:"hello-Aman-pandey"
}


const Home = () => {
  const dispatch = useDispatch();

  // const [pincode, setPincode] = useState()
  // console.log(pincode);
  // const { value } = useSelector(state=> state.counter);
  // const { data,errorMessage,isSuccess,isLoading } = useSelector(state=> state.postal);  
  const { posts } = useSelector(state=> state.blog);  
  console.log(posts);
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
