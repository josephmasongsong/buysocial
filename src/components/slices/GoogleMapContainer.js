import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class GoogleMapContainer extends Component {
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
    const lat = this.props.location.location.latitude;
    const lon = this.props.location.location.longitude
    return(

      <Map
        item
        xs = { 12 }
        style = { mapStyle }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: lat, lng: lon }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { this.props.location.venue_name[0].text }
          position = {{ lat: lat, lng: lon }}
          name = { this.props.location.venue_name[0].text }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <div>
            <h5 className="text-dark">{this.props.location.venue_name[0].text}</h5>

            <p>{this.props.location.readable_address[0].text}</p>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAyIJY4qvddGqbKj3hkf36VatRLvuuR0vk'),
})(GoogleMapContainer)
