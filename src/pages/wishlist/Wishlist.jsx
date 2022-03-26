import './Wishlist.css';
import { CardVertical } from '../../components/component_index';
import { cardData } from '../../data/cardData/cardData';

export const Wishlist = () => {
  return (
    <main class="wishlist-body">
      <h2>Wishlist</h2>
      <section class="wishlist">
        {cardData.map((item) => (
          <CardVertical
            key={item.id}
            imgSrc={item.imgSrc}
            category={item.category}
            cardHeading={item.cardHeading}
            cardSubHeading={item.cardSubHeading}
            cardBadge={item.cardBadge}
            productDiscountedPrice={item.productDiscountedPrice}
            productOriginalPrice={item.productOriginalPrice}
            wishlist={item.wishlist}
            cart={item.cart}
          />
        ))}
      </section>
    </main>
  );
};
