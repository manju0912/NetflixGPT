import { IoLanguage } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="py-8 border-t-8 border-[#2d2d2d]">
      <div className="xl:w-[1080px] md:w-[720px] sm:w-[600px] sm:px-8 mx-auto font-light text-white/80">
        <p className="my-6 text-lg sm:text-base">Questions? Call <span className="underline">000-800-919-1694</span></p>
        <div className='grid lg:grid-cols-4 grid-cols-2 sm:text-sm text-base'>
          <ul className="underline">
            <li className="mb-2">FAQ</li>
            <li className="mb-2">Investor Relations</li>
            <li className="mb-2">Privacy</li>
            <li className="mb-2">Speed Test</li>
          </ul>

          <ul className="underline">
            <li className="mb-2">Help Centre</li>
            <li className="mb-2">Jobs</li>
            <li className="mb-2">Cookie Preferences</li>
            <li className="mb-2">Legal Notices</li>
          </ul>

          <ul className="underline">
            <li className="mb-2">Account</li>
            <li className="mb-2">Ways to Watch</li>
            <li className="mb-2">Corporate Information</li>
            <li className="mb-2">Only on Netflix</li>
          </ul>

          <ul className="underline">
            <li className="mb-2">Media Centre</li>
            <li className="mb-2">Terms of Use</li>
            <li className="mb-2">Contact Us</li>
          </ul>
        </div>
        <div className='flex items-center justify-start ml-2 my-8 text-white'>
          <div className='-mr-6 z-10'><IoLanguage /></div>
          <select className='px-6 py-1 rounded-[4px] bg-black border-[1px] border-white/50'>
            <option value="English" className='w-full'>English</option>
            <option value="हिन्दी">हिन्दी</option>
          </select>
        </div>
      </div>
    </footer>
  )
}

export default Footer