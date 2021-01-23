import React, { useState } from 'react'
import './App.css';
import Map from './components/Map'
import Options from './components/Options'
import axios from 'axios'

function App() {

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [activeKey, setActiveKey] = useState('initial')
  const [data, setData] = useState([])

  const home = () => {
      axios.get('http://localhost:2727').then(res => {
            const obj = res.data.points[0];
        setData(obj);
        console.log('check obj;m', res);
            setLatitude(obj.UNA.latitude);
            setLongitude(obj.UNA.longitude)
            setActiveKey(activeKey => activeKey = 'home')
        }).catch(e=>console.log(e))
    }

  return (
    <div className="App">
      <h2>Geography Assignment</h2>
      <Options setActiveKey={setActiveKey} setLatitude={setLatitude} setLongitude={setLongitude} data={data} />
      <Map runFunction={home} longitude={longitude} latitude={latitude} setLatitude={setLatitude} setLongitude={setLongitude} activeKey={activeKey} setActiveKey={setActiveKey} />
    </div>
  );
}

export default App;
