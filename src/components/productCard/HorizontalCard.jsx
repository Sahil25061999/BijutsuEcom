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
    <div class="card cart-card card-horizontal">
      <div class="card-image-container">
        <img
          class="card-image"
          src={imgSrc}
          alt="product-image"
          loading="lazy"
        />
      </div>
      <div class="card-head">
        <h3 class="card-heading d-flex">
          {cardHeading}
          <span class="badge-text badge-sm badge-accent">Hot</span>
        </h3>
        <p class="card-subheading muted-text-color">{cardSubHeading}</p>
      </div>
      <div class="card-content">
        <div class="card-pricing">
          <h3 class="margin-r-5 card-price">{productDiscountedPrice}</h3>
          <span class="card-og-price small-text strike-text muted-text-color">
            {productOriginalPrice}
          </span>
        </div>
        <h3 class="muted-text-color card-discount">20% off</h3>
        <div class="card-quantity-container d-flex">
          <h4 class="margin-r-10">Quantity</h4>
          <button class="btn btn-primary quantity-minus-btn">
            <span class="fa fa-minus"></span>
          </button>
          <input type="number" class="card-quantity-input" min="1" value="1" />
          <button class="btn btn-primary quantity-plus-btn">
            <span class="fa fa-plus"></span>
          </button>
        </div>
      </div>
      <div class="card-foot d-flex">
        <button class="card-buy-btn btn btn-black">Remove from Cart</button>
        <button class="card-go-cart-btn btn btn-accented">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};
