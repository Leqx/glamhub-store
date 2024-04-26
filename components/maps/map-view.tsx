'use client';

import React, { useContext, useEffect, useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  MarkerF,
} from '@react-google-maps/api';
import Markers from './markers';
import { SelectedBusinessContext } from '@/context/selected-business-content';
import { UserLocationContext } from '@/context/user-location-context';
import { filterProductsByCategoryId } from '@/lib/utils';

type Props = {
  businessList: any;
  categoryId: string | undefined;
  fetchedProducts: any;
};

function GoogleMapView({
  businessList,
  categoryId,
  fetchedProducts,
}: Props) {
  const [products, setProducts] = useState<any>([]);

  const { userLocation, setUserLocation } = useContext<any>(
    UserLocationContext
  );
  const { selectedBusiness, setSelectedBusiness } = useContext<any>(
    SelectedBusinessContext
  );
  const [map, setMap] = useState<any>();

  const containerStyle = {
    width: '100%',
    height: '500px',
  };

  console.log(userLocation);

  useEffect(() => {
    if (categoryId === undefined) return;
    const filteredProducts = filterProductsByCategoryId(
      fetchedProducts,
      categoryId
    );

    console.log(filteredProducts);

    setProducts(filteredProducts);
  }, [categoryId, fetchedProducts]);

  useEffect(() => {
    if (map && selectedBusiness) {
      map.panTo(selectedBusiness.geometry.location);
    }
  }, [selectedBusiness]);
  return (
    <div>
      <LoadScript
        googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          // center={userLocation}

          center={
            !selectedBusiness.name
              ? userLocation
              : selectedBusiness.geometry.location
          }
          options={{ mapId: '327f00d9bd231a33' }}
          zoom={13}
          onLoad={(map) => setMap(map)}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: '/user-location.png',
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />

          {products.length > 0 &&
            products.map(
              (item: any, index: React.Key | null | undefined) =>
                index <= 7 && (
                  <MarkerF
                    key={index}
                    position={{
                      lat: item.store.latitude,
                      lng: item.store.longitude,
                    }}
                    icon={{
                      url: '/map-pointer.png',
                      scaledSize: {
                        width: 50,
                        height: 50,
                      },
                    }}
                  />
                )
            )}

          {/* <MarkerF
            position={{ lat: products[0]., lng: 36.7296577 }}
            icon={{
              url: '/user-location.png',
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          /> */}

          {/* {businessList.map(
            (item: any, index: React.Key | null | undefined) =>
              index <= 7 && <Markers business={item} key={index} />
          )} */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
