import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Home from './pages/home/Home';
import Footer from './Components/footer/Footer';
function App() {
  return(
    <>
    <div className='App'> 
      <Navbar></Navbar>
      <Routes> 
        <Route path='/' element= {<Home/>}/>
      </Routes>
    </div>
    <Footer/>
    </> 
  )
} 


export default App;
