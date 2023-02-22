import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux' 
import { useNavigate } from 'react-router-dom'
import request from '../../api'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from '../../components/video/Video'
import { getVideo, getVideoByCategory } from '../../redux/videoSlice'
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton from 'react-loading-skeleton'
import SkeletonVideo from '../../components/skeletons/SkeletonVideo'

 
const HomeScreen = () => {
  const fetchedVideos = useSelector(store => store.video.videos)
  const activeCategory = useSelector(store => store.video.activeCategory)
  const nextPageToken = useSelector(store => store.video.nextPageToken)
  const loading = useSelector(store => store.video.loading)
  const accessToken = useSelector(store => store?.login?.userData[0]?.accessToken)
  const navigate = useNavigate()
  const dispatch = useDispatch()
 
  useEffect(()=>{
    const fetchedData = getPopularVideos().then(val => {
    const dataRes = val && val.data.items
    const nextPageToken = val && val.data.nextPageToken
    dispatch(getVideo({dataRes, nextPageToken}))
    })
  },[])

  useEffect(()=>{
    if(accessToken){
      navigate('/')
    }
    else navigate('/auth')
  },[accessToken, navigate])

  const getPopularVideos = async () => {
    const res = await request('/videos',{
      params:{
        part:'snippet,contentDetails,statistics',
        chart:'mostPopular',
        regionCode:'IN',
        maxResults: 20,
        pageToken: nextPageToken,
      } 
    })
   return res
  }

  const fetchNextPageData = () => {
   
    if(activeCategory === "All")
    {
      const fetchedData = getPopularVideos().then(val => {
        const dataRes = val && val.data.items
        const nextPageToken = val && val.data.nextPageToken
      
        dispatch(getVideo({dataRes, nextPageToken,activeCategory:"All"}))
        })
    }
    else{
      const get_sidebar_details = async (keyword) => {
        const {
           data: { items },
        } = await request('/search', {
           params: {
              part: 'snippet',
              maxResults:20,
              pageToken: nextPageToken,
              q: activeCategory,
              type: 'video'
           },
        })
      // console.log(items)
        dispatch(getVideoByCategory({items, activeCategory}))
     }
     get_sidebar_details()
       
    }
  }

  return (
       <Container>
        <CategoriesBar/>
        {/* <Row> */}
        <InfiniteScroll 
        dataLength={fetchedVideos && fetchedVideos.length}
        next={fetchNextPageData}
        hasMore={true} 
        loader={
          <div className='spinner-border text-danger d-block mx-auto'>

          </div>
        }
        className='row'>
          {
            !loading ? fetchedVideos &&  fetchedVideos.map((video)=> (
              
            <Col  lg={4} md={4} 
            key={video.id?.videoId || video.id}>
             <Video video={video} />
             </Col>
           
         )) : [...Array(20).map(()=> 
          <Col  lg={4} md={4}>
          <SkeletonVideo/>
         </Col>
         )]
          }
          
            </InfiniteScroll>
        {/* </Row> */}
       </Container>
  )
}

export default HomeScreen