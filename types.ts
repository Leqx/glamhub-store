export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface OriginalItem {
  id: string;
  storeId: string;
  billboardId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewItem {
  id: string;
  name: string;
  value: string; // You need to define this value based on your application logic
  icon: string;
}
