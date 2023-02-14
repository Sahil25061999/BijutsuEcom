import { v4 as uuid } from 'uuid';
import AbstractImage from '../../assets/image/card image/compressor/images/abstract.jpg';
import abstract2 from '../../assets/image/card image/compressor/images/abstract2.webp';
import abstract3 from '../../assets/image/card image/compressor/images/abstract3.webp';
import DigitalArt from '../../assets/image/card image/compressor/images/digital art.jpg';
import Photography from '../../assets/image/card image/compressor/images/photography.webp';
import HipHop from '../../assets/image/card image/compressor/images/hip hop music.webp';
import EDM from '../../assets/image/card image/compressor/images/edm.jpg';
import hiphop2 from '../../assets/image/card image/compressor/images/hip hop music2.webp';
import digitalart2 from '../../assets/image/card image/compressor/images/digital art2.webp';
import digitalart3 from '../../assets/image/card image/compressor/images/digitalart3.webp';
import photography2 from '../../assets/image/card image/compressor/images/photography2.webp';
import photography3 from '../../assets/image/card image/compressor/images/photography3.webp';
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
    cardSubHeading: 'Sahil Padvi',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 50,
    productOriginalPrice: 1800,
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
    cardHeading: 'Sand of times',
    cardBadge: 'trending',
    cardSubHeading: 'Pawel Czerwinski',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 150,
    productOriginalPrice: 1800,
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
    cardHeading: 'The sky is pink',
    cardBadge: '',
    cardSubHeading: 'Laura Vinck',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 20,
    productOriginalPrice: 1800,
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
    cardHeading: 'The Audio Box',
    cardBadge: '',
    cardSubHeading: 'James Owen',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 755,
    productOriginalPrice: 1800,
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
    cardHeading: 'Crowd Hypnotizer',
    cardBadge: '',
    cardSubHeading: 'Zac Bromell',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 1200,
    productOriginalPrice: 1500,
    wishlist: false,
    cart: false,
    rating: 1.8,
    outOfStock: true,
    expressDelivery: true,
    inStock: null,
  },
  {
    _id: uuid(),
    imgSrc: hiphop2,
    productCategory: { name: 'hip hop music', music: true },
    cardHeading: 'Retro revolt',
    cardBadge: '',
    cardSubHeading: 'Kaysha',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 755,
    productOriginalPrice: 1800,
    wishlist: false,
    cart: false,
    rating: 3.5,
    quantity: 1,
    expressDelivery: true,
    inStock: 100,
  },
  {
    _id: uuid(),
    imgSrc: digitalart2,
    productCategory: { name: 'digital art', digitalArt: true },
    cardHeading: 'Broken History',
    cardBadge: '',
    cardSubHeading: 'Simon Lee',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 755,
    productOriginalPrice: 1800,
    wishlist: false,
    cart: false,
    rating: 3.5,
    quantity: 1,
    expressDelivery: true,
    inStock: 100,
  },
  {
    _id: uuid(),
    imgSrc: digitalart3,
    productCategory: { name: 'digital art', digitalArt: true },
    cardHeading: 'Nature Within Us',
    cardBadge: '',
    cardSubHeading: 'Simon Lee',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 755,
    productOriginalPrice: 1800,
    wishlist: false,
    cart: false,
    rating: 3.5,
    quantity: 1,
    expressDelivery: true,
    inStock: 100,
  },
  {
    _id: uuid(),
    imgSrc: photography2,
    productCategory: { name: 'photography', photography: true },
    cardHeading: 'Mummy Boy',
    cardBadge: '',
    cardSubHeading: 'James Eades',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 755,
    productOriginalPrice: 1800,
    wishlist: false,
    cart: false,
    rating: 3.5,
    quantity: 1,
    expressDelivery: true,
    inStock: 100,
  },
  {
    _id: uuid(),
    imgSrc: abstract2,
    productCategory: { name: 'abstract art', abstractArt: true },
    cardHeading: 'Gradient flow',
    cardBadge: '',
    cardSubHeading: 'mymind',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 755,
    productOriginalPrice: 1800,
    wishlist: false,
    cart: false,
    rating: 3.5,
    quantity: 1,
    expressDelivery: true,
    inStock: 100,
  },

  {
    _id: uuid(),
    imgSrc: photography3,
    productCategory: { name: 'photography', photography: true },
    cardHeading: 'Minimal',
    cardBadge: '',
    cardSubHeading: 'Trista Ma',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 755,
    productOriginalPrice: 1800,
    wishlist: false,
    cart: false,
    rating: 3.5,
    quantity: 1,
    expressDelivery: true,
    inStock: 100,
  },
  {
    _id: uuid(),
    imgSrc: abstract3,
    productCategory: { name: 'abstract art', abstractArt: true },
    cardHeading: 'Paint chaos',
    cardBadge: '',
    cardSubHeading: 'Pawel Czerwinski',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: 755,
    productOriginalPrice: 1800,
    wishlist: false,
    cart: false,
    rating: 3.5,
    quantity: 1,
    expressDelivery: true,
    inStock: 100,
  },
];
