import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { selectLocation } from '../../AC';
import './styles.css';
import icon from '../../assets/img/marker.svg';

const myIcon = L.icon({
    iconUrl: icon,
    iconSize: [40, 80],
    iconAnchor: [20, 75]
});

class MyMap extends Component {
    state = {
        lat: null,
        lng: null,
    };

    handleClick = (e) => {
        const {lat, lng} = e.latlng;

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyC3imXrnvF11i1yoerIuKiuBi1rB8ioNxE`)
            .then(res => res.json())
            .then(response => {
                this.props.selectLocation({location: response.results[0].formatted_address});
                this.setState({
                    ...e.latlng
                });
            }).catch(err => console.log(new Error(err)));
    };

    render() {
        const position = [48.46344, 35.0464295];

        return (
            <Map className='dashboard__map' center = {position} onClick = {this.handleClick} zoom = {13}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker icon={myIcon} position={this.state}>
                </Marker>
            </Map>
        );
    }
}

export default connect(null, { selectLocation })(MyMap);