import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./pages/LoginPage";
import CrmPage from "./pages/CrmPage";

import './App.css'

function App() {
  let LogType = Boolean(localStorage.getItem('logs'));
  const [Log, setLog] = useState(LogType)

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={Log ? <CrmPage /> : <Navigate to='/login' />} />
          <Route path="/login" element={<LoginPage setLog={setLog} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
