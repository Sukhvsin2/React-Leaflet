import React,{useEffect} from 'react'
import { Card } from 'antd'
import './Options.css'
import axios from 'axios'

function Options({setData, setActiveKey, setLongitude, setLatitude, data}) {
    
    const { Meta } = Card;
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
        home();
    }, [])

    return (
        <div className='cardOptions'>
            <Card
                onClick={locationUNA}
                hoverable
                style={{ width: 240 }}
                cover={<img height={100} style={{objectFit: 'contain'}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="UNA" description="UNA" />
            </Card>
            <Card
                onClick={locationNewDelhi}
                hoverable
                style={{ width: 240 }}
                cover={<img height={100} style={{objectFit: 'contain'}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Home Town" description="New Delhi" />
            </Card>
        </div>
    )
}

export default Options
