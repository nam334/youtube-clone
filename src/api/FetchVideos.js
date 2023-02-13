import request from "../api"

export const getPopularVideos = async () => {
    const res = await request('/videos',{
      params:{
        part:'snippet,contentDetails,statistics',
        chart:'mostPopular',
        regionCode:'IN',
        maxResults: 20,
        pageToken:'',
      } 
    })
   return res
  }
