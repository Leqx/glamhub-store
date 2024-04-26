'use client';

import { useEffect, useRef, useState } from 'react';

import { filterProductsByCategoryId } from '@/lib/utils';
import NoResults from '@/components/ui/no-results';
import ProductCard from '../ui/product-card';

type Props = {
  categoryId: string | undefined;
  fetchedProducts: any;
};

const CategoryProducts = ({ categoryId, fetchedProducts }: Props) => {
  const [products, setProducts] = useState<any>([]);
  const elementRef = useRef(null);
  // const { selectedBusiness, setSelectedBusiness } = useContext<any>(
  //   SelectedBusinessContext
  // );

  useEffect(() => {
    if (categoryId === undefined) return;
    const filteredProducts = filterProductsByCategoryId(
      fetchedProducts,
      categoryId
    );

    console.log(filteredProducts);

    setProducts(filteredProducts);
  }, [categoryId, fetchedProducts]);

  const slideRight = (element: { scrollLeft: number } | null) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element: { scrollLeft: number } | null) => {
    element.scrollLeft -= 500;
  };

  return (
    <>
      <div className="w-full bg-transparent h-full">
        <div>
          {products.length === 0 ? (
            <p className=" text- text-center">No products found.</p>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                onClick={() => slideLeft(elementRef.current)}
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 absolute rotate-180 top-[35%]
            bg-primary cursor-pointer p-1 rounded-full text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <div
                className="flex overflow-scroll overflow-x-auto gap-4
    scrollbar-hide scroll-smooth bg-transparent h-[350px] py-2"
                ref={elementRef}
              >
                {products.map(
                  (item: any, index: React.Key | null | undefined) =>
                    index <= 7 && (
                      <div
                        className="h-[150px] w-[250px] pl-10"
                        key={index}
                        //onClick={() => setSelectedBusiness(item)}
                      >
                        <ProductCard data={item} />
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
                className="w-8 h-8 absolute right-5 top-[35%]
            bg-primary cursor-pointer p-1 rounded-full text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
