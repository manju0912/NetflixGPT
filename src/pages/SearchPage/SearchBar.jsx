import { useRef } from "react";
import { useDispatch } from "react-redux";
import genAI from "../../utils/genai";
import { IoSearch } from "react-icons/io5";
import {API_OPTIONS} from '../../utils/constants'
import { addSearchedMovieResult } from "../../store/genAiSlice";
import { WiStars } from "react-icons/wi";

const SearchBar = () => {

  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchedMovies = async (movie) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleGenAISearchClick = async () => {

      // API call to GenAI to get the movie results
     
      const model = genAI.getGenerativeModel({
        model: "gemini-pro"
      });

      const prompt = "Act as a movie recommendation system and suggest some top rated movies for the query" +" "+ searchText.current.value + ". Only give me names of top 15 highest rated movies separated by comma like the given example: 'Titanic, Friends, The Notebook, Alien, Arjun Reddy'.";

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      console.log(text);

      const movies = text.split(',');

      const promiseArray = movies.map((movie) => searchedMovies(movie));

      const searchResult = await Promise.all(promiseArray);

      dispatch(addSearchedMovieResult({movieName: movies, searchResult: searchResult}));
  }

  return (
    <section className='w-full h-[70vh] flex flex-col justify-center items-center bg-[url("/src/assets/banner.jpg")] bg-cover bg-no-repeat relative'>
      <div className="absolute w-full h-full bg-black/65"></div>
      <div className="absolute w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center items-end">
          <div className="w-[80%]">
            <label className="ml-6 font-medium flex items-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-200">Search with Gemini AI <WiStars className="w-8 h-8 text-violet-500" /></label>
            <input ref={searchText} type="text" name="search" placeholder='What do you want to watch?' className='w-full border-[1px] border-white/70 bg-transparent rounded-l-full py-[10px] px-[22px]' />
          </div>
          <button type='submit' className='text-white bg-[#e50914] hover:bg-[#C2050E] transition ease-linear border border-1 border-white/70 py-[10px] px-[24px] rounded-r-full font-medium' onSubmit={(e) => e.preventDefault()} onClick={handleGenAISearchClick}><IoSearch className="w-6 h-6" /></button>
        </div>
      </div>
    </section>
  )
}

export default SearchBar