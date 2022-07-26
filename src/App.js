import { useState } from 'react';
import './App.css';
import { About } from './components/About';
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { TextForm } from './components/TextForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [mode, setMode] = useState('light') ;

  const handleModeChange = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    showAlert('Mode changed ' , mode);
  }

  const [alert, setAlert] = useState(null)
  

  const showAlert = (message ,type) => {
    setAlert(
      {
        message: message,
        type: type
      }
    )

    setTimeout(() => {
      setAlert(null)
    } , 3000)
  
    

  }

  return (
  
    <Router>
      <div className="container">
      <Navbar title="Text Utils" mode={mode} handleToggle={handleModeChange} />
      <Alert alert={alert} />
      
     
      <Routes>
        <Route path="/" element={<TextForm heading="Enter the text to analyse" showAlert={showAlert} />} /> 
          
 
        <Route path="/about"  element={<About/>} />  
       
      </Routes>
      </div>
      </Router>



  );
}

export default App;
