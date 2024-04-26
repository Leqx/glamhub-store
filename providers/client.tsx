'use client';

import { UserLocationContext } from '@/context/user-location-context';
import { SelectedBusinessContext } from '@/context/selected-business-content';
import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export function ClientProvider({ children }: Props) {
  const [userLocation, setUserLocation] = useState<any>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<any>([]);

  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      // console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  return (
    <>
      <>
        <SelectedBusinessContext.Provider
          value={{ selectedBusiness, setSelectedBusiness }}
        >
          <UserLocationContext.Provider
            value={{ userLocation, setUserLocation }}
          >
            {children}
          </UserLocationContext.Provider>
        </SelectedBusinessContext.Provider>
      </>
    </>
  );
}
