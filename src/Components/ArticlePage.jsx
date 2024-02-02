import React from 'react'
import { Form } from 'react-router-dom'

const ArticlePage = () => {
  return (
    <>
      <article className='flex flex-col h-auto w-full'>
        <header className=" text-black p-4 m-5">
          <h1 className="text-[15px] ">✨Member-only story</h1>
          <h1 className="text-4xl font-extrabold text-center "> This is the Word I’m Trying to Live </h1>
          <h1 className="text-4xl font-extrabold text-center  ">By This Year</h1>
        </header>
        <center>
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*P8D7E0DvyYWRyaYR.jpg"
            alt="Article Cover"
            className="w-[800px] h-[500px] object-cover "
          />
        </center>
        <div className="w-full  h-auto flex justify-center">
          <div className="w-[60%] h-auto  text-[18px] font-[500] font-serif">
            <h1 className='mb-[20px] p-[10px]'>The past year has been all about LESS for me.</h1>
            <p className='pb-[30px] mt-[20px]'>At the end of 2022, my wife and I picked a word we were going to use as our lodestar for the year. We picked ‘less’ because we felt like we were too busy, too overwhelmed, too stressed, too frustrated. I was just exhausted as December ended and I felt like my health, my family, and my quality of life could not face another year of the same.</p>
            <h1 className='mb-[20px] p-[10px]'>My goal was:</h1>
            <p className='pb-[30px] mt-[20px]'>And yet, science prevails. This machine for creating knowledge moves at such pace and fury that even Musk is but a pebble causing a scant ripple in its flow. As you’ll see, we’ve learnt a lot about the brain this year, about what the brain doesn’t have, what it does have, and about expert game players. But what we learnt most about was dopamine.</p>
            <p className='pb-[30px] mt-[20px]'>Less. Less commitments. Less drama. Less busyness. Less screen time. Just less. Part of the reason I want less is so I have room for more. More stillness. More presence.</p>
            <p className='pb-[30px] mt-[20px]'>Looking back, I think we did a pretty good job. I was strict about passing on stuff I didn’t want to do. I asked my assistant not to schedule appointments or interviews or calls on Fridays. I pushed ​my book​ back a year — which required some serious negotiations with my publisher and facing a lot of ideas in myself about what it meant to not be so busy and always being doing, doing, doing.</p>
            <p className='pb-[30px] mt-[20px]'>What did this 'less' translate to? Certainly not a lot of ‘nothing,’ which is what I think we suspect we’ll turn into if we start saying that powerful word ‘no’ or if we start slowing down. Instead, what happened is that I did a lot more. I did more school lunches and school drop offs. We went on more trips together. My wife and I hung out more. I spent more time on the book that I delayed, and now it’s much, much better.</p>
            <p className='pb-[30px] mt-[20px]'>Now, staring down the barrel of a new year, I intend to continue this trend of less (to get the double benefit, as Marcus Aurelius writes in ​Meditations​, of doing the essential things better). But I also wanted to pick a new word to aim at.</p>
            <h1 className='mb-[20px] p-[10px]'>This year, the word for me is: Systems..</h1>
            <p className='pb-[30px] mt-[20px]'>In ​Ego Is The Enemy​, I tell the story of the day of Dwight D. Eisenhower’s inauguration.</p>
            <p className='pb-[30px] mt-[20px] bg-opacity-70'>In 1953, Eisenhower was entering the White House as the newly inaugurated president, having just returned from his parade. As he walked into the Executive Mansion, his chief usher
              handed Eisenhower two letters marked “Confidential and Secret” that had been sent to him earlier in the day.</p>
            <p className='pb-[30px] mt-[20px] opacity-60'>“Never bring me a sealed envelope,” Eisenhower said firmly. “That’s what I have a staff for.”</p>
          </div>
        </div>
        <div className="w-full  h-auto flex justify-center">
          <div className="w-[50%] h-auto  text-[16px] font-[200] font-serif">
            <h1 className='text-4xl font-extrabold text-center  mb-6 mt-4'>Create an account to read the full story.</h1>
            <p>The author made this story available to Medium members only.
              If you're new to Medium, create a new account to read this story on us.</p>

            <div className="max-w-md mx-auto mt-8 p-6 rounded-md ">
              <form >
                <input className="w-full px-3 py-3 m-3 border rounded-md " type="text" placeholder='Signup With Google' />
                <input className="w-full px-3 py-2 m-3  border rounded-md  " type="text" placeholder='Signup With Facebook' />
                <input className="w-full px-3 py-2  m-3 border rounded-md  " type="text" placeholder='Signup With Facebook' />
                <h1 className='p-3'>Already have an account? Sign in</h1>
              </form>
            </div>
          </div >
        </div >
        <div className="w-full  h-auto flex justify-center">
          <div className="w-[50%] h-auto  text-[18px] font-[500] font-serif">
            <img src="https://ryanholiday.medium.com/?source=post_page-----3cf185518568--------------------------------" alt="" className='rounded-full' />
            <h1 className='text-2xl font-extrabold text-center  mb-6 mt-4'>Written by Ryan Holiday
            </h1>
          </div>
        </div>


        
      </article >
    </>
  )
}

export default ArticlePage




