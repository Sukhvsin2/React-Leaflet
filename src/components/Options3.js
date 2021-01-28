import React, {useEffect, useState} from 'react'
import { Card } from 'antd'
import './Options3.css'
import axios from 'axios'
import { Avatar } from 'antd'
import url from '../axios/base'

function Options3({longitude, latitude, setData, setLocation, setZoom, setOtherData, setActiveKey, setLongitude, setLatitude}) {
    
    const { Meta } = Card;

    const [newData, setnewData] = useState([])
    const locationWish = () => {
        axios.get(`${url.BASE_URL}wish`).then(res => {
            setnewData(res.data.data)
            setActiveKey('Wish')
            setOtherData([])
            setLocation('Wish Locations')
            setData(res.data.data)
            setZoom(11)
        }).catch(e => console.log(e));
    }

    const locationDisney = () => {
        console.log(newData[0]);
        setLatitude(newData[0].latitude)
        setLongitude(newData[0].longitude)
        console.log(latitude);
        console.log(longitude);
        setActiveKey('Chandigarh')
        setLocation('Punjab')
        setZoom(11)
    }
    const locationJapan = () => {
        console.log(newData[2]);
        console.log(latitude);        
        console.log(longitude);
        setLatitude(newData[2].latitude)
        setLongitude(newData[2].longitude)
        setActiveKey(newData[2].message)
        setLocation(newData[2].message)
        setZoom(5)
    }
    const locationCali = () => {
        console.log(newData[1]);
        console.log(latitude);        
        console.log(longitude);
        setLatitude(newData[1].latitude)
        setLongitude(newData[1].longitude)
        setActiveKey(newData[1].message)
        setLocation(newData[1].message)
        setZoom(5)
    }

    useEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
        locationWish();
    }, [])

    const disney = 'https://source.unsplash.com/1600x900/?disney,usa'
    const japan = 'https://source.unsplash.com/1600x900/?japan,snow'
    const usaLake = 'https://source.unsplash.com/1600x900/?lake,usa'


    return (
        <div className='cardOptions'>
            <Card
                onClick={()=>locationDisney()}
                hoverable
                style={{ width: 240 }}
                cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src={disney} />}
            >
                <Meta title="DisneyLand" description="Walt Disney" />
            </Card>
            <Card
                onClick={()=>locationJapan()}
                hoverable
                style={{ width: 240 }}
                cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src={japan} />}
                >
                    <Meta title="Shirakawago" description="Japan" />
            </Card>
            <Card
                onClick={()=>locationCali()}
                hoverable
                style={{ width: 240 }}
                cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src={usaLake} />}
                >
                    <Meta title="Mommath Lakes" description="California" />
            </Card>
        </div>
    )
}

export default Options3
