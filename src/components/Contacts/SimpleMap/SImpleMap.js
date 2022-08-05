import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const SimpleMap = () => {
    const defaultProps = {
        center: {
            lat: 42.604605,
            lng: 23.116916
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '700px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={42.604605}
                    lng={23.116916}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}