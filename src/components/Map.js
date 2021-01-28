import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Icon from '../Assets/user_location.svg'
import MyLoc from "../Assets/location.svg"
import './Map.css'

function Map({location, zoom, otherData, longitude, latitude, activeKey}) {
    
    var position = [latitude, longitude]

    const myIcon = L.icon({
        iconUrl: Icon,
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    })

    const myLocation = L.icon({
        iconUrl: MyLoc,
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    })


    return (
        <div className='mapContainer'>
            <MapContainer key={`activeKey ${activeKey}`} style={{height: '500px', margin: '25px auto',}} center={position} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker key={'default'} icon={myLocation} position={position}>
                    <Popup>
                        {location}
                    </Popup>
                </Marker>
                {
                    otherData.map(obj => (
                        <Marker key={`key ${obj.latitude}`} icon={myIcon} position={[obj.latitude, obj.longitude]}>
                            <Popup>
                                {obj.message}
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
            <div className='legend'>
                <div className='row'>
                    <img className='locIcon' src={MyLoc} alt='location' />
                    <span>Location</span>
                </div>
                <div className='row'>
                    <img className='locIcon' src={Icon} alt='Events' />
                    <span>Events</span>
                </div>
                
            </div>
        </div>
    )
}

export default Map
