import React from 'react'
import Card from './Card'

const Vilen = () => {
  return (
    <div className='md:flex h-[85vh] w-full gap-x-[15px] justify-center'>
      <div className='w-full md:w-1/2 h-full flex gap-x-[15px] relative'>
        <img src="https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-2.jpg" alt="" className='w-full h-full' />
        <div className="h-full w-full absolute bottom-0 left-0 lenear-grad ">
          <p className='w-[100px] p-[5px] bg-black text-white'>Technology</p>
          <h2 className='text-[25px] font-[600]'>Want a Career in Technology? Make This Your Secret Weapon</h2>
          <p className='text-[20px] font-[200]'>June 28, 2021</p>
        </div>
      </div>
      <div className="w-full md:w-[45%] flex flex-col gap-y-[10px] mt-7 md:mt-0 justify-between h-full">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Vilen