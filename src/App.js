import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen'
import './app.scss'
import { useEffect, useState } from 'react';
import LoginScreen from './screens/loginScreen/LoginScreen';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import WatchScreen from './screens/watchScreen/WatchScreen';


export const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar(value => !value)

  return (
     <>
        <Header handleToggleSidebar={handleToggleSidebar} />
        <div className='app_container'>
           <Sidebar
              sidebar={sidebar}
              handleToggleSidebar={handleToggleSidebar}
           />
           <Container fluid className='app__main '>
              {children}
           </Container>
        </div>
     </>
  )
}

const App=()=> {
   // const navigate=useNavigate()
   // const{accessToken,loading}=useSelector(state=>state.auth);

//    useEffect(()=>{
//       if(!loading 
//          // && !accessToken
//          ){
//          navigate("/auth")
//       }
// },[accessToken,loading,navigate])

  return (
    <Routes>
         <Route path='/' exact element={<Layout><HomeScreen /></Layout>} />
         <Route path='/auth' element={<LoginScreen/>}/>
         
         <Route path='*' element={<Navigate to='/' replace/>} />
         <Route path='/watch/:id' exact element={<Layout><WatchScreen /></Layout>} />
      </Routes>
  );
}

export default App;
