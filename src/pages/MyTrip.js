import React from 'react';
import GoogleMapReact from 'google-map-react';

const markerStyle = {
  color: 'white',
  backgroundColor: 'lightblue',
  height: 50,
  width: 50,
  fontSize: '28px',
  borderRadius: '50%',
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
          <div style={markerStyle} lat={39.165609} lng={-86.534238}>
            JK
          </div>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
