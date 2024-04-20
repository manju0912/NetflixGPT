import { useState } from 'react'
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
    <main className='w-full overflow-x-hidden'>
      <section className='w-full h-[100vh] bg-[url("/src/assets/banner.jpg")] bg-bottom bg-cover'>
        <div className="w-full h-[100vh] bg-black/60">
          <div className='w-[300px] xl:w-[1080px] sm:w-[600px] md:w-[720px] text-white text-center top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute sm:px-8 md:px-0'>
            <h1 className='text-[26px] lg:text-[56px] sm:text-[32px] font-bold'>Unlimited movies, TV shows and more</h1>
            <p className='lg:text-[28px] sm:text-[20px] text-[16px] my-2'>Watch anywhere. Cancel anytime.</p>
            <p className='lg:text-[22px] text-[16px] lg:my-4 sm:my-6 sm:px-[40px] px-0'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="lg:w-[60%] w-full flex items-center justify-center mx-auto gap-3 lg:mt-8 mt-4">
              <input type="email" placeholder='Email address' className='w-[60%] px-4 h-[45px] sm:h-[60px] lg:rounded-md rounded-[4px] bg-black/50 border-[1px] outline-none border-white/50 text-sm sm:text-base' />
              <button className='w-[40%] text-white bg-[#e50914] h-[45px] sm:h-[60px] lg:px-10 sm:px-[15px] md:rounded-md rounded-[4px] border-[1px] border-black/30 text-sm sm:text-[24px] flex items-center justify-center hover:bg-[#C2050E] transition ease-linear'><span>Get Started</span> <span className='sm:w-[20px] sm:h-[20px] sm:ml-2'><MdArrowForwardIos /></span></button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 border-t-8 border-[#2d2d2d]">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:w-[1080px] sm:w-[600px] md:w-[720px] sm:px-8 px-0 text-white m-auto items-center">
          <div className='text-center lg:text-left px-8 sm:px-0'>
            <h2 className='text-[26px] lg:text-[58px] sm:text-[32px] font-bold'>Enjoy on your TV</h2>
            <p className='text-[16px] lg:text-[26px] sm:text-[19px] md:mt-2 mt-0'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className='relative'>
            <img src={tv} alt="tv" className='object-cover relative z-20' />
            <video className='absolute w-[80%] bottom-[20%] left-[10%]' autoPlay loop muted>
              <source src={videoTv} />
            </video>
          </div>
        </div> 
      </section>

      <section className="w-full py-20 border-t-8 border-[#2d2d2d]">
        <div className="lg:grid grid-cols-1 lg:grid-cols-2 sm:flex items-center sm:flex-col-reverse w-[300px] xl:w-[1080px] md:w-[720px] sm:w-[600px] sm:px-8 px-0 mx-auto">
          <div className="relative">
            <img src={mobile} alt="mobile mockup" className='mx-auto z-10 relative' />
            <div className="flex items-center justify-between border-[2px] border-gray-500 rounded-lg overflow-hidden p-2 bg-black -bottom-[30%] sm:bottom-[5%] sm:left-[22%] left-[6%] right-[6%] absolute z-50">
              <img src={strangerThingsBanner} alt="Stranger Things Banner" className='w-[70px]' />
              <div>
                <p className='text-white'>Stranger Things</p>
                <p className='text-blue-600'>Downloading...</p>
              </div>
              <img src={downloadIcon} alt="download icon" className='w-[20%]' />
            </div>
          </div>
          <div className='text-white text-center lg:text-left mt-[30%] sm:mt-0'>
            <h2 className='text-[26px] lg:text-[58px] sm:text-[32px] font-bold lg:leading-[80px]'>Download your shows to watch offline</h2>
            <p className='text-[16px] lg:text-[26px] sm:text-[19px] md:mt-2 mt-0'>Save your favourites easily and always have something to watch.</p>
          </div>
        </div>
      </section>

      <section className="w-full py-20 border-t-8 border-[#2d2d2d]">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[300px] xl:w-[1080px] md:w-[720px] sm:w-[600px] sm:px-8 px-0 text-white m-auto items-center">
          <div className='text-white text-center lg:text-left px-8 sm:px-0'>
            <h2 className='text-[26px] lg:text-[58px] sm:text-[32px] font-bold'>Watch everywhere</h2>
            <p className='text-[16px] lg:text-[26px] sm:text-[19px] md:mt-2 mt-0'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className='relative'>
            <img src={devicePile} alt="tv" className='relative z-20' />
            <video className='absolute w-[62%] bottom-[40%] left-[18%]' autoPlay loop muted>
              <source src={movieClip} />
            </video>
          </div>
        </div> 
      </section>

      <section className="w-full py-20 border-t-8 border-[#2d2d2d]">
        <div className="lg:grid grid-cols-1 lg:grid-cols-2 sm:flex items-center sm:flex-col-reverse w-[300px] xl:w-[1080px] sm:w-[600px] sm:px-8 px-0 mx-auto">
          <div>
            <img src={kidsPoster} alt="Kids Poster"/>
          </div>
          <div className='text-center lg:text-left text-white px-8 sm:px-0'>
            <h2 className='text-[26px] lg:text-[58px] sm:text-[32px] font-bold lg:leading-[80px]'>Create profiles for kids</h2>
            <p className='text-[16px] lg:text-[26px] sm:text-[19px]'>Send children on adventures with their favourite characters in a space made just for them-free with your membership.</p>
          </div>
        </div>
      </section>

      <section className="w-full py-20 border-t-8 border-[#2d2d2d]">
        <div className='w-[300px] xl:w-[1080px] md:w-[720px] sm:w-[600px] sm:px-8 px-0 mx-auto text-white'>
          <h2 className='text-center text-[26px] lg:text-[58px] sm:text-[32px] font-bold'>Frequently Asked Questions</h2>
          {/* Accordion */}
          <div className='w-full'>
            {
              faq && faq.length > 0 ? (
                faq.map((item) => (
                  <div key={item.id} className='bg-[#2d2d2d] my-2'>
                    <div className='flex justify-between items-center py-4 px-8 cursor-pointer' onClick={() => toggleItem(item.id)}>
                      <h4 className='text-[16px] lg:text-[26px] sm:text-[20px]'>{item.question}</h4>
                      {
                        expandedItem[item.id] ? (
                          <div><RxCross1 className='w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] sm:w-[20px] sm:h-[20px]' /></div>
                        ) : (
                          <div><BsPlusLg className='w-[15px] h-[15px] lg:w-[35px] lg:h-[35px] sm:w-[24px] sm:h-[24px]' /></div>
                        )
                      }
                      
                    </div>
                    {
                      expandedItem[item.id] && (
                        <div className='border-t-[1px] border-black'>
                          <p className='text-[16px] lg:text-[26px] sm:text-[20px] py-4 px-8'>{item.answer}</p>
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
            <p className='text-[16px] lg:text-[22px] sm:text-[18px]'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="lg:w-[70%] w-full flex items-center justify-center mx-auto gap-3 mt-8">
              <input type="email" placeholder='Email address' className='w-[60%] px-4 h-[45px] sm:h-[60px] lg:rounded-md rounded-[4px] bg-black/50 border-[1px] outline-none border-white/50 text-sm sm:text-base' />
              <button className='w-[40%] text-white bg-[#e50914] h-[45px] sm:h-[60px] lg:px-10 sm:px-[15px] md:rounded-md rounded-[4px] border-[1px] border-black/30 text-sm sm:text-[24px] flex items-center justify-center hover:bg-[#C2050E] transition ease-linear'><span>Get Started</span> <span className='sm:w-[20px] sm:h-[20px] sm:ml-2'><MdArrowForwardIos /></span></button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LandingPage