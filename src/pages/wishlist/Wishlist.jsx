import './Wishlist.css';
import React from 'react';
import { CardVertical } from '../../components/component_index';
import { useWishlist } from '../../context/context-index';
import { useScrollTop } from '../../hooks/useScrollTop';

export const Wishlist = () => {
  const { wishlistData, itemInWishlist } = useWishlist();
  useScrollTop();

  return (
    <main className="wishlist-body">
      <h2>Wishlist</h2>
      <section className="wishlist">
        {itemInWishlist ? (
          wishlistData.map((item) => <CardVertical key={item.id} item={item} />)
        ) : (
          <h2 className="empty-list">No Data Found</h2>
        )}
      </section>
    </main>
  );
};
