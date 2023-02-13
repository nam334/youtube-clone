import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Comments from '../../components/comments/Comments'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import './_watchScreen.scss'
import { useParams } from 'react-router-dom';
import request from '../../api'
import { useDispatch, useSelector } from 'react-redux'
import { addVideo } from '../../redux/selectedvideoSlice'
import ChatScreen from '../liveChat/ChatScreen'

const WatchScreen = () => { 
  const {id} = useParams()
  const dispatch = useDispatch()
  const {video, loading} = useSelector((store) => store.selectedVideo)

  useEffect(()=> { 
    const result  = getVideoById(id).then((val)=> {
      dispatch(addVideo(val.items[0]))
     
    })

    getVideoById(id)
  },[id])
  const getVideoById = async(id) => {
      const {data} = await request('/videos',{
        params:{
          part:'snippet, statistics',
          id: id,
        },
      }) 
   
      return data 
      
  }
  
  return (
     <Row>
        <Col lg={8}>
          <div className='watchScreen__player'>
            <iframe src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen 
            width="100%"
            height="100%"
            >
            </iframe>
          </div>
          {
            !loading ? video && <VideoMetaData  video={video} videoId={id} /> : <h6>Loading...</h6>
          }
         
          <Comments videoId={id}  />
        </Col>
        <Col lg={4}>
            {/* {
                [...Array(10)].map(()=> <VideoHorizontal/>)
            } */}
          <ChatScreen/>
        </Col>
     </Row>
  )
}

export default WatchScreen