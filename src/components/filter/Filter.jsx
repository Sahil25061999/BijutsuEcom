import { useFilter } from '../../context/context_index';

import './Filter.css';
const Filter = ({ displayFilter, setDisplayFilter }) => {
  const {
    sortByState,
    rangeState,
    ratingState,
    otherCategoryState,
    categoryState,
    filterDispatch,
  } = useFilter();

  const { digitalArt, abstractArt, photography, music, gif } = categoryState;

  const { expressDelivery, includeAll } = otherCategoryState;
  const handleClearBtn = (e) => {
    e.preventDefault();
    filterDispatch({
      type: 'CLEAR',
      payload: {
        rangeState: {
          defaultValue: 0,
          start: 10,
          end: 35000,
        },
        sortByState: null,
        ratingState: null,
        otherCategoryState: {
          expressDelivery: false,
          includeAll: false,
        },
        categoryState: {
          digitalArt: false,
          abstractArt: false,
          photography: false,
          music: false,
          gif: false,
        },
      },
    });
  };
  return (
    <aside className={`filter-section ${displayFilter ? 'filterVisible' : ''}`}>
      <form className="filter-container" action="">
        <div className="filter-head-section d-flex">
          <h3 className="filter-title">Filters</h3>
          <button
            className="btn btn-float filter-close-btn"
            onClick={(e) => {
              e.preventDefault();
              setDisplayFilter(!displayFilter);
            }}
          >
            <span className="fa-solid fa-xmark"></span>
          </button>
        </div>
        <div className="filter-elements filter-price-element">
          <h4>Price</h4>
          <div className="filter-input-container">
            <input
              onChange={(e) =>
                filterDispatch({ type: 'RANGE', payload: e.target.value })
              }
              type="range"
              min="10"
              step="10"
              value={rangeState.defaultValue}
              max="35000"
              className="range-selector filter-range-selector"
            />
            <div className="filter-price-bottom-container">
              <span></span>
              <span>${rangeState.end}</span>
            </div>
          </div>
        </div>
        <div className="filter-elements filter-category-element">
          <h4>Category</h4>
          <div className="filter-input-container">
            <label className="checkbox-container margin-b-5">
              <input
                type="checkbox"
                onChange={() => {
                  filterDispatch({ type: 'DIGITAL ART' });
                }}
                id="digital_art_checkbox"
                name="digital_art_checkbox"
                value="Digital art"
                checked={digitalArt}
              />
              <span className="checker"></span>
              Digital Art
            </label>

            <label className="checkbox-container margin-b-5">
              <input
                type="checkbox"
                onChange={() => {
                  filterDispatch({ type: 'ABSTRACT ART' });
                }}
                id="abstract_art_checkbox"
                name="abstract_art_checkbox"
                value="Abstract art"
                checked={abstractArt}
              />
              <span className="checker"></span>
              Abstract Art
            </label>

            <label className="checkbox-container margin-b-5">
              <input
                type="checkbox"
                onChange={() => {
                  filterDispatch({ type: 'PHOTOGRAPHY' });
                }}
                id="photography_checkbox"
                name="photography_checkbox"
                value="Photography"
                checked={photography}
              />
              <span className="checker"></span>
              Photography
            </label>

            <label className="checkbox-container margin-b-5">
              <input
                type="checkbox"
                onChange={() => {
                  filterDispatch({ type: 'MUSIC' });
                }}
                id="music_checkbox"
                name="music_checkbox"
                value="music"
                checked={music}
              />
              <span className="checker"></span>
              Music
            </label>

            <label className="checkbox-container margin-b-5">
              <input
                type="checkbox"
                onChange={() => {
                  filterDispatch({ type: 'GIF' });
                }}
                id="gif_checkbox"
                name="gif_checkbox"
                value="gif"
                checked={gif}
              />
              <span className="checker"></span>
              Gif
            </label>
          </div>
        </div>
        <div className="filter-elements filter-rating-element">
          <h4>Ratings</h4>
          <div className="filter-input-container">
            <label className=" checkbox-container margin-b-5">
              <input
                onChange={() => {
                  filterDispatch({ type: '4_STAR_AND_ABOVE', payload: 4 });
                }}
                checked={ratingState === 4 ? true : false}
                type="radio"
                name="ratings"
                value="4 stars & above"
              />
              <span className="radio"></span>4 stars & above
            </label>
            <label className=" checkbox-container margin-b-5">
              <input
                onChange={() => {
                  filterDispatch({ type: '3_STAR_AND_ABOVE', payload: 3 });
                }}
                checked={ratingState === 3 ? true : false}
                type="radio"
                name="ratings"
                value="3 stars & above"
              />
              <span className="radio"></span>3 stars & above
            </label>
            <label className=" checkbox-container margin-b-5">
              <input
                onChange={() => {
                  filterDispatch({ type: '2_STAR_AND_ABOVE', payload: 2 });
                }}
                checked={ratingState === 2 ? true : false}
                type="radio"
                name="ratings"
                value="2 stars & above"
              />
              <span className="radio"></span>2 stars & above
            </label>
            <label className=" checkbox-container margin-b-5">
              <input
                onChange={() => {
                  filterDispatch({ type: '1_STAR_AND_ABOVE', payload: 1 });
                }}
                checked={ratingState === 1 ? true : false}
                type="radio"
                name="ratings"
                value="1 stars & above"
              />
              <span className="radio"></span>1 stars & above
            </label>
          </div>
        </div>
        <div className="filter-elements filter-sort-element">
          <h4>Sort by</h4>
          <div className="filter-input-container">
            <label className=" checkbox-container margin-b-5">
              <input
                onChange={() =>
                  filterDispatch({
                    type: 'HIGH_TO_LOW',
                    payload: 'HIGH_TO_LOW',
                  })
                }
                checked={sortByState === 'HIGH_TO_LOW' ? true : false}
                type="radio"
                name="sort"
                value="Price high to low"
              />
              <span className="radio"></span>
              Price high to Low
            </label>
            <label className=" checkbox-container margin-b-5">
              <input
                onChange={() =>
                  filterDispatch({
                    type: 'LOW_TO_HIGH',
                    payload: 'LOW_TO_HIGH',
                  })
                }
                checked={sortByState === 'LOW_TO_HIGH' ? true : false}
                type="radio"
                name="sort"
                value="Price low to high"
              />
              <span className="radio"></span>
              Price low to high
            </label>
          </div>
        </div>
        <div className="filter-elements filter-other-element">
          <h4>Others</h4>
          <div className="filter-input-container">
            <label className="checkbox-container margin-b-5">
              <input
                type="checkbox"
                onChange={() => {
                  filterDispatch({ type: 'INCLUDE_ALL' });
                }}
                id="out_of_stock_checkbox"
                name="out_of_stock_checkbox"
                value="Out of stock"
                checked={includeAll}
              />
              <span className="checker"></span>
              Out Of Stock
            </label>

            <label className="checkbox-container margin-b-5">
              <input
                type="checkbox"
                onChange={() => {
                  filterDispatch({ type: 'EXPRESS_DELIVERY' });
                }}
                id="express_delivery_checkbox"
                name="express_delivery_checkbox"
                value="Express delivery"
                checked={expressDelivery}
              />
              <span className="checker"></span>
              Express Delivery
            </label>
          </div>
        </div>
        <button
          onClick={handleClearBtn}
          className="btn btn-link-primary filter-clear-btn"
        >
          Clear
        </button>
      </form>
    </aside>
  );
};

export { Filter };
