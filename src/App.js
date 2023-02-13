import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import {Container} from "react-bootstrap"
import HomeScreen from './screen/homescreen/HomeScreen'
import './_app.scss'
import LoginScreen from './screen/loginScreen/LoginScreen'
import {createBrowserRouter,RouterProvider, useNavigate} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { useSelector } from 'react-redux'
import { Route, Routes } from "react-router-dom"
import WatchScreen from './screen/watchScreen/WatchScreen'



const Layout = ({children}) => {
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
      setSidebar(!sidebar)
  }
  return (
    <>
    <Header handleSidebar={handleSidebar} />
    <div className='app__container border border-info'>
        <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />
        <Container fluid className='app_main border border-warning'>
            {children}
        </Container>
    </div>
    </>
  )
}

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element:  <Layout><HomeScreen /></Layout>,
//   },
//   {
//     path:"/auth",
//     element:<LoginScreen/>
//   },
//   {
//     path:"/search",
//     element: <Layout>Search</Layout>
//   }
// ]);
 

const App = () => {
  const {accessToken} = useSelector(store => store.login.userData && store.login.userData)
  //console.log( userData && userData,userData[0])
  const navigate = useNavigate()

  // useEffect(()=>{
  //   if(!accessToken){
  //     console.log('hi') 
  //     navigate('/auth')
  //   }
   
  // },[accessToken])

  return (
    <>
    {/* <Provider store={store}>    
    <App/>
    </Provider> */} 
    {/*  */}
    <Routes>
      <Route path="/" element={<Layout><HomeScreen/></Layout>} />
      <Route path="/auth" element={<LoginScreen/>} />
      <Route path='/search' element={<Layout>Search</Layout>} />
      <Route  path='/watch/:id' element={<Layout><WatchScreen/></Layout>} />
    </Routes>
    </>
  )
}

export default App