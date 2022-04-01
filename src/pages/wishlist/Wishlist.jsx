import './Wishlist.css';
import React from 'react';
import { CardVertical } from '../../components/component_index';
import { useWishlist } from '../../context/wishlist-context';
import { useScrollTop } from '../../hooks/useScrollTop';

export const Wishlist = () => {
  const { wishlistData, itemInWishlist } = useWishlist();
  useScrollTop();

  return (
    <main className="wishlist-body">
      <h2>Wishlist</h2>
      <section className="wishlist">
        {itemInWishlist ? (
          wishlistData.map((item) => (
            <CardVertical
              key={item.id}
              id={item.id}
              imgSrc={item.imgSrc}
              category={item.category}
              cardHeading={item.cardHeading}
              cardSubHeading={item.cardSubHeading}
              cardBadge={item.cardBadge}
              productDiscountedPrice={item.productDiscountedPrice}
              productOriginalPrice={item.productOriginalPrice}
              wishlist={item.wishlist}
              cart={item.cart}
              inStock={item.inStock}
            />
          ))
        ) : (
          <h2 className="empty-list">No Data Found</h2>
        )}
      </section>
    </main>
  );
};
