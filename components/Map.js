import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = ({dropoffCoordinate, pickupCoordinate}) => {
  console.log(dropoffCoordinate, pickupCoordinate);
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.39172],
          zoom: 3
        });
        if (pickupCoordinate) {
          addToMap(map, pickupCoordinate);
        }
    }, [pickupCoordinate, dropoffCoordinate]);


    const addToMap = (map, coordinate) => {
      new mapboxgl.Marker()
          .setLngLat(coordinate)
          .addTo(map);
    }


    
    return (
        <Wrapper id="map">Map</Wrapper>
    )
}



const Wrapper = tw.div`
  flex-1
`;


export default Map