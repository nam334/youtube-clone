import React, { useEffect, useState} from "react";
import { useSelector } from 'react-redux' 
import SearchComponent from "./SearchComponent";
import './_search.scss'
const Search = () => {
    const [text, setText] = useState('')
    const [suggestion, setSuggestion] = useState([])
    const videos = useSelector(store => store.video.videos)
    const searchVideos = (text) => {
        if(text.length)
        videos && setSuggestion(videos.filter((video) => video?.snippet?.title.toLowerCase().includes(text)))
        else setSuggestion([])
    }
    useEffect(()=> {
       searchVideos(text)
    },[text])
    console.log(suggestion)
    return (
        <>
         <form>
            <input type='text'  
            value={text} 
            onChange={(e)=> setText(e.target.value)}
            placeholder="Search..." />
            <div className='test rounded-lg shadow-2xl bg-slate-50'>
            {
            suggestion && suggestion.map((suggestion,i)=>
            <SearchComponent suggestion={suggestion} 
            //suggestionHandler={suggestionHandler} 
             />
           
            )} 
           
           </div>
          
            {/* <button type='submit'>
                <AiOutlineSearch size={22} />
            </button> */}
        </form>
        </>
    )
}

export default Search