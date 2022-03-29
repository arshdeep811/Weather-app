import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Form from './Components/Form/Form'
import Information from './Components/Information/Information';
import axios from 'axios'
// import Nodata from './Components/NoData/NoData'
import Navbar from './Components/Navbar/Nav'

function App() {
    const [state,setState] = useState({})

    const getDataFromServer = (city)=>{
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11702baf246d607b706d12640ac7606f`)
       .then((res)=>{
         console.log(res.data)
         setState(res.data)
       },(error)=>{
         console.log("Error Message",error.message)
         alert("Entered City data not found")
       })
    }

  return (
    <div className="App">
      <Navbar />
     <Form getDataFromServer={getDataFromServer} />
     {Object.keys(state).length===0?<div></div> :<Information info={state} />}
    </div>
  );
}

export default App;
