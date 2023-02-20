import React from 'react';
import { CardHorizontal, CardVertical } from '../../components/component_index';
import { useWishlist } from '../../context/context_index';
import { useScrollTop } from '../../hooks/useScrollTop';
import './Wishlist.css';

export const Wishlist = () => {
  const { wishlistData, itemInWishlist } = useWishlist();
  useScrollTop();

  return (
    <main className="wishlist-body">
      <h3>Wishlist</h3>
      <div>
        <section className="wishlist">
          {itemInWishlist ? (
            wishlistData.map((item) => (
              <CardHorizontal key={item._id} item={item} />
            ))
          ) : (
            <h2 className="empty-list">No Data Found</h2>
          )}
        </section>
      </div>
    </main>
  );
};
