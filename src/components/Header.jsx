import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IoLanguage } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import profileIcon from '../assets/profile-icon.jpg'
import { toggleSearchView } from '../store/genAiSlice';

const Header = () => {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {}).catch((error) => {
      console.log(error);
    });
  }

  const handleSearchClick = () => {
    dispatch(toggleSearchView());
  }

  return (
    <header className='w-full fixed z-50 py-6 bg-gradient-to-b from-black top-0 left-0'>
      <div className="w-[300px] lg:w-[1080px] sm:w-[600px] md:w-[720px] sm:px-8 px-0 mx-auto my-0">
        <div className='flex justify-between items-center'>
        {!user ?
          <Link to='/'>
            <div className="logo">
              <img src={logo} alt="logo" className='w-[110px] lg:w-[180px] sm:w-[130px]' />
            </div>
          </Link> :
          <Link to='/home'>
            <div className="logo">
              <img src={logo} alt="logo" className='w-[110px] lg:w-[180px] sm:w-[130px]' />
            </div>
          </Link>
        }
          
          {!user ? 
          <div className='flex items-center lg:gap-x-6 gap-x-2 text-sm md:text-base'>
            <div className='flex items-center justify-center text-white'>
              <div className='-mr-4 sm:-mr-6 z-10'><IoLanguage /></div>
              <select className='pl-4 sm:pl-6 md:py-1 py-[3px] rounded-[4px] bg-black border-[1px] border-white/50'>
                <option value="English" className='w-full'>English</option>
                <option value="हिन्दी">हिन्दी</option>
              </select>
            </div>
            <Link to='/login'>
            <button className='text-white bg-[#e50914] md:px-4 px-3 py-1 rounded-[4px] hover:bg-[#C2050E] transition ease-linear'>Sign In</button>
            </Link>
          </div> :
          <div className='flex items-center lg:gap-x-6 gap-x-2 text-sm md:text-base'>
            <button type='submit' className='text-white bg-[#e50914] p-2 rounded-full font-medium hover:bg-[#C2050E] transition ease-linear' onClick={handleSearchClick}><IoSearch /></button>
            <img src={profileIcon} alt="profile icon" className='w-6 h-6 rounded sm:w-8 sm:h-8' />
            <button onClick={handleSignOut} className='text-white bg-[#e50914] md:px-4 px-3 sm:py-1 rounded-[2px] hover:bg-[#C2050E] transition ease-linear'>Sign Out</button>
          </div>
        }
        </div>
      </div>
    </header>
  )
}

export default Header