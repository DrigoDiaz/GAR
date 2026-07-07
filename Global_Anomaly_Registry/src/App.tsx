import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage.tsx';
import HomePage from './pages/HomePage.tsx';
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import { useState } from "react";
import './pages/LoginPage.tsx';

function App() {
  const [userID, setUser] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage approveUser={setUser}/>}/>
        <Route element={<ProtectedRoute isUser={userID}/>}>
           <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
