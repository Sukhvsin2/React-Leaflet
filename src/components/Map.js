import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Icon from '../Assets/user_location.svg'
import MyLoc from "../Assets/location.svg"

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
        <MapContainer key={`activeKey ${activeKey}`} style={{width: '80%', height: '500px', margin: '25px auto',}} center={position} zoom={zoom} scrollWheelZoom={false}>
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
    )
}

export default Map
