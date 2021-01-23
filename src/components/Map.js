import React, {useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Icon from '../Assets/user_location.svg'

function Map({runFunction, longitude, latitude, activeKey}) {
    
    var position = [latitude, longitude]
    const myIcon = L.icon({
        iconUrl: Icon,
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    })

    useEffect(() => {
        runFunction();
    }, [])

    

    return (
        <MapContainer key={`activeKey ${activeKey}`} style={{width: '80%', height: '500px', margin: '25px auto',}} center={position} zoom={30} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={myIcon} position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
