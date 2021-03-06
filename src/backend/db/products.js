import { v4 as uuid } from 'uuid';
import AbstractImage from '../../assets/image/card image/compressor/images/abstract.jpg';
import DigitalArt from '../../assets/image/card image/compressor/images/digital art.jpg';
import Photography from '../../assets/image/card image/compressor/images/photography.jpg';
import HipHop from '../../assets/image/card image/compressor/images/hip hop music.jpg';
import EDM from '../../assets/image/card image/compressor/images/edm.jpg';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    imgSrc: DigitalArt,
    productCategory: { name: 'digital art', digitalArt: true },
    cardHeading: 'Elevate to sky',
    cardBadge: 'hot',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 50,
    productOriginalPrice: 100,
    wishlist: false,
    cart: false,
    rating: 4.8,
    quantity: 1,
    expressDelivery: true,
    inStock: 3,
  },
  {
    _id: uuid(),
    imgSrc: AbstractImage,
    productCategory: { name: 'abstract art', abstractArt: true },
    cardHeading: 'Abstract Image',
    cardBadge: 'trending',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 150,
    productOriginalPrice: 100,
    wishlist: false,
    cart: false,
    rating: 2,

    expressDelivery: true,
    inStock: null,
  },
  {
    _id: uuid(),
    imgSrc: Photography,
    productCategory: { name: 'photography', photography: true },
    cardHeading: 'Photography',
    cardBadge: '',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 20,
    productOriginalPrice: 100,
    wishlist: false,
    cart: false,
    rating: 1,
    quantity: 1,
    expressDelivery: false,
    inStock: 100,
  },
  {
    _id: uuid(),
    imgSrc: HipHop,
    productCategory: { name: 'hip hop music', music: true },
    cardHeading: 'Hip Hop Music',
    cardBadge: '',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 755,
    productOriginalPrice: 100,
    wishlist: false,
    cart: false,
    rating: 3.5,
    quantity: 1,
    expressDelivery: true,
    inStock: 100,
  },

  {
    _id: uuid(),
    imgSrc: EDM,
    productCategory: { name: 'edm music', music: true },
    cardHeading: 'EDM Music',
    cardBadge: '',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 1200,
    productOriginalPrice: 100,
    wishlist: false,
    cart: false,
    rating: 1.8,
    outOfStock: true,
    expressDelivery: true,
    inStock: null,
  },
];
