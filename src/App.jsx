import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Layouts/Header/Header'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Dashboard from './pages/Dashboard/Dashboard'
import Products from './pages/Dashboard/Products'
import Categories from './pages/Dashboard/Categories'
import Brands from './pages/Dashboard/Brands'
import Tags from './pages/Dashboard/Tags'
import Settings from './pages/Dashboard/Settings'
import Overview from './pages/Dashboard/Overview'
import ListView from './pages/Dashboard/ListView'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element = {<Shop/>}></Route>
      <Route path='/cart' element = {<Cart/>}></Route>
      <Route path='/checkout' element = {<Checkout/>}></Route>
      <Route path='/dashboard' element = {<Dashboard/>}>
        <Route path='products' element={<Products/>}></Route>
        <Route path='categories' element={<Categories/>}></Route>
        <Route path='brands' element={<Brands/>}></Route>
        <Route path='tags' element={<Tags/>}></Route>
        <Route path='settings' element={<Settings/>}></Route>
        <Route path='overview' element={<Overview/>}></Route>
        <Route path='listview' element={<ListView/>}></Route>
        
      </Route>
    </Routes>
    </>
  )
}

export default App
