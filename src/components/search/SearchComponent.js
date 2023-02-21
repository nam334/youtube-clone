import React from 'react'
import './_search.scss'
const SearchComponent = ({suggestion}) => {
    console.log(suggestion)
    return (
        <div className='cursor-pointer hover:bg-slate-200 rounded-lg' 
        >
        <div className='suggestion flex items-center p-2 '  
        // onClick={()=> {
        //   suggestionHandler(suggestion.title)
        //   dispatch(fetchSearchResult(suggestion))
        // }}  
         
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