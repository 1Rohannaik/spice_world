import { useState } from 'react'
import './App.css'
import logo from './logo.png'
import Navbar from './Navbar'
import Hero from './Hero'
import DifferentVarity from './DifferentVarity'
import Footer from './Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <img src={logo} alt="logo" className='logo' />
      <Hero />
      <DifferentVarity />
      <Footer/>
    </>
  );
}

export default App;
