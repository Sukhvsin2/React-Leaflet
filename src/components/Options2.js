import React from 'react'
import { Card } from 'antd'
import './Options.css'
import axios from 'axios'
import { Avatar } from 'antd'
import url from '../axios/base'

function Options2({setLocation, setZoom, setOtherData, setData, setActiveKey, setLongitude, setLatitude, data}) {
    
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
    const locationIndia = () => {
        axios.get(`${url.BASE_URL}India`).then(res => {
            setLatitude(28.6563)
            setLongitude(77.2321)
            setOtherData([])
            setOtherData(res.data.data)
            setActiveKey('India')
            setLocation('India')
            setZoom(5)
        }).catch(e => console.log(e))
     }
    const { Meta } = Card;

    const indiaPic = 'https://source.unsplash.com/1600x900/?india,travel'
    const delhi = 'https://source.unsplash.com/1600x900/?delhi,travel'
    const punjabPic = 'https://source.unsplash.com/1600x900/?punjab,amritsar'

    return (
        <div className='cardOptions'>
            <Card
                onClick={locationIndia}
                hoverable
                style={{ width: 240 }}
                cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src={indiaPic} />}
            >
                <Meta title="India" description="India" />
            </Card>
            <Card
                        onClick={locationNewDelhi}
                        hoverable
                        style={{ width: 240 }}
                        cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src={delhi} />}
                    >
                        <Meta title="Home Town" description="New Delhi" />
                    </Card>
                    <Card
                        onClick={locationChandigarh}
                        hoverable
                        style={{ width: 240 }}
                        cover={<Avatar style={{width: '100px', height: '100px', objectFit: 'cover', margin: '10px auto'}} src={punjabPic} />}
                        >
                            <Meta title="Punjab" description="Punjab" />
                    </Card>
        </div>
    )
}

export default Options2
