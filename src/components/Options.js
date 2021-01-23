import React from 'react'
import { Card } from 'antd'
import './Options.css'

function Options({setActiveKey, setLongitude, setLatitude, data}) {
    
    const { Meta } = Card;
    const locationChange = (location) => {
        console.log(data);
        setLatitude(data[location].latitude)
        setLongitude(data[location].longitude)
        setActiveKey('newDelhi')
    }
    return (
        <div className='cardOptions'>
            <Card
                onClick={locationChange('UNA')}
                hoverable
                style={{ width: 240 }}
                cover={<img height={100} style={{objectFit: 'contain'}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Home Town" description="New Delhi" />
            </Card>
            <Card
                onClick={locationChange('NewDelhi')}
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
