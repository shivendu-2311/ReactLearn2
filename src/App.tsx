import {BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import './App.css';
import Donald from "./Components/Donald";
import Home from "./Components/Home";
import Obama from "./Components/Obama";
import { Sachin } from "./Components/Sachin";

function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route path="/sachin" element={<Sachin/>}/>
 <Route path="/donald" element={<Donald/>}/>
 <Route path="/obama" element={<Obama/>}/>
 <Route path="/" element={<Home/>}/>
 {/* navigat is used for unmatched url or default url */}
 <Route path="*" element={<Navigate to="/"/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
