import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState('test');

  const getData = async () => {
    try {
      const {data} = await axios.get('http://localhost:8000/users')
      console.log(data);
      
      setData(data);
    }
    catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>

      <h1>
        {data}
      </h1>

    </>
  )
}

export default App
