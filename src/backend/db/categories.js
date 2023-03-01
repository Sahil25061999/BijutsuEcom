import { v4 as uuid } from 'uuid';
import AbstractImage from '../../assets/image/card image/compressor/images/abstract.webp';
import abstract from '../../assets/image/category animated card/abstractArt.mp4';
import DigitalArt from '../../assets/image/card image/compressor/images/digital art.jpg';
import digitalart from '../../assets/image/category animated card/digitalArt.mp4';
import Photography from '../../assets/image/card image/compressor/images/photography.webp';
import photography from '../../assets/image/category animated card/photography.mp4';
import HipHop from '../../assets/image/card image/compressor/images/hip hop music.jpg';
import hiphop from '../../assets/image/category animated card/hipHop.mp4';
import EDM from '../../assets/image/card image/compressor/images/edm.jpg';
import edm from '../../assets/image/category animated card/edm.mp4';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    vidSrc: digitalart,
    imgSrc: DigitalArt,
    categoryName: 'digital art',
    description:
      'literature in the form of prose, especially novels, that describes imaginary events and people',
  },
  {
    _id: uuid(),
    vidSrc: abstract,
    imgSrc: AbstractImage,
    categoryName: 'abstract art',
    description:
      'Non-fiction is writing that gives information or describes real events, rather than telling a story.',
  },
  {
    _id: uuid(),
    vidSrc: photography,
    imgSrc: Photography,
    categoryName: 'photography',
    description:
      'Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.',
  },
  {
    _id: uuid(),
    vidSrc: hiphop,
    imgSrc: HipHop,
    categoryName: 'hip hop music',
    description:
      'Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.',
  },
  {
    _id: uuid(),
    vidSrc: edm,
    imgSrc: EDM,
    categoryName: 'edm music',
    description:
      'Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.',
  },
];
