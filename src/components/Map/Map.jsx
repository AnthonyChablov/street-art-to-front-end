import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Loader from '../Loader/Loader';

const containerStyle = {
  width: '100%',
  height: '100%',
  dark: 'dark'
};

const center = {
  lat: 43.651070,
  lng: -79.3470153
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY ,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    /* Google map box */
    <div className='h-screen w-screen'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options ={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          mapId: GOOGLE_MAPS_ID
        }}
      >
        <Marker position={center}/>
        { 
          /* Child components, such as markers, info windows, etc. */ 
        }
        <></>
      </GoogleMap>
    </div>
  ) : <Loader/>
}

export default React.memo(Map);