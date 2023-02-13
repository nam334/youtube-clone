import moment from 'moment'
import numeral from 'numeral'
import React, { useEffect } from 'react'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import img from '../../assets/female-user-icon.png' 
import './_videoMetaData.scss'
import ShowMoreText from "react-show-more-text";
import request from '../../api'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelDetails } from '../../redux/channelSlice'

const VideoMetaData = ({video:{snippet, statistics}, videoId}) => {
  
  const {channelId, channelTitle, description, title, publishedAt} = snippet
  const {viewCount, likeCount, dislikeCount} = statistics
  const dispatch = useDispatch()
  const {snippet:channelSnippet, statistics: channelStatistics} = 
  useSelector(store => store.channel.channelDetails!== null && store.channel.channelDetails)
  
  const accesstoken = useSelector(store => store.login.userData[0].accesstoken)
  

  useEffect(()=>{
    const res = fetchChannelDetails(channelId).then((val => {
     
      dispatch(getChannelDetails(val.data.items[0])) 
    }))
  },[channelId])
  const fetchChannelDetails = async(id) => {
       const res = await request('/channels',{
        params:{
          part: 'snippet, statistics, contentDetails',
          id
        }
       })
       return res
  }

  useEffect(()=> {
    const res = fetchSubscriptionDetails(channelId, accesstoken).then((val)=> {
     
    })
  },[])
  const fetchSubscriptionDetails = async (channelId, accesstoken) => {
    const {data} = await request('/subscriptions',{
      params:{
        part:'snippet',
        forChannelId: channelId,
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${accesstoken}`
      }
    })
    return data
  }
  return (
    
    <div className='videoMetaData py-2'> 
   
        <div className='videoMetaData__top'>
            <h5>{title}</h5>
            <div className='d-flex justify-content-between align-items-center py-1'>
            <span>
                {numeral(viewCount).format("0.a")} Views .
                {moment(publishedAt).fromNow()}
            </span>
         
          <div>
            <span className='mr-3'>
                <MdThumbUp size={26} />
                {numeral(likeCount).format("0.a")} 
            </span>
            <span  className='mr-3'>
            <MdThumbDown size={26} />
            {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
        <div className='videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3'>
          <img src={channelSnippet?.thumbnails?.default?.url}
           alt=''
           className='rounded-circle mr-3'/>
           <div className='d-flex flex-column'>
                <span>{channelTitle}</span>
                <span>{numeral(channelStatistics?.subscriberCount).format("0.a")} Subscribers</span>
           </div>
           <button className='btn border-0 p-2 m-2'>Subscribe</button>
        </div>

        <div className='videoMetaData__description'>
        <ShowMoreText 
        lines={3}
        more="Show more"
        less="Show less"
        anchorClass="showMoreText"
        expanded={false}
        >
         {description}
        </ShowMoreText>
        </div>
    </div>
  )
}

export default VideoMetaData