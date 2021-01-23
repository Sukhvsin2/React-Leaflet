import React, { useState } from 'react'
import './App.css';
import Map from './components/Map'
import Options from './components/Options'

function App() {

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [activeKey, setActiveKey] = useState('UNA')
  const [data, setData] = useState([])
  const [otherData, setOtherData] = useState([{'longitude': 0, 'latitude': 0}])


  return (
    <div className="App">
      <h2>Geography Assignment</h2>
      <Options otherData={otherData} setOtherData={setOtherData} setData={setData} setActiveKey={setActiveKey} setLatitude={setLatitude} setLongitude={setLongitude} data={data} />
      <Map otherData={otherData} longitude={longitude} latitude={latitude} activeKey={activeKey} />
        <div>
          {
          otherData.map(obj => (
            <div>
              {obj.latitude}
              </div>
            ))
          }  
        </div>
    </div>
  );
}

export default App;
