import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { NewItem, OriginalItem, Product } from '@/types';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterProductsByCategoryId(
  products: any[],
  categoryId: string
) {
  return products.filter(
    (product) => product.categoryId === categoryId
  );
}

export function addIconsToArray(data: OriginalItem[]): NewItem[] {
  return data.map((item) => {
    let icon: string;
    switch (item.name.toLowerCase()) {
      case 'hats':
        icon = '/hats.png';
        break;
      case 't-shirts':
        icon = '/tshirt.png';
        break;
      case 'shirts':
        icon = '/shirt.png';
        break;
      case 'trousers':
        icon = '/trousers.png';
        break;
      case 'shoes':
        icon = '/shoes.png';
        break;
      case 'accessories':
        icon = '/accessories.png';
        break;
      default:
        icon = '/default.png';
    }

    return {
      id: item.id,
      name: item.name.charAt(0).toUpperCase() + item.name.slice(1), // Capitalize first letter of name
      value: item.id, // You need to define this value based on your application logic
      icon: icon,
    };
  });
}
