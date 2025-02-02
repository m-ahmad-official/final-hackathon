export type Cart = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  dicountPercentage: number;
  qty: number;
  uuid: number | string | undefined;
};

export type Wishlist = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  dicountPercentage: number;
  uuid: number | string | undefined;
};
