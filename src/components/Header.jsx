import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import { IoLanguage } from "react-icons/io5";

const Header = () => {
  return (
    <header className='w-full absolute z-50 py-6 bg-gradient-to-b from-black/80'>
      <div className="nav border-1 border-white w-[1080px] mx-auto my-0">
        <div className='flex justify-between items-center'>
          <Link to='/'>
            <div className="logo">
              <img src={logo} alt="logo" className='w-[200px]' />
            </div>
          </Link>
          
          <div className='flex items-center gap-x-6'>
            <div className='flex items-center justify-center text-white'>
              <div className='-mr-6 z-10'><IoLanguage /></div>
              <select className='px-6 py-1 rounded-[4px] bg-black border-[1px] border-white/50'>
                <option value="English" className='w-full'>English</option>
                <option value="हिन्दी">हिन्दी</option>
              </select>
            </div>
            <Link to='/login'>
            <button className='text-white bg-[#e50914] px-4 py-1 rounded-md hover:bg-[#C2050E] transition ease-linear'>Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header