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
    
    const locationUNA = () => {
        setLatitude(data.UNA.latitude)
        setLongitude(data.UNA.longitude)
        setActiveKey('UNA')
        setOtherData([])
        setLocation('UNA')
        setZoom(11)
    }
    
    const locationIndia = () => {
        axios.get(`${url.BASE_URL}India`).then(res => {
            setLatitude(28.6563)
            setLongitude(77.2321)
            setOtherData([])
            setOtherData(res.data.data)
            setActiveKey('India')
            setLocation('India')
            setZoom(7)
        }).catch(e => console.log(e))
     }


    return (
        <div>

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
                        onClick={locationIndia}
                        hoverable
                        style={{ width: 240 }}
                        cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="India" description="India" />
                    </Card>
            </div>
        </div>
    )
}

export default Options
