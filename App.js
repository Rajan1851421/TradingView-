import { BrowserRouter as Router, Form, Routes } from "react-router-dom";
import { useState, useMemo } from "react";

import { Route } from "react-router-dom";
import './App.css';

import Indices from "./components/market_summery/Indices.jsx"
import Navbar from './components/Navbar';
import Alert from "./components/market_summery/Alert";
import StockNews from "./components/market_summery/StockNews";
import Screener from "./components/market_summery/Screener";
import IndicesAlert from "./components/market_summery/IndicesAlert";
import StockAlert from "./components/market_summery/StockAlert";
import Hotlist from "./components/market_summery/Hotlist";
import Ecalnder from "./components/market_summery/Ecalnder";
import MyIdeaGet from "./components/market_summery/MyIdeaGet";
import Spinner from "./components/market_summery/Spinner";
import ChatPost from "./components/market_summery/ChatPostGet";
import MyIdeaaPost from "./components/market_summery/MyIdeaPost";
import Forex from "./components/market_summery/Forex";
import Future from "./components/market_summery/Future";
import Stock from './components/market_summery/Stock'
import Crypto from './components/market_summery/Crypto'





function App() {
  //  const val = localStorage.getItem('params')
  //   const newIndices = useMemo(() => <Indices/> ,[]);


  return (
    <>
     <Navbar />


    <Routes>
    <Route path='/' element={<Crypto/>}/>
      <Route path='/myideaget' element={<MyIdeaGet/>}/>
      <Route path='/myideapost' element={<MyIdeaaPost/> }/>
      <Route path="/screener" element={ <Screener />}/>
      <Route path="/chatpost" element={<ChatPost/>}/>
      <Route path='/indices' element={ <Indices />}/>
      <Route path="/forex" element={<Forex/> }/>
      <Route path='/future' element={ <Future/> }/>
      <Route path='/stock' element={ <Stock/> }/>
      <Route path="/stocknews" element={<StockNews/> }/>
      <Route path='/indicesalert' element={<IndicesAlert /> }/>
      <Route path='/stockalert' element={<StockAlert /> }/>
      <Route path='/alert' element={<Alert/>  }/>
      <Route path='/hotlist' element={<Hotlist/>  }/>
      <Route path='/eclander' element={<Ecalnder/>  }/>
    </Routes> 







 
      {/* <MyIdeaGet/> */}
      {/* <MyIdeaaPost/> */}
      {/* <Screener />      */}
      {/* <Spinner/> */}
      {/* <ChatPost/> */}





      {/* <Indices /> */}
      {/* <Forex/> */}
      {/* <Future/>    */}
      {/* <Stock/> */}
     {/* <Crypto/> */}
      
    

      {/* <StockNews/> */}
      {/* <IndicesAlert /> */}
      {/* <StockAlert /> */}
      {/* <Alert/> */}

      {/* <Hotlist/> */}
      {/* <Ecalnder /> */}
    </>

  );
}

export default App;
