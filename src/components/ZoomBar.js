import React from 'react'
import { Slider, Button } from 'antd'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
import './ZoomBar.css'

function ZoomBar({zoom, setZoom, setActiveKey}) {
    return (
        <div className='zoombar'>
            <Button type={'ghost'} onClick={() => {
                    setZoom(zoom => zoom > 0 ? zoom -= 0.5 : zoom = 0)
                    setActiveKey(`activeZoom ${zoom}`)
                }}><MinusCircleOutlined/></Button>
            <Slider min={1} max={20} onChange={(value) => {
                setZoom(value)
                setActiveKey(`activeZoom ${value}`)
            }} value={zoom} step={0.5} />
            <Button type={'ghost'} onClick={() => {
                    setZoom(zoom => zoom < 20 ? zoom += 0.5 : zoom = 20)
                    setActiveKey(`activeZoom ${zoom}`)
                }}><PlusCircleOutlined/></Button>
        </div>
    )
}

export default ZoomBar
