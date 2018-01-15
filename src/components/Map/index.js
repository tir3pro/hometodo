import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { selectLocation } from '../../AC';
import './styles.css';
import icon from '../../assets/img/marker.svg';

const MyMap = (props) => {
    const position = [48.46344, 35.0464295];
    const myIcon = L.icon({
        iconUrl: icon,
        iconSize: [40, 80],
        iconAnchor: [20, 75]
    });
    const handleClick = (e) => {
        const {lat, lng} = e.latlng;

        props.selectLocation({lat, lng});
    };

    return (
        <Map className='dashboard__map' center = {position} onClick = {handleClick} zoom = {13}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker icon={myIcon} position={{lat: props.location.lat, lng: props.location.lng}}>
            </Marker>
        </Map>
    );
};

MyMap.propTypes = {
    location: PropTypes.object,
    selectLocation: PropTypes.func
};

export default connect(state => ({
    location: state.location
}), { selectLocation })(MyMap);