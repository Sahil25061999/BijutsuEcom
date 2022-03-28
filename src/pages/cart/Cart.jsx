import { HorizontalCard, PriceSection } from '../../components/component_index';
import { cardData } from '../../data/cardData/cardData';
import './Cart.css';

export const Cart = () => {
  return (
    <main className="cart-body">
      <h2>
        My Cart <span className="cart-count">(3)</span>
      </h2>
      <section className="cart-product-list">
        {cardData.map((item) => (
          <HorizontalCard
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
      <PriceSection />
    </main>
  );
};
