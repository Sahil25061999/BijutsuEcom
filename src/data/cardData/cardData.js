import AbstractImage from '../../assets/image/card image/compressor/images/abstract.jpg';
import DigitalArt from '../../assets/image/card image/compressor/images/digital art.jpg';
import Photography from '../../assets/image/card image/compressor/images/photography.jpg';
import HipHop from '../../assets/image/card image/compressor/images/hip hop music.jpg';
import EDM from '../../assets/image/card image/compressor/images/edm.jpg';

const cardData = [
  {
    imgSrc: DigitalArt,
    category: 'digital art',
    cardHeading: 'Elevate to sky',
    cardBadge: 'hot',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: '$50',
    productOriginalPrice: '$100',
  },
  {
    imgSrc: AbstractImage,
    category: 'digital art',
    cardHeading: 'Abstract Image',
    cardBadge: 'trending',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: '$50',
    productOriginalPrice: '$100',
  },
  {
    imgSrc: Photography,
    category: 'photography',
    cardHeading: 'Photography',
    cardBadge: '',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: '$50',
    productOriginalPrice: '$100',
  },
  {
    imgSrc: HipHop,
    category: 'hiphop music',
    cardHeading: 'Hip Hop Music',
    cardBadge: '',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: '$50',
    productOriginalPrice: '$100',
  },

  {
    imgSrc: EDM,
    category: 'edm music',
    cardHeading: 'EDM Music',
    cardBadge: '',
    cardSubHeading: 'by Rick Martin',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus voluptas at id nihil, alias ipsam veniam odit nisireiciendis molestiae!',
    productDiscountedPrice: '$50',
    productOriginalPrice: '$100',
  },
];

const categoryCardData = [
  {
    imgSrc: DigitalArt,
    category: 'Digital Art',
  },
  {
    imgSrc: AbstractImage,
    category: 'Abstract Image',
  },
  {
    imgSrc: Photography,
    category: 'Photography',
  },
  {
    imgSrc: HipHop,
    category: 'Hip Hop Music',
  },

  {
    imgSrc: EDM,
    category: 'EDM Music',
  },
];

export { cardData, categoryCardData };
