import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components';
import Map from '../components/Map';

export default function ConfirmationPage() {
    const [pickupCoordinate, setPickupCoordinate] = useState();
    const [dropoffCoordinate, setDropoffCoordinate] = useState();

    const getCoordinate = (location, setter) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?`+ 
            new URLSearchParams({
                "access_token": process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
                "limit": 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setter(data.features[0].center);
                console.log(data.features[0].center);

                return data.features[0].center;
            })
    }

    useEffect(() => {
      getCoordinate("KyeeMyinDaing", setPickupCoordinate);
      getCoordinate("Sanchaung", setDropoffCoordinate);
    }, [])
    

  return (
    <Wrapper>
      <Map 
        dropoffCoordinate={dropoffCoordinate}
        pickupCoordinate={pickupCoordinate}
      />
      <RideContainer>
        Hello
        {pickupCoordinate}
        {dropoffCoordinate}
      </RideContainer>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const RideContainer = tw.div`
 flex-1 p-4
`