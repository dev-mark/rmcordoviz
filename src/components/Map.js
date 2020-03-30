import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 51.12941, lng: -114.20409 }}
    >
      <Marker
        position={{ lat: 51.12941, lng: -114.20409 }}
        // icon={{
        //   url: RMClogo,
        //   scaledSize: new window.google.maps.Size(40, 25)
        // }}
      />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
