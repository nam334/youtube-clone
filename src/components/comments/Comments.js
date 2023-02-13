import React, { useEffect, useState } from 'react'
import './_comments.scss'
import img from '../../assets/female-user-icon.png'
import Comment from '../comment/Comment'
import request from '../../api'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addComment, fetchComment } from '../../redux/commentSlice'
import {commentsData } from '../../comments'


const Comments = ({videoId}) => {

  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const accesstoken = useSelector(store => store.login.userData[0].accesstoken)


  const handleComment = (e) => {

        e.preventDefault()
        if(text.length === 0) return
        dispatch(addComments({videoId, text}))
  } 

  useEffect(()=> {
    fetchComments(videoId).then(val => 
      dispatch(fetchComment(val.data.items)))
  },[videoId])

  const comments = useSelector(store => store.comment.comments)
 
 // const _comments = comments?.map(comment => comment?.snippet?.topLevelComment?.snippet)

  const fetchComments = async (id) => {
    const res = await request('/commentThreads', {
      params:{
        part:'snippet',
        videoId:id
      }
    })
    return res
  }

  const addComments = async(id, text)=> {

    const obj = {
      snippet: {
        videoId:id,
        topLevelComment:{
          snippet:{
            textOriginal: text,                                         
          }
        }
      }
    }

    

    await request.post('/commentThreads', {
      params:{
        part:'snippet'
      },
      headers: {
        Authorization: `Bearer ${accesstoken}`
      }
    })
  }


  const renderComments = (commentsData) => 
    commentsData?.map((comment, i)=>( 
     <>
      <Comment comment={comment} key={i} />
      {comment?.replies && <div className='nestedComments'> {renderComments(comment?.replies)} </div>}
     </>
  ))


  return (
    <div className='comments'>
      <p>1234 Comments</p>
      <div className='comments__form d-flex w-100 my-2'>
        <img 
           src={img}
           alt=''
           className='rounded-circle mr-3'
        />
        <form className='d-flex flex-grow-1' onSubmit={handleComment}>
          <input  
          type='text'
          className='flex-grow-1'
          placeholder='Write a comment...'
          value={text}
          onChange={(e)=> setText(e.target.value)}
          />
          <button className='border-0 p-2'>Comment</button>
        </form>

      </div>
      <div className='comments__list'>
      {
        renderComments(commentsData)
      }
      </div>
    </div>
  )
}

export default Comments 