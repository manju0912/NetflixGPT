import React, { useState } from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import tv from '../assets/tv.png'
import videoTv from '../assets/video-tv-in-0819.m4v'
import mobile from '../assets/mobile-0819.jpg'
import downloadIcon from '../assets/download-icon.gif'
import strangerThingsBanner from '../assets/boxshot.png'
import devicePile from '../assets/device-pile-in.png'
import movieClip from '../assets/video-devices-in.m4v'
import kidsPoster from '../assets/children.png'
import { BsPlusLg } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import faq from '../utils/faq'

const LandingPage = () => {

  const [expandedItem, setExpandedItem] = useState({});

  const toggleItem = (currentId) => {
    setExpandedItem((prevState) => ({
      [currentId]: !prevState[currentId],
    }));
  }

  return (
    <main className='bg-black w-full'>
      <section className='w-full h-[100vh] bg-[url("/src/assets/banner.jpg")] bg-bottom bg-cover'>
        <div className="w-full h-[100vh] bg-black/60">
          <div className=' w-full text-white text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute'>
            <h1 className='text-[60px] font-bold'>Unlimited movies, TV shows and more</h1>
            <p className='text-[28px] my-2'>Watch anywhere. Cancel anytime.</p>
            <p className='text-[22px] my-4'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="w-[50%] flex items-center justify-center mx-auto gap-3 mt-8">
              <input type="email" placeholder='Email address' className='w-[60%] px-4 h-[60px] rounded-md bg-black/70 border-[1px] outline-none border-white/70 text-lg' />
              <button className='text-white bg-[#e50914] h-[60px] px-10 rounded-md border-[1px] border-black/30 text-[24px] flex items-center hover:bg-[#C2050E] transition ease-linear'>Get Started <span className='w-[20px] h-[20px] ml-2'><MdArrowForwardIos /></span></button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 border-t-8 border-[#2d2d2d]">
        <div className="grid grid-cols-2 w-[1080px] text-white m-auto items-center">
          <div>
            <h2 className='text-[58px] font-bold'>Enjoy on your TV</h2>
            <p className='text-[26px]'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className='relative'>
            <img src={tv} alt="tv" className='object-cover relative z-20' />
            <video className='absolute w-[80%] bottom-[20%] left-[10%]' autoPlay>
              <source src={videoTv} />
            </video>
          </div>
        </div> 
      </section>

      <section className="w-full py-20 border-t-8 border-[#2d2d2d]">
        <div className="grid grid-cols-2 items-center w-[1080px] mx-auto">
          <div className="relative">
            <img src={mobile} alt="mobile mockup" className='mx-auto z-10 relative' />
            <div className="flex items-center justify-between border-[2px] border-gray-500 rounded-lg overflow-hidden p-2 bg-black bottom-[5%] left-[22%] absolute z-50">
              <img src={strangerThingsBanner} alt="Stranger Things Banner" className='w-[70px]' />
              <div>
                <p className='text-white'>Stranger Things</p>
                <p className='text-blue-600'>Downloading...</p>
              </div>
              <img src={downloadIcon} alt="download icon" className='w-[20%]' />
            </div>
          </div>
          <div className='text-white'>
            <h2 className='text-[58px] font-bold leading-[80px]'>Download your shows to watch offline</h2>
            <p className='text-[26px]'>Save your favourites easily and always have something to watch.</p>
          </div>
        </div>
      </section>

      <section className="w-full py-20 border-t-8 border-[#2d2d2d]">
        <div className="grid grid-cols-2 w-[1080px] text-white m-auto items-center">
          <div>
            <h2 className='text-[58px] font-bold'>Watch everywhere</h2>
            <p className='text-[26px]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className='relative'>
            <img src={devicePile} alt="tv" className='relative z-20' />
            <video className='absolute w-[62%] bottom-[40%] left-[18%]' autoPlay>
              <source src={movieClip} />
            </video>
          </div>
        </div> 
      </section>

      <section className="w-full py-20 border-t-8 border-[#2d2d2d]">
        <div className="w-[1080px] grid grid-cols-2 items-center mx-auto">
          <div>
            <img src={kidsPoster} alt="Kids Poster"/>
          </div>
          <div className='text-white'>
            <h2 className='text-[58px] font-bold leading-[80px]'>Create profiles for kids</h2>
            <p className='text-[26px]'>Send children on adventures with their favourite characters in a space made just for them-free with your membership.</p>
          </div>
        </div>
      </section>

      <section className="w-full py-20 border-t-8 border-[#2d2d2d]">
        <div className='w-[1080px] mx-auto text-white'>
          <h2 className='text-center text-[50px] font-extrabold'>Frequently Asked Questions</h2>
          {/* Accordion */}
          <div>
            {
              faq && faq.length > 0 ? (
                faq.map((item) => (
                  <div key={item.id} className='bg-[#2d2d2d] my-2'>
                    <div className='flex justify-between items-center py-4 px-8 cursor-pointer' onClick={() => toggleItem(item.id)}>
                      <h4 className='text-[26px]'>{item.question}</h4>
                      {
                        expandedItem[item.id] ? (
                          <div><RxCross1 className='w-[30px] h-[30px]' /></div>
                        ) : (
                          <div><BsPlusLg className='w-[35px] h-[35px]' /></div>
                        )
                      }
                      
                    </div>
                    {
                      expandedItem[item.id] && (
                        <div className='border-t-[1px] border-black'>
                          <p className='text-[26px] py-4 px-8'>{item.answer}</p>
                        </div>
                      )
                    }
                  </div>
                ))
              ) : (
                <p>Data not Found!</p>
              )
            }
          </div>
          {/* Newsletter Section */}
          <div className='text-center mt-12'>
            <p className='text-[22px]'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="w-[70%] flex items-center justify-center mx-auto gap-3 mt-8">
              <input type="email" placeholder='Email address' className='w-[50%] px-4 h-[60px] rounded-md bg-black/70 border-[1px] border-white/70 text-lg' />
              <button className='text-white bg-[#e50914] h-[60px] px-10 rounded-md border-[1px] border-black/30 text-[24px] flex items-center hover:bg-[#C2050E] transition ease-linear'>Get Started <span className='w-[20px] h-[20px] ml-2'><MdArrowForwardIos /></span></button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LandingPage