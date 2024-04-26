'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { Category } from '@/types';
import { addIconsToArray } from '@/lib/utils';

type Props = {
  onCategoryChange: any;
  categories: any[];
};

const Categories = ({ onCategoryChange, categories }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState();

  const categoryList = addIconsToArray(categories);

  return (
    <>
      <div>
        <h2 className="font-bold px-2">Select Category</h2>
        <div
          className="grid 
        grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-3"
        >
          {categoryList.map((item: any, index: any) => (
            <div
              key={index}
              className={`flex flex-col
                justify-center items-center bg-gray-100
                p-2 m-2 rounded-lg grayscale 
                hover:grayscale-0 cursor-pointer
                text-[13px]
                 border-purple-400
                ${
                  selectedCategory == index
                    ? 'grayscale-0 border-[1px]'
                    : null
                }`}
              onClick={() => {
                setSelectedCategory(index);
                onCategoryChange(item.value);
              }}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
              />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
