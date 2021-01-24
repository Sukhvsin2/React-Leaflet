import React from 'react'
import Options from './Options'
import { Tabs } from 'antd'
import './Tabs.css'
import ZoomBar from "./ZoomBar"
import Options2 from './Options2';

function Tab({setLocation, zoom, setZoom, setOtherData, setData, setActiveKey, setLongitude, setLatitude, data}) {

    const { TabPane } = Tabs;

    return (
        <div>
            <ZoomBar zoom={zoom} setActiveKey={setActiveKey} setZoom={setZoom} />
            <Tabs>
                <TabPane tab="US" key={1}>
                    <Options setLocation={setLocation} zoom={zoom} setZoom={setZoom} setOtherData={setOtherData} setData={setData} setActiveKey={setActiveKey} setLatitude={setLatitude} setLongitude={setLongitude} data={data}/>
                </TabPane>
                <TabPane tab="India" key={2}>
                    <Options2 setLocation={setLocation} zoom={zoom} setZoom={setZoom} setOtherData={setOtherData} setData={setData} setActiveKey={setActiveKey} setLatitude={setLatitude} setLongitude={setLongitude} data={data}/>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Tab
