
import React, { useEffect, useState } from 'react'
import Home from '../components/Home';
import Opening from './components/Opening';



const App = () => {
  const [isVisible,setIsVisible] = useState(true);

  useEffect(() =>{
    const timer = setTimeout(() =>{
      setIsVisible(false);
    },4000)

    return ()=> clearTimeout(timer);
  },[])

  return (
    <>
    {isVisible && <Opening/>}
    <Home/>
    </>
  )
}

export default App
