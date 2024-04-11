import { IoSearch } from "react-icons/io5";

const SearchPage = () => {

  return (
    <section className='w-full h-[100vh] bg-[url("/src/assets/banner.jpg")] bg-top relative'>
      <div className="w-full h-[100vh] bg-black/60"></div>
      <div className="absolute w-[60%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex justify-center items-end">
          <div className="w-[80%]">
            <label className="ml-6 text-gray-300">Search with AI</label>
            <input type="text" name="search" placeholder='What do you want to watch?' className='w-full border-[1px] border-white/70 bg-transparent rounded-l-full py-[10px] px-[22px]' />
          </div>
          <button type='submit' className='text-white bg-[#e50914] hover:bg-[#C2050E] transition ease-linear border border-1 border-white/70 py-[10px] px-[24px] rounded-r-full font-medium'><IoSearch className="w-6 h-6" /></button>
        </div>
      </div>
    </section>
  )
}

export default SearchPage