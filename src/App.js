import React, { useState } from 'react'
import './App.css';
import Map from './components/Map'
import Options from './components/Options'
import Footer from './components/Footer'

function App() {

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [activeKey, setActiveKey] = useState('UNA')
  const [data, setData] = useState([])
  const [otherData, setOtherData] = useState([])
  const [zoom, setZoom] = useState(10)


  return (
    <div className="App">
      <h2>Geography Assignment</h2>
      <Map zoom={zoom} otherData={otherData} longitude={longitude} latitude={latitude} activeKey={activeKey} />
      <Options zoom={zoom} setZoom={setZoom} setOtherData={setOtherData} setData={setData} setActiveKey={setActiveKey} setLatitude={setLatitude} setLongitude={setLongitude} data={data} />
      <Footer/>
    </div>
  );
}

export default App;
