import './App.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './component/Home/Home';
import DogsPage from './component/DogsPage/DogsPage';
import Cart from './component/Cart/Cart';
import Navbar from './component/Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from "axios"
import {CartContext} from "./Contexts/CartContext"
function App() {
  const [allDogs,setAllDogs]= useState([]);
  const [myCart,setAddCart]= useState([])
  const [total,setTotal]= useState(0);
  const [choose,setChoose]= useState([{check:false}])

  useEffect(()=>{
    async function getData(){
      const res = await axios.get("/v1/dogs")
      return res;
    }
    getData().then((res)=> setAllDogs(res.data))
    getData().catch((err)=>console.log(err))
  },[])
  return (
    
    <CartContext.Provider  value={{myCart,setAddCart,total,setTotal,setChoose,choose}}>

    <Router>

      <Navbar/>
        <div className="page-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dogs" element={<DogsPage allDogs={allDogs} />}></Route>
          <Route path="/checkout" element={<Cart  />}></Route>        
        </Routes>
        </div>
      </Router>
    </CartContext.Provider>
    
  );
}

export default App;
