import React, { useState } from 'react';
import {
  getCategoryData,
  getRatingData,
  getSortedData,
} from '../../utilities/utilities-index';
import { useFilter, useProductList } from '../../context/context_index';
import { CardVertical, Filter } from '../../components/component_index';
import './ProductList.css';
import { useScrollTop } from '../../hooks/useScrollTop';

export const ProductList = () => {
  const { productList } = useProductList();
  const [displayFilter, setDisplayFilter] = useState(false);
  const {
    rangeState,
    sortByState,
    ratingState,
    otherCategoryState,
    categoryState,
  } = useFilter();

  useScrollTop();

  const getFilteredData = (
    cardData,
    { getCategoryData, getRatingData, getSortedData }
  ) => {
    const dataFromCategory = getCategoryData(cardData, categoryState);

    const dataFromSort = getSortedData(dataFromCategory, sortByState)
      .filter(({ expressDelivery }) =>
        otherCategoryState.expressDelivery ? expressDelivery : true
      )
      .filter(({ inStock }) =>
        otherCategoryState.includeAll ? true : inStock
      );
    const dataFromRange = dataFromSort.filter(
      ({ productDiscountedPrice }) =>
        rangeState.start <= productDiscountedPrice &&
        productDiscountedPrice <= rangeState.end
    );

    return dataFromRange
      ? getRatingData(dataFromRange, ratingState)
      : undefined;
  };

  const filteredList = getFilteredData(productList, {
    getCategoryData,
    getRatingData,
    getSortedData,
  });

  return (
    <>
      <main className="productList-body">
        <button
          className="btn filter-btn margin-b-10"
          onClick={() => setDisplayFilter((prevState) => !prevState)}
        >
          <span className="fa-solid fa-sliders margin-r-5"></span>
          Filter
        </button>
        <Filter
          displayFilter={displayFilter}
          setDisplayFilter={setDisplayFilter}
        />
        <section className="product-list">
          {filteredList && filteredList.length ? (
            filteredList.map((item) => (
              <CardVertical key={item._id} item={item} />
            ))
          ) : (
            <h2 className="empty-list">No Data Found</h2>
          )}
        </section>
      </main>
    </>
  );
};
