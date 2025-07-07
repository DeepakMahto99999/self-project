import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import MyOrders from './pages/MyOrders'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import PageNotFound from './pages/pageNotFound'  
import Cart from './pages/Cart'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Collections' element={<Collection />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/MyOrders' element={<MyOrders />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<PageNotFound />} /> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
