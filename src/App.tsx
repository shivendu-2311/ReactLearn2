import {BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import './App.css';
import AddParams from "./Components/AddParams";
import Carousel from "./Components/Carousel";
import Donald from "./Components/Donald";
import Form from "./Components/Form";
import Home from "./Components/Home";
import Notetaking from "./Components/Notetaking";
import Obama from "./Components/Obama";
import { Sachin } from "./Components/Sachin";
import UseEffectOne from "./Components/useEffectOne";
import UseEffectThree from "./Components/useEffectThree";
import UseEffectTwo from "./Components/useEffectTwo";
import UserParams from "./Components/UserParams";

function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route path="/sachin" element={<Sachin/>}/>
 <Route path="/donald" element={<Donald/>}/>
 <Route path="/obama" element={<Obama/>}/>
  
{/* query selector implemented*/}
 <Route path="/user/:userId" element={<UserParams/>}/>
 <Route path="/:x/:operator/:y" element={<AddParams/>}/>
 <Route path="/:x///:y" element={<AddParams/>}/>
 
 {/* navigat is used for unmatched url or default url */}
 <Route path="/" element={<Home/>}/>
 <Route path="*" element={<Navigate to="/"/>}/>

 <Route path="/form" element={<Form/>}/>
 <Route path="/Notetaking" element={<Notetaking/>}/>
 <Route path="/carousel" element={<Carousel/>}/>
 <Route path="/useEffectOne" element={<UseEffectOne/>}/>
 <Route path="/useEffectTwo" element={<UseEffectTwo/>}/>
 <Route path="/useEffectThree" element={<UseEffectThree/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
