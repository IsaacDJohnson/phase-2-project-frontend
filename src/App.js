import './App.css';
import { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SubmissionForm from './components/SubmissionForm';
import Home from "./components/Home"
import Library from "./components/Library"

function App() {

  const [data, setData] = useState([]);
  const navigate = useNavigate();

//fetch JSON data on page load

  useEffect(()=>{
    navigate("/")
    fetch("http://localhost:4000/data")
    .then(r => r.json())  
    .then(data => setData(data))
  }, [])

  return (
    <div>
      <header className="header">
        <Navbar />
      </header>
        <Outlet context={{data: data, setData: setData}}/>
    </div>
  );
}

export default App;
