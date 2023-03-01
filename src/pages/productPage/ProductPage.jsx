import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CartButton, WishlistButton } from '../../components/component_index';
import './ProductPage.css';

export function ProductPage() {
  const location = useLocation();
  const {
    _id: id,
    imgSrc,
    secondaryImgSrc,
    category,
    cardHeading,
    rating,
    expressDelivery: fast,
    cardSubHeading,
    productDiscountedPrice,
    productOriginalPrice,
    wishlist,
    cart,
    inStock,
  } = location.state.item;
  const [currImg, setCurrImg] = useState(imgSrc);

  return (
    <main className="product-body d-flex">
      <section className="product-images">
        <div className="product-img-container">
          <img className="product-image" src={currImg} alt="" />
        </div>

        <div className="product-secondary-img-container d-flex">
          {secondaryImgSrc.map((nextImgSrc) => (
            <input
              type="image"
              onClick={() => setCurrImg(nextImgSrc)}
              className={`product-secondary-img ${
                nextImgSrc === currImg ? 'active' : ''
              }`}
              src={nextImgSrc}
              alt=""
            />
          ))}
        </div>
      </section>
      <section className="product-information">
        <div className="product-head">
          <h3 className="product-title">{cardHeading}</h3>
          <p className="product-seller">{cardSubHeading}</p>
        </div>
        <div className="product-description margin-t-5">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id eos
            nostrum consectetur beatae aliquid? Provident quia repellat minus
            animi? Perspiciatis vero soluta fuga quis doloremque deserunt quia
            exercitationem veritatis iure neque blanditiis, repudiandae
            consectetur inventore, ut velit porro expedita? Assumenda, amet illo
            tenetur dignissimos accusantium eius. Labore quae iure laboriosam?
          </p>
        </div>
        <div className="product-price-container margin-t-5">
          <h2 className="product-price">
            <span className="currency-symbol">Rs.</span>
            {productDiscountedPrice}
          </h2>
        </div>
        <div className="product-btn-container d-flex">
          <CartButton id={id} />
          <WishlistButton id={id} />
        </div>
      </section>
    </main>
  );
}
