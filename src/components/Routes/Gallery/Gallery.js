

/*const Gallery = () => {
  return (
    <div>Gallery</div>
    )
}


export default Gallery;*/
import classes from "./Gallery.module.css"

import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"

const Maps = () => {
   const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY})
  return (
   
    //to check if map is loaded
    !isLoaded ? <div> Loading...</div> : <Map />
    )
}

const Map = () => {
  return (
    <GoogleMap 
      zoom= {10}
      center={{lat: 47.44, lng: -122.176}}
      mapContainerClassName={classes["map"]}
    >
      <Marker 
        //position= {posi
      />
    
    </GoogleMap >
    )
}

export default Maps