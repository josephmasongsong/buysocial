import React, { Component } from 'react';
import { GoogleApiWrapper,  Map, Marker } from 'google-maps-react';

class GoogleMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {}
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    const mapStyle = {
      width: '100%',
      height: '242px',
      position: 'relative',
    }
    const lat = this.props.lat;
    const lon = this.props.lon;
    return(

      <Map
        item
        xs = { 12 }
        style = { mapStyle }
        google = { this.props.google }
        // onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: lat, lng: lon }}
        center = {{ lat: lat, lng: lon }}
      >
        <Marker
          // onClick = { this.onMarkerClick }
          // title = { this.props.location.venue_name[0].text }
          position = {{ lat: lat, lng: lon }}
          // name = { this.props.location.venue_name[0].text }
        />

      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAyIJY4qvddGqbKj3hkf36VatRLvuuR0vk'),
})(GoogleMap)
