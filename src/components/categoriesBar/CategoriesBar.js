import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import request from '../../api'
import { getVideoByCategory } from '../../redux/videoSlice'
import './_categoriesBar.scss'
const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native', 
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
 ]
const CategoriesBar = () => {
    const [activeElement, setActiveElement] = useState("All")
    const nextPageToken = useSelector(store => store.video.nextPageToken)
    const dispatch = useDispatch()
    // useEffect(()=>{
    //    const fetchedData = get_sidebar_details().then(val => {
    //    //    const dataRes = val && val.data.items
    //    // const nextPageToken = val && val.data.nextPageToken
    //    // dispatch(getVideo({dataRes, nextPageToken}))
    //    })
     
      
    //  },[])
 
   


    const handleClick = (value) => {
        setActiveElement(value)
        const get_sidebar_details = async (keyword) => {
            const {
               data: { items },
            } = await request('/search', {
               params: {
                  part: 'snippet',
                  maxResults:20,
                  pageToken: nextPageToken,
                  q: value,
                  type: 'video'
               },
            })
          
            dispatch(getVideoByCategory({items, value}))
         }
         get_sidebar_details()
    }
  return (
    <div className='categoriesBar'>
        {
            keywords.map((value,i)=>(
            <span  
            onClick={()=> handleClick(value)}
            key={value.id?.videoId || value.id} 
            className={activeElement === value ? 'active' : ''}
            >
                {value}
            </span>
            )
           )
        }
    </div>
  )
}

export default CategoriesBar