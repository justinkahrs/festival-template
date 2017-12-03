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

const Venue = ({ text }) => <div style={venueMarker}>{text}</div>;
const Parking = () => <div style={parkingMarker}>P</div>;
class SimpleMap extends React.Component {
  static defaultProps = {
    center: { lat: 39.165609, lng: -86.534238 },
    zoom: 17,
  };

  render() {
    return (
      <div style={{ width: '100%', height: '700px' }}>
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <Venue lat={39.165509} lng={-86.534138} text="JK" />
          <Venue lat={39.165109} lng={-86.536138} text="AV" />
          <Parking lat={39.165809} lng={-86.531138} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
