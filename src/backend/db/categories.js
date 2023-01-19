import { v4 as uuid } from 'uuid';
import AbstractImage from '../../assets/image/card image/compressor/images/abstract.jpg';
import DigitalArt from '../../assets/image/card image/compressor/images/digital art.jpg';
import Photography from '../../assets/image/card image/compressor/images/photography.jpg';
import HipHop from '../../assets/image/card image/compressor/images/hip hop music.jpg';
import EDM from '../../assets/image/card image/compressor/images/edm.jpg';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    imgSrc: DigitalArt,
    categoryName: 'digital art',
    description:
      'literature in the form of prose, especially novels, that describes imaginary events and people',
  },
  {
    _id: uuid(),
    imgSrc: AbstractImage,
    categoryName: 'abstract art',
    description:
      'Non-fiction is writing that gives information or describes real events, rather than telling a story.',
  },
  {
    _id: uuid(),
    imgSrc: Photography,
    categoryName: 'photography',
    description:
      'Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.',
  },
  {
    _id: uuid(),
    imgSrc: HipHop,
    categoryName: 'hip hop music',
    description:
      'Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.',
  },
  {
    _id: uuid(),
    imgSrc: EDM,
    categoryName: 'edm music',
    description:
      'Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.',
  },
];
