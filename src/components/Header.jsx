import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IoLanguage } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import profileIcon from '../assets/profile-icon.jpg'

const Header = () => {

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {}).catch((error) => {
      console.log(error);
    });
  }

  return (
    <header className='w-full fixed z-50 py-6 bg-gradient-to-b from-black top-0 left-0'>
      <div className="lg:w-[1080px] sm:w-[600px] md:w-[720px] sm:px-8 px-0 mx-auto my-0">
        <div className='flex justify-between items-center'>
        {!user ?
          <Link to='/'>
            <div className="logo">
              <img src={logo} alt="logo" className='lg:w-[180px] sm:w-[130px]' />
            </div>
          </Link> :
          <Link to='/home'>
            <div className="logo">
              <img src={logo} alt="logo" className='lg:w-[180px] sm:w-[130px]' />
            </div>
          </Link>
        }
          
          {!user ? 
          <div className='flex items-center lg:gap-x-6 gap-x-2 sm:text-sm md:text-base'>
            <div className='flex items-center justify-center text-white'>
              <div className='-mr-6 z-10'><IoLanguage /></div>
              <select className='px-6 md:py-1 py-[3px] rounded-[4px] bg-black border-[1px] border-white/50'>
                <option value="English" className='w-full'>English</option>
                <option value="हिन्दी">हिन्दी</option>
              </select>
            </div>
            <Link to='/login'>
            <button className='text-white bg-[#e50914] md:px-4 px-3 py-1 rounded-[4px] hover:bg-[#C2050E] transition ease-linear'>Sign In</button>
            </Link>
          </div> :
          <div className='flex items-center lg:gap-x-6 gap-x-2 sm:text-sm md:text-base'>
            <img src={profileIcon} alt="profile icon" className='w-8 h-8' />
            <button onClick={handleSignOut} className='text-white bg-[#e50914] md:px-4 px-3 py-1 rounded-[4px] hover:bg-[#C2050E] transition ease-linear'>Sign Out</button>
          </div>
        }
        </div>
      </div>
    </header>
  )
}

export default Header