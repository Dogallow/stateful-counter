import {useState,useEffect} from 'react'

import './App.css';
import axios from 'axios'



function App() {
  const [value, setValue] = useState(0)
  
  const [posts, setPosts] = useState([])


  useEffect(()=>{
    getValue()
   
  },[])

  const getValue = () => {
    axios.get('http://localhost:5000/myBackend')
      .then((response) => {
        const data = response.data
        setPosts(data)
        console.log(data)
        if(data.length){

          setValue(data[data.length - 1].body)
        }
        console.log('We have received your data')
      })
      .catch(()=>{
        alert('Error retrieving data')
      })
  }
  



  const submit= (e) => {
    e.preventDefault()

    const payload ={
      body: value
    }

    axios({
      url: 'http://localhost:5000/save',
      method: 'POST',
      data: payload
    })
    .then(()=>{
      console.log('Data has been sent to the server')
    })
    .catch(()=>{
      console.log('Internal server error')
    })
  }


  
  return (
    
    <div className="App">

        <div className="save-button">
            <h2>Remember to save your progress!</h2>
            <button onClick = {submit}>Save</button>
        </div>

        <div className = "Value">
            {value}
        </div>

        <div>
            <button onClick={()=>{setValue(value + 1)}}>Increment</button>
  
            <button onClick={()=>{setValue(value - 1)}}>Decrement</button>
        
            <button onClick={()=>{setValue(value - value)}}>Reset</button>
        </div>
     

      <div>
      
      </div>

    </div>
    
  );
}

export default App;
