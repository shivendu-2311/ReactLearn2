import { Provider } from "react-redux";
import {BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import './App.css';
import AddParams from "./Components/AddParams";
import { configureStore } from "./Components/Appstate";
import Carousel from "./Components/Carousel";
import Donald from "./Components/Donald";
//import Form from "./Components/Form";
//import Home from "./Components/Home";
import Hotels from "./Components/Hotels";
import Login from "./Components/Login";
import MaterialUiExample from "./Components/MaterialUiExample";
import Notetaking from "./Components/Notetaking";
import Obama from "./Components/Obama";
import Profile from "./Components/Profile";
import ReduxExample from "./Components/ReduxExample";
import { Sachin } from "./Components/Sachin";
import SignUp from "./Components/SignUp";
import UseEffectOne from "./Components/useEffectOne";
import UseEffectThree from "./Components/useEffectThree";
import UseEffectTwo from "./Components/useEffectTwo";
import UserParams from "./Components/UserParams";
import ContextParent from "./Components/ContextParent";
import HotelDetails from "./Components/HotelDetails";
import { ToastContainer} from "react-toastify";
//import './firebaseSetup'

function App() {
  return (
    <ContextParent>
      <ToastContainer/>
 <BrowserRouter>
  <Provider store={configureStore()}>
 <Routes>
 <Route path="/sachin" element={<Sachin/>}/>
 <Route path="/donald" element={<Donald/>}/>
 <Route path="/obama" element={<Obama/>}/>
  
{/* query selector implemented*/}
 <Route path="/user/:userId" element={<UserParams/>}/>
 <Route path="/:x/:operator/:y" element={<AddParams/>}/>
 <Route path="/:x///:y" element={<AddParams/>}/>
 
 {/* navigat is used for unmatched url or default url */}
 <Route path="/" element={<Hotels/>}/>
 <Route path="/hotel/:hotelID" element={<HotelDetails />}></Route>
 <Route path="*" element={<Navigate to="/"/>}/>


 <Route path="/Notetaking" element={<Notetaking/>}/>
 <Route path="/carousel" element={<Carousel/>}/>
 <Route path="/useEffectOne" element={<UseEffectOne/>}/>
 <Route path="/useEffectTwo" element={<UseEffectTwo/>}/>
 <Route path="/useEffectThree" element={<UseEffectThree/>}/>
 <Route path="/ReduxExample" element={<ReduxExample/>}/>
 <Route path="/Hotels" element={<Hotels/>}/>
 <Route path="/Signup" element={<SignUp/>}/>
 <Route path="/Login" element={<Login/>}/>
 <Route path="/Profile" element={<Profile/>}/>
 

 <Route path="/MaterialUiExample" element={<MaterialUiExample/>}/>
 

 </Routes>
 </Provider>
 </BrowserRouter>
 </ContextParent>
  );
}

export default App;
