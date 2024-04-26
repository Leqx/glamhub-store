import { MarkerF, OverlayView } from '@react-google-maps/api';
import React, { useContext } from 'react';
import BusinessItem from './business-item';
import { SelectedBusinessContext } from '@/context/selected-business-content';

function Markers({ business }: any) {
  const { selectedBusiness, setSelectedBusiness } = useContext<any>(
    SelectedBusinessContext
  );
  return (
    <div>
      <MarkerF
        position={business.geometry.location}
        onClick={() => setSelectedBusiness(business)}
        icon={{
          url: '/circle.png',

          scaledSize: {
            width: 10,
            height: 10,
          },
        }}
      >
        {selectedBusiness.reference == business.reference ? (
          <OverlayView
            position={business.geometry.location}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="ml-[-90px] mt-[-230px]">
              <BusinessItem business={business} showDir={true} />
            </div>
          </OverlayView>
        ) : null}
      </MarkerF>
    </div>
  );
}

export default Markers;
