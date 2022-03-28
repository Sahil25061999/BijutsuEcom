import AbstractImage from '../../assets/image/card image/compressor/images/abstract.jpg';
import DigitalArt from '../../assets/image/card image/compressor/images/digital art.jpg';
import Photography from '../../assets/image/card image/compressor/images/photography.jpg';
import HipHop from '../../assets/image/card image/compressor/images/hip hop music.jpg';
import EDM from '../../assets/image/card image/compressor/images/edm.jpg';
import { v4 as uuid } from 'uuid';
const cardData = [
  {
    id: uuid(),
    imgSrc: DigitalArt,
    category: 'digital art',
    cardHeading: 'Elevate to sky',
    cardBadge: 'hot',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: '$50',
    productOriginalPrice: '$100',
    wishlist: true,
    cart: false,
  },
  {
    id: uuid(),
    imgSrc: AbstractImage,
    category: 'digital art',
    cardHeading: 'Abstract Image',
    cardBadge: 'trending',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: '$50',
    productOriginalPrice: '$100',
    wishlist: true,
    cart: false,
  },
  {
    id: uuid(),
    imgSrc: Photography,
    category: 'photography',
    cardHeading: 'Photography',
    cardBadge: '',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: '$50',
    productOriginalPrice: '$100',
    wishlist: true,
    cart: false,
  },
  {
    id: uuid(),
    imgSrc: HipHop,
    category: 'hiphop music',
    cardHeading: 'Hip Hop Music',
    cardBadge: '',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: '$50',
    productOriginalPrice: '$100',
    wishlist: true,
    cart: false,
  },

  {
    id: uuid(),
    imgSrc: EDM,
    category: 'edm music',
    cardHeading: 'EDM Music',
    cardBadge: '',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: '$50',
    productOriginalPrice: '$100',
    wishlist: true,
    cart: false,
  },
];

export { cardData };
