import React, { useContext, useRef } from 'react';
import BusinessItem from './business-item';
import { SelectedBusinessContext } from '@/context/selected-business-content';

function BusinessList({ businessList }: any) {
  const elementRef = useRef(null);
  const { selectedBusiness, setSelectedBusiness } = useContext<any>(
    SelectedBusinessContext
  );

  const slideRight = (element: { scrollLeft: number } | null) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element: { scrollLeft: number } | null) => {
    element.scrollLeft -= 500;
  };
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        onClick={() => slideLeft(elementRef.current)}
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 absolute rotate-180 top-[35%]
            bg-gray-300 cursor-pointer p-1 rounded-full text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
      <div
        className="flex overflow-scroll overflow-x-auto gap-4
    scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {businessList.map(
          (item: any, index: React.Key | null | undefined) =>
            index <= 7 && (
              <div
                key={index}
                onClick={() => setSelectedBusiness(item)}
              >
                <BusinessItem business={item} />
              </div>
            )
        )}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => slideRight(elementRef.current)}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 absolute right-0 top-[35%]
            bg-gray-300 cursor-pointer p-1 rounded-full text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}

export default BusinessList;
