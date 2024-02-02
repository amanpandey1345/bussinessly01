import React from 'react'

const Cards = () => {
    return (
        <div className="w-full h-[150px] gap-x-[15px] flex items-center font-[Lora]">
            <img src="https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-2.jpg" alt="" className='w-[150px] h-[150px] lg:w-[500px] lg:h-[150px]' />
            <div className="w-full flex flex-col items-start justify-center gap-y-[10px]">
                <span className='px-3 py-2 bg-black text-white text-[12px] font-lato'>Stock Market</span>
                <h1 className='text-[16px] lg:text-[20px] font-[800]'>Want a Career in Technology? Make This Your Secret Weapon</h1>
                <div className="w-1/2 flex justify-between text-[12px]">
                    <p>akbarh </p>
                    <p>June 28, 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Cards