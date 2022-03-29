const getSortedData = (sortDataList, sortBy) => {
  if (sortBy === 'LOW_TO_HIGH') {
    return sortDataList.sort((a, b) => {
      return a.productDiscountedPrice - b.productDiscountedPrice;
    });
  }
  if (sortBy === 'HIGH_TO_LOW') {
    return sortDataList.sort(
      (a, b) => b.productDiscountedPrice - a.productDiscountedPrice
    );
  }
  return sortDataList;
};

export { getSortedData };
