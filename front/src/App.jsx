import React,{lazy} from 'react'
import {BrowserRouter , Routes,Route} from "react-router-dom";

const Home = lazy(  () =>import("./pages/Home"));
const Groups = lazy( () => import("./pages/Groups"));
const Chat = lazy( () => import("./pages/Chat"))
const Login = lazy(()=> import("./pages/Login"))
const App = () => {
  return (

<BrowserRouter>

<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/chat/:chatId" element={<Chat/>} />
  <Route path="/group" element={<Groups/>} />

</Routes>
</BrowserRouter>    )
}

export default App