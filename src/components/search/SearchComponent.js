import React from 'react'
import { useNavigate } from 'react-router-dom'
import './_search.scss'
const SearchComponent = ({suggestion, setText}) => {
    const videoId = suggestion?.id?.videoId || suggestion?.id
//     const handleVideoClick = () => {
//         navigate(`/watch/${_videoId}`)
//   }
    console.log(videoId)
    const navigate = useNavigate()
    return (
        <div className='cursor-pointer hover:bg-slate-200 rounded-lg' 
        >
        <div className='suggestion flex items-center p-2 '  
        onClick={()=> {
            navigate(`/watch/${videoId}`)
            setText('') 
        }}  
         
         >
           <img src={suggestion.snippet.thumbnails.default.url} alt="" className='w-10 h-10 rounded-sm' />
           <h1 className='text-slate-500 text-sm mx-2'
            
            >
              {suggestion.snippet.title}
           </h1>
        </div>
       
      </div> 
      )
}

export default SearchComponent