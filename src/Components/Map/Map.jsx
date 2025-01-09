/* eslint-disable react/prop-types */


import GoogleMapReact from 'google-map-react';
import { googleAPIKey } from './googleAPIKey';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <div className='max-w-screen-2xl mx-auto flex justify-center items-center min-h-[90vh]'>
            <div className=''>
                <div style={{ height: '50vh', width: '50vw' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: googleAPIKey }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
}

export default Map
