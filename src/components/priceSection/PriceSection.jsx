import './PriceSection.css';

export const PriceSection = () => {
  return (
    <aside className="cart-price-section">
      <h3>Price details</h3>
      <div className="cart-price-container">
        <div>
          <h4 className="muted-text-color">
            Price <span className="total-items"> (3 items) </span>
          </h4>
          <h4 className="cart-original-price">$100</h4>
        </div>
        <div>
          <h4 className="muted-text-color">Discount</h4>
          <h4 className="cart-discount-price">-$50</h4>
        </div>
        <div>
          <h4 className="muted-text-color">Delivery Charges</h4>
          <h4 className="cart-delivery-charges">$10</h4>
        </div>
        <div>
          <h3 className="muted-text-color">Total Charges</h3>
          <h4 className="cart-total-charges">$60</h4>
        </div>
      </div>
      <p className="muted-text-color">
        You will save
        <strong className="cart-discount-price primary-text-color">-$50</strong>
      </p>
      <button className="btn btn-black cart-order-btn">Place Order</button>
    </aside>
  );
};
