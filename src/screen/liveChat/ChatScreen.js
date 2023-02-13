import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { randomNameGenerator, getRandomSentence } from '../../chatHelper'
import { addChat } from '../../redux/chatSlice'
import './chatScreen.scss'
import femaleImages from '../../assets/female-user-2.png'

const ChatScreen = () => {
    const chatData = useSelector(store => store.chat.chatData)
    const [text, setText] = useState('')
   
    const dispatch = useDispatch()
    useEffect(()=> {
        const interval = setInterval(()=> {
            // console.log(randomNameGenerator(8) + ":" + getRandomSentence())
            dispatch(addChat(randomNameGenerator(8) + " : " + getRandomSentence()))
            
        },1000)
        return ()=>clearInterval(interval)
    },[])
  return (
    <>
      <h5 className='chatHeader'>Top Chat</h5>
    <div  className='chatScreen'>
      
        {
            chatData && chatData.map((chat)=> (
                <>
               
                    <div className='chatScreen__text' key={chat}>{chat}</div>
                </>
            ))
        }
       
    </div>
    <form onSubmit={(e)=> {
        e.preventDefault()
        console.log(text)
        dispatch(addChat(randomNameGenerator(8) + ":" + text))
        setText('')
    }}>
      <input type='text' 
        className='chatFormInput'
        onChange={(e)=> setText(e.target.value)} placeholder='Say something' value={text}/>
    </form>
    </>
  )
}

export default ChatScreen 