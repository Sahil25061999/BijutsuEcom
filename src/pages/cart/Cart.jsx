import { HorizontalCard } from '../../components/component_index';
import { cardData } from '../../data/cardData/cardData';
import './Cart.css';

export const Cart = () => {
  return (
    <main class="cart-body">
      <h2>
        My Cart <span class="cart-count">(3)</span>
      </h2>
      <section class="cart-product-list">
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
      <aside class="cart-price-section">
        <h3>Price details</h3>
        <div class="cart-price-container">
          <div>
            <h4 class="muted-text-color">
              Price <span class="total-items"> (3 items) </span>
            </h4>
            <h4 class="cart-original-price">$100</h4>
          </div>
          <div>
            <h4 class="muted-text-color">Discount</h4>
            <h4 class="cart-discount-price">-$50</h4>
          </div>
          <div>
            <h4 class="muted-text-color">Delivery Charges</h4>
            <h4 class="cart-delivery-charges">$10</h4>
          </div>
          <div>
            <h3 class="muted-text-color">Total Charges</h3>
            <h4 class="cart-total-charges">$60</h4>
          </div>
        </div>
        <p class="muted-text-color">
          You will save
          <strong class="cart-discount-price primary-text-color">-$50</strong>
        </p>
        <button class="btn btn-black cart-order-btn">Place Order</button>
      </aside>
    </main>
  );
};
