import React from 'react'

const Card = () => {
    return (
        <div className='w-[100%] h-[180px] flex gap-x-[15px] items-center'>
            <img src="https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-2.jpg" alt="" className='w-[50%] h-full' />
            <div className="h-full w-full flex flex-col justify-around pt-[15px] pb-[15px]">
                <div className='p-[3px] text-[13px] w-20 bg-black text-white'>Technology</div>
                <h2 className='text-[21px] font-[700]'>Want a Career in Technology? Make This Your Secret Weapon</h2>
                <p className='text-[15px] font-[200]'>June 28, 2021</p>
            </div>
        </div>
    )
}

export default Card