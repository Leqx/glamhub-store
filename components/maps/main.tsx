'use client';

import {
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';

import GlobalApi from '@/shared/global-api';
import BusinessList from '@/components/maps/business-list';
import CategoryList from '@/components/maps/category-list';
import GoogleMapView from '@/components/maps/map-view';
import RangeSelect from '@/components/maps/range-select';
//import SelectRating from '@/components/map/SelectRating';
import SkeltonLoading from '@/components/maps/skeleton-loading';
import { UserLocationContext } from '@/context/user-location-context';

import React from 'react';
import Categories from './categories';
import CategoryProducts from './category-products';
import { Product } from '@/types';

type Props = {
  categories: any;
  products: Product[];
};

export default function Main({ categories, products }: Props) {
  const [category, setCategory] = useState();
  const [radius, setRadius] = useState(2500);
  const [businessList, setBusinessList] = useState([]);
  const [businessListOrg, setBusinessListOrg] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { userLocation, setUserLocation } = useContext<any>(
    UserLocationContext
  );

  // useEffect(() => {
  //   getGooglePlace();
  // }, [category, radius]);

  // const getGooglePlace = () => {
  //   if (category) {
  //     setLoading(true);

  //     GlobalApi.getGooglePlace(
  //       category,
  //       radius,
  //       userLocation.lat,
  //       userLocation.lng
  //     ).then(
  //       (resp: {
  //         data: { product: { results: SetStateAction<never[]> } };
  //       }) => {
  //         // console.log(resp.data.product.results);
  //         setBusinessList(resp.data.product.results);
  //         setBusinessListOrg(resp.data.product.results);
  //         setLoading(false);
  //       }
  //     );
  //   }
  // };

  // const onRatingChange = (rating: string | any[]) => {
  //   if (rating.length == 0) {
  //     setBusinessList(businessListOrg);
  //   }
  //   const result = businessList.filter((item) => {
  //     for (let i = 0; i < rating.length; i++) {
  //       if (item.rating >= rating[i]) {
  //         return true;
  //       }
  //       return false;
  //     }
  //   });

  //   console.log(result);
  // };
  return (
    <div
      className="grid 
    grid-cols-1
    md:grid-cols-4 "
    >
      <div className="p-3">
        <Categories
          categories={categories}
          onCategoryChange={(value: SetStateAction<undefined>) =>
            setCategory(value)
          }
        />
        <RangeSelect
          onRadiusChange={(value: SetStateAction<number>) =>
            setRadius(value)
          }
        />
      </div>
      <div className="col-span-3">
        <GoogleMapView
          businessList={businessList}
          categoryId={category}
          fetchedProducts={products}
        />
        <div
          className="md:absolute mx-2 w-[85%] md:w-[62%]
           bottom-36 relative md:bottom-3 bg-transparent h-[400px] "
        >
          {!loading ? (
            <>
              {category !== undefined && (
                <CategoryProducts
                  categoryId={category}
                  fetchedProducts={products}
                />
              )}
            </>
          ) : (
            // <BusinessList businessList={businessList} />
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <SkeltonLoading key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
