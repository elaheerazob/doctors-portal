import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shares/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shares/Footer';

function App() {
  return (
    <div >
   <Navbar/>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='about' element={<About/>}></Route>
     <Route path='login' element={<Login/>}></Route>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
