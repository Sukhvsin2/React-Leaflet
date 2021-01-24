import React from 'react'
import { Card } from 'antd'
import './Options.css'
import axios from 'axios'
import { Avatar } from 'antd'
import url from '../axios/base'

function Options2({setLocation, zoom, setZoom, setOtherData, setData, setActiveKey, setLongitude, setLatitude, data}) {
    
    const locationNewDelhi = () => {
        setLatitude(data.NewDelhi.latitude)
        setLongitude(data.NewDelhi.longitude)
        setActiveKey('newDelhi')
        setOtherData([])
        setLocation('New Delhi')
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
    const { Meta } = Card;

    return (
        <div className='cardOptions'>
            <Card
                        onClick={locationNewDelhi}
                        hoverable
                        style={{ width: 240 }}
                        cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Home Town" description="New Delhi" />
                    </Card>
                    <Card
                        onClick={locationChandigarh}
                        hoverable
                        style={{ width: 240 }}
                        cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Punjab" description="Punjab" />
                    </Card>
        </div>
    )
}

export default Options2
