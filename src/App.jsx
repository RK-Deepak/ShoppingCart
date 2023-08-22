import React from 'react'
import { Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
     <Navbar/>
     <div className='w-[90%] max-w-[960px] mx-auto flex min-h-screen items-center justify-center'>
     <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/cart' element={<CartPage/>}/>

     </Routes>
     </div>
    </div>
  )
};

export default App;
