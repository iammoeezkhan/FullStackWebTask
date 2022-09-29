import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {useEffect } from 'react'
import axios from 'axios';

const URL = 'http://localhost:3001/'

function App() {
  const [message,setMessage] = useState('')
  useEffect(() => {
   axios.get(URL)
   .then((response) => {setMessage(response.data.message)}).catch((error) =>{
    setMessage(error.message)
   })
  

    
  }, [])
  
  return (
   <div><h3>This message was retrived from my node js server</h3>
   <p>{message}</p></div>
  );
}

export default App;
