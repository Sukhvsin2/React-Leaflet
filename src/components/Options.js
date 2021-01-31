import React,{useEffect} from 'react'
import { Card } from 'antd'
import './Options.css'
import axios from 'axios'
import { Avatar } from 'antd'
import url from '../axios/base'

function Options({setLocation, zoom, setZoom, setOtherData, setData, setActiveKey, setLongitude, setLatitude, data}) {
    
    const { Meta } = Card;

    const home = () => {
        axios.get(url.BASE_URL).then(res => {
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

    const lifeMap = () => {
        axios.get(`${url.BASE_URL}LifeMap`).then(res => {
            console.log('res ', res);
            const data = res.data.data;
            setLatitude(28.6563)
            setLongitude(77.2321)
            setActiveKey('LIFEMAP')
            setOtherData([])
            setOtherData(data)
            setLocation('LIFE MAP')
            setZoom(3)
        }).catch(e => console.log(e))
    }
    
    const locationUNA = () => {
        home();
        setLatitude(data.UNA.latitude)
        setLongitude(data.UNA.longitude)
        setActiveKey('UNA')
        setOtherData([])
        setLocation('UNA')
        setZoom(11)
    }
    const locationChandigarh = () => {
        axios.get(`${url.BASE_URL}Chandigarh`).then(res => {
            setLatitude(30.7499)
            setLongitude(76.6411)
            setOtherData([])
            setOtherData(res.data.data)
            setActiveKey('Chandigarh')
            setLocation('Punjab')
            setZoom(11)
        }).catch(e => console.log(e))
    }

    const unaPic = 'https://source.unsplash.com/1600x900/?institution,college'
    const chdPic = 'https://source.unsplash.com/1600x900/?punjab,school'
    const lifePic = 'https://source.unsplash.com/1600x900/?life,flowers'

    return (
        <div>

            <div className='cardOptions'>
                    <Card
                        onClick={locationUNA}
                        hoverable
                        style={{ width: 240 }}
                        cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src={unaPic} />}
                        >
                        <Meta title="UNA" description="UNA" />
                    </Card>
                    <Card
                        onClick={locationChandigarh}
                        hoverable
                        style={{ width: 240 }}
                        cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src={chdPic} />}
                        >
                        <Meta title="Schooling" description="Chandigarh University" />
                    </Card>
                    <Card
                        onClick={lifeMap}
                        hoverable
                        style={{ width: 240 }}
                        cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src={lifePic} />}
                    >
                        <Meta title="Life Map" description="LifeMap" />
                    </Card>
            </div>
        </div>
    )
}

export default Options
