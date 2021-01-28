import React, {useEffect, useState} from 'react'
import { Card } from 'antd'
import './Options3.css'
import axios from 'axios'
import { Avatar } from 'antd'
import url from '../axios/base'

function Options3({setLocation, setZoom, setOtherData, setActiveKey, setLongitude, setLatitude}) {
    
    const { Meta } = Card;

    const [newData, setnewData] = useState([])
    const locationWish = () => {
        axios.get(`${url.BASE_URL}wish`).then(res => {
            setnewData(res.data.data)
            setActiveKey('Wish')
            setOtherData([])
            setLocation('Wish Locations')
            setZoom(11)
        }).catch(e => console.log(e));
    }

    const locationDisney = () => {
        console.log(newData[0]);
        setLatitude(newData[0].latitude)
        setLongitude(newData[0].longitude)
        setActiveKey(newData[0].message)
        setLocation(newData[0].message)
        setZoom(5)
    }
    const locationJapan = () => {
        console.log(newData);
        setLatitude(newData[2].latitude)
        setLongitude(newData[2].longitude)
        setActiveKey(newData[2].message)
        setLocation(newData[2].message)
        setZoom(5)
    }
    const locationCali = () => {
        console.log(newData);
        setLatitude(newData[1].latitude)
        setLongitude(newData[1].longitude)
        setActiveKey(newData[1].message)
        setLocation(newData[1].message)
        setZoom(5)
    }

    useEffect(() => {
        locationWish();
    }, [])

    return (
        <div className='cardOptions'>
            <Card
                onClick={()=>locationDisney()}
                hoverable
                style={{ width: 240 }}
                cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Home Town" description="New Delhi" />
            </Card>
            <Card
                onClick={()=>locationJapan()}
                hoverable
                style={{ width: 240 }}
                cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Shirakawago" description="Japan" />
            </Card>
            <Card
                onClick={()=>locationCali()}
                hoverable
                style={{ width: 240 }}
                cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Mommath Lakes" description="California" />
            </Card>
        </div>
    )
}

export default Options3
