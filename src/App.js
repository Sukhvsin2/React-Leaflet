import React, { useState } from 'react'
import './App.css';
import Map from './components/Map'
import Options from './components/Options'

function App() {

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [activeKey, setActiveKey] = useState('UNA')
  const [data, setData] = useState([])


  return (
    <div className="App">
      <h2>Geography Assignment</h2>
      <Options setData={setData} setActiveKey={setActiveKey} setLatitude={setLatitude} setLongitude={setLongitude} data={data} />
      <Map longitude={longitude} latitude={latitude} activeKey={activeKey} />
    </div>
  );
}

export default App;
