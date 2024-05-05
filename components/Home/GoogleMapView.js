import React, { useContext } from 'react'
import {GoogleMap, LoadScript, MarkerF} from '@react-google-maps/api'
import { UserLocationContext } from '@/context/UserLocationContext'


function GoogleMapView() {
    const {userLocation,setUserLocation}=useContext(UserLocationContext)
    const containerStyle={width:'100%',
        height:'70vh'
    }
    const coordinate={lat:-34.397,lng:150.644}
    console.log(userLocation)
  return (
    <div>
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            mapIds={['1721ebd2b807f7ba']}
            >
                <GoogleMap mapContainerStyle={containerStyle} center={userLocation}
                options={{mapId:'1721ebd2b807f7ba'}}
                zoom={13}>
                    <MarkerF
                position={userLocation}
                icon={{
                  url:'/user-location.png',
                  scaledSize:{
                    width:50,
                    height:50
                  }
                }}
              />
                </GoogleMap>
                
            </LoadScript>
    </div>
  )
}

export default GoogleMapView