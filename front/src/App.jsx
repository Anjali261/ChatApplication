import React,{lazy} from 'react'
import {BrowserRouter , Routes,Route} from "react-router-dom";
import ProtectRoute from './components/auth/ProtectRoute';

const Home = lazy(  () =>import("./pages/Home"));
const Groups = lazy( () => import("./pages/Groups"));
const Chat = lazy( () => import("./pages/Chat"))
const Login = lazy(()=> import("./pages/Login"))

let user = true;

const App = () => {
  return (

<BrowserRouter>

<Routes>
  <Route element={  <ProtectRoute user={user}/>   } >
  <Route path="/" element={<Home/>} />
  <Route path="/chat/:chatId" element={<Chat/>} />
  <Route path="/group" element={<Groups/>} />

  </Route>
  <Route path="/login" element={<ProtectRoute user={!user} redirect="/">
    <Login/>
  </ProtectRoute>} />
 
</Routes>
</BrowserRouter>    )
}

export default App