const getRatingData = (ratingDataList, ratingState) => {
  return ratingDataList.filter(({ rating }) => rating >= ratingState);
};

export { getRatingData };
