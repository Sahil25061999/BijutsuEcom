import { v4 as uuid } from 'uuid';
import abstract from '../../assets/image/card image/compressor/images/abstract.webp';
import abstractsecondaryimg1 from '../../assets/image/card image/compressor/images/abstractsecondaryimg1.webp';
import abstractsecondaryimg2 from '../../assets/image/card image/compressor/images/abstractsecondaryimg2.webp';
// import abstractsecondaryimg3 from '../../assets/image/card image/compressor/images/abstractsecondaryimg3.webp';
import abstract2 from '../../assets/image/card image/compressor/images/abstract2.webp';
import abstract2secondaryimg1 from '../../assets/image/card image/compressor/images/abstract2secondaryimg1.webp';
import abstract2secondaryimg2 from '../../assets/image/card image/compressor/images/abstract2secondaryimg2.webp';
import abstract2secondaryimg3 from '../../assets/image/card image/compressor/images/abstract2secondaryimg3.webp';
import abstract3 from '../../assets/image/card image/compressor/images/abstract3.webp';
import abstract3secondaryimg1 from '../../assets/image/card image/compressor/images/abstract3secondaryimg1.webp';
import abstract3secondaryimg2 from '../../assets/image/card image/compressor/images/abstract3secondaryimg2.webp';
// import abstract2secondaryimg3 from '../../assets/image/card image/compressor/images/abstract2secondaryimg3.webp';
import digitalart from '../../assets/image/card image/compressor/images/digital art.jpg';
import digitalartsecondaryimg1 from '../../assets/image/card image/compressor/images/digitalartsecondaryimg1.webp';
import digitalartsecondaryimg2 from '../../assets/image/card image/compressor/images/digitalartsecondaryimg2.webp';
import digitalart2 from '../../assets/image/card image/compressor/images/digital art2.webp';
import digitalart2secondaryimg1 from '../../assets/image/card image/compressor/images/digitalart2secondaryimg1.webp';
import digitalart2secondaryimg2 from '../../assets/image/card image/compressor/images/digitalart2secondaryimg2.webp';
import digitalart3 from '../../assets/image/card image/compressor/images/digitalart3.webp';
import digitalart3secondaryimg1 from '../../assets/image/card image/compressor/images/digitalart3secondaryimg1.webp';
import digitalart3secondaryimg2 from '../../assets/image/card image/compressor/images/digitalart3secondaryimg2.webp';
import photography from '../../assets/image/card image/compressor/images/photography.webp';
import photographysecondaryimg1 from '../../assets/image/card image/compressor/images/photographysecondaryimg1.webp';
import photographysecondaryimg2 from '../../assets/image/card image/compressor/images/photographysecondaryimg2.webp';
import photography2 from '../../assets/image/card image/compressor/images/photography2.webp';
import photography2secondaryimg1 from '../../assets/image/card image/compressor/images/photography2secondaryimg1.webp';
import photography2secondaryimg2 from '../../assets/image/card image/compressor/images/photography2secondaryimg2.webp';
import photography3 from '../../assets/image/card image/compressor/images/photography3.webp';
import photography3secondaryimg1 from '../../assets/image/card image/compressor/images/photography3secondaryimg1.webp';
import photography3secondaryimg2 from '../../assets/image/card image/compressor/images/photography3secondaryimg2.webp';

import hiphop from '../../assets/image/card image/compressor/images/hip hop music.webp';
import hiphopsecondaryimg1 from '../../assets/image/card image/compressor/images/hip hop musicsecondaryimg1.webp';
import hiphopsecondaryimg2 from '../../assets/image/card image/compressor/images/hip hop musicsecondaryimg2.webp';
import hiphop2 from '../../assets/image/card image/compressor/images/hip hop music2.webp';
import hiphop2secondaryimg1 from '../../assets/image/card image/compressor/images/hip hop music2secondaryimg1.webp';
import hiphop2secondaryimg2 from '../../assets/image/card image/compressor/images/hip hop music2secondaryimg2.webp';
import edm from '../../assets/image/card image/compressor/images/edm.jpg';
import edmsecondaryimg1 from '../../assets/image/card image/compressor/images/edmsecondaryimg1.webp';
import edmsecondaryimg2 from '../../assets/image/card image/compressor/images/edmsecondaryimg2.webp';
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    imgSrc: digitalart,
    secondaryImgSrc: [
      digitalart,
      digitalartsecondaryimg1,
      digitalartsecondaryimg2,
    ],
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
    imgSrc: abstract,
    secondaryImgSrc: [abstract, abstractsecondaryimg1, abstractsecondaryimg2],
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
    imgSrc: photography,
    secondaryImgSrc: [
      photography,
      photographysecondaryimg1,
      photographysecondaryimg2,
    ],
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
    imgSrc: hiphop,
    secondaryImgSrc: [hiphop, hiphopsecondaryimg1, hiphopsecondaryimg2],
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
    imgSrc: edm,
    secondaryImgSrc: [edm, edmsecondaryimg1, edmsecondaryimg2],
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
    secondaryImgSrc: [hiphop2, hiphop2secondaryimg1, hiphop2secondaryimg2],
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
    secondaryImgSrc: [
      digitalart2,
      digitalart2secondaryimg1,
      digitalart2secondaryimg2,
    ],
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
    secondaryImgSrc: [
      digitalart3,
      digitalart3secondaryimg1,
      digitalart3secondaryimg2,
    ],
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
    secondaryImgSrc: [
      photography2,
      photography2secondaryimg1,
      photography2secondaryimg2,
    ],
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
    secondaryImgSrc: [
      abstract2,
      abstract2secondaryimg1,
      abstract2secondaryimg2,
      abstract2secondaryimg3,
    ],
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
    secondaryImgSrc: [
      photography3,
      photography3secondaryimg1,
      photography3secondaryimg2,
    ],
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
    secondaryImgSrc: [
      abstract3,
      abstract3secondaryimg1,
      abstract3secondaryimg2,
    ],
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
