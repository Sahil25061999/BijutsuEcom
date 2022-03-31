import { createContext, useContext, useReducer } from 'react';

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case 'CLEAR':
        return (state = action.payload);

      /*            Categories   filter                                  */
      case 'DIGITAL ART':
        return {
          ...state,
          categoryState: {
            ...state.categoryState,
            digitalArt: !state.categoryState.digitalArt,
          },
        };
      case 'PHOTOGRAPHY':
        return {
          ...state,
          categoryState: {
            ...state.categoryState,
            photography: !state.categoryState.photography,
          },
        };
      case 'MUSIC':
        return {
          ...state,
          categoryState: {
            ...state.categoryState,
            music: !state.categoryState.music,
          },
        };
      case 'GIF':
        return {
          ...state,
          categoryState: {
            ...state.categoryState,
            gif: !state.categoryState.gif,
          },
        };

      /*                Other Category                       */

      case 'EXPRESS_DELIVERY':
        return {
          ...state,
          otherCategoryState: {
            ...state.otherCategoryState,
            expressDelivery: !state.otherCategoryState.expressDelivery,
          },
        };

      case 'INCLUDE_ALL':
        return {
          ...state,
          otherCategoryState: {
            ...state.otherCategoryState,
            includeAll: !state.otherCategoryState.includeAll,
          },
        };

      /*                 Rating Filter                         */
      case '4_STAR_AND_ABOVE':
        return { ...state, ratingState: action.payload };
      case '3_STAR_AND_ABOVE':
        return { ...state, ratingState: action.payload };
      case '2_STAR_AND_ABOVE':
        return { ...state, ratingState: action.payload };
      case '1_STAR_AND_ABOVE':
        return { ...state, ratingState: action.payload };

      /*                Sort Filter                              */
      case 'LOW_TO_HIGH':
        return { ...state, sortByState: action.payload };
      case 'HIGH_TO_LOW':
        return { ...state, sortByState: action.payload };

      /*              Range Filter                           */

      case 'RANGE':
        return {
          ...state,
          rangeState: {
            ...state.rangeState,
            end: action.payload,
            defaultValue: action.payload,
          },
        };

      default:
        return state;
    }
  };

  const [
    { rangeState, sortByState, ratingState, otherCategoryState, categoryState },
    filterDispatch,
  ] = useReducer(reducerFunc, {
    rangeState: {
      defaultValue: 0,
      start: 10,
      end: 35000,
    },
    sortByState: null,
    ratingState: null,
    otherCategoryState: { expressDelivery: false, includeAll: false },
    categoryState: {
      digitalArt: false,
      photography: false,
      music: false,
      gif: false,
    },
  });

  return (
    <FilterContext.Provider
      value={{
        rangeState,
        sortByState,
        ratingState,
        otherCategoryState,
        categoryState,
        filterDispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
