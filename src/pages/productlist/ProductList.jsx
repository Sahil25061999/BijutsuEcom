import {
  getCategoryData,
  getRatingData,
  getSortedData,
} from '../../utilities/utilities-index';
import { useFilter } from '../../context/filter-context';
import { cardData } from '../../data/cardData/cardData';
import { CardVertical, Filter } from '../../components/component_index';
import './ProductList.css';

export const ProductList = () => {
  const {
    rangeState,
    sortByState,
    ratingState,
    otherCategoryState,
    categoryState,
  } = useFilter();

  const getFilteredData = (
    cardData,
    { getCategoryData, getRatingData, getSortedData }
  ) => {
    const dataFromSort = getSortedData(cardData, sortByState)
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

    const dataFromCategory = getCategoryData(dataFromRange, categoryState);

    return dataFromCategory
      ? getRatingData(dataFromCategory, ratingState)
      : undefined;
  };

  const filteredList = getFilteredData(cardData, {
    getCategoryData,
    getRatingData,
    getSortedData,
  });
  return (
    <>
      <main className="productList-body">
        <Filter />
        <section class="product-list">
          {filteredList && filteredList.length ? (
            filteredList.map((item) => (
              <CardVertical
                key={item.id}
                imgSrc={item.imgSrc}
                category={item.productCategory.name}
                cardHeading={item.cardHeading}
                cardSubHeading={item.cardSubHeading}
                cardBadge={{ rating: item.rating, fast: item.expressDelivery }}
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
    </>
  );
};
