import React from 'react';
import GoogleMapReact from 'google-map-react';

const venueMarker = {
  lineHeight: '40px',
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'purple',
  height: 40,
  width: 40,
  fontSize: '24px',
  borderRadius: '50%',
};
const parkingMarker = {
  lineHeight: '40px',
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'blue',
  height: 40,
  width: 40,
  fontSize: '24px',
};
class SimpleMap extends React.Component {
  static defaultProps = {
    center: { lat: 39.165609, lng: -86.534238 },
    zoom: 17,
  };

  render() {
    return (
      <div style={{ width: '100%', height: '700px' }}>
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <div style={venueMarker} lat={39.165509} lng={-86.534138}>
            JK
          </div>
          <div style={venueMarker} lat={39.163609} lng={-86.532238}>
            AV
          </div>
          <div style={parkingMarker} lat={39.165509} lng={-86.532238}>
            P
          </div>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
