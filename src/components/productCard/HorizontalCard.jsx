import './HorizontalCard.css';
export const HorizontalCard = ({
  imgSrc,
  category,
  cardHeading,
  cardBadge,
  cardSubHeading,
  productDiscountedPrice,
  productOriginalPrice,
  wishlist,
  cart,
}) => {
  return (
    <div className="card cart-card card-horizontal">
      <div className="card-image-container">
        <img
          className="card-image"
          src={imgSrc}
          alt="product-image"
          loading="lazy"
        />
      </div>
      <div className="card-head">
        <h3 className="card-heading d-flex">
          {cardHeading}
          <span className="badge-text badge-sm badge-accent">Hot</span>
        </h3>
        <p className="card-subheading muted-text-color">{cardSubHeading}</p>
      </div>
      <div className="card-content">
        <div className="card-pricing">
          <h3 className="margin-r-5 card-price">{productDiscountedPrice}</h3>
          <span className="card-og-price small-text strike-text muted-text-color">
            {productOriginalPrice}
          </span>
        </div>
        <h3 className="muted-text-color card-discount">20% off</h3>
        <div className="card-quantity-container d-flex">
          <h4 className="margin-r-10">Quantity</h4>
          <button className="btn btn-primary quantity-minus-btn">
            <span className="fa fa-minus"></span>
          </button>
          <input
            type="number"
            className="card-quantity-input"
            min="1"
            value="1"
          />
          <button className="btn btn-primary quantity-plus-btn">
            <span className="fa fa-plus"></span>
          </button>
        </div>
      </div>
      <div className="card-foot d-flex">
        <button className="card-buy-btn btn btn-black">Remove from Cart</button>
        <button className="card-go-cart-btn btn btn-accented">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};
