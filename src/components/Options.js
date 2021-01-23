import React,{useEffect} from 'react'
import { Card } from 'antd'
import './Options.css'
import axios from 'axios'
import {Avatar} from 'antd'

function Options({setData, setActiveKey, setLongitude, setLatitude, data}) {
    
    const { Meta } = Card;

    const home = () => {
        axios.get('http://localhost:2727').then(res => {
            const obj = res.data.points[0];
            setData(obj);
            setLatitude(obj.UNA.latitude);
            setLongitude(obj.UNA.longitude)
            setActiveKey(activeKey => activeKey = 'home')
        }).catch(e=>console.log(e))
    }

    
    useEffect(() => {
        /* eslint-disable react-hooks/exhaustive-deps */
        home();
    }, [])
    
    const locationUNA = () => {
        setLatitude(data.UNA.latitude)
        setLongitude(data.UNA.longitude)
        setActiveKey('UNA')
    }
    const locationNewDelhi = () => {
        setLatitude(data.NewDelhi.latitude)
        setLongitude(data.NewDelhi.longitude)
        setActiveKey('newDelhi')
    }


    return (
        <div className='cardOptions'>
                <Card
                    onClick={locationUNA}
                    hoverable
                    style={{ width: 240 }}
                    cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="UNA" description="UNA" />
                </Card>
                <Card
                    onClick={locationNewDelhi}
                    hoverable
                    style={{ width: 240 }}
                    cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Home Town" description="New Delhi" />
                </Card>
        </div>
    )
}

export default Options
