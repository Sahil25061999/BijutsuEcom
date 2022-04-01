const getCategoryData = (categoryDataList, categoryState) => {
  const data = [];
  //check the active category form categroyState
  Object.entries(categoryState).forEach(([categoryName, categoryActive]) => {
    // check the product category matches the active category
    data.push(
      ...categoryDataList.filter(({ productCategory }) => {
        return categoryActive ? productCategory[categoryName] : false;
      })
    );
  });

  console.log(data);
  //check if data is empty
  if (!data.length) {
    // if data empty is true, check if any category is active
    const categoryIsActive = Object.values(categoryState).every((item) => {
      return item === false;
    });
    console.log(categoryIsActive);
    if (!categoryIsActive) {
      return;
    }
    // since data empty is true and no category is active return categoryDatalist(original data without any filter)
    console.log('original data is passed');
    return categoryDataList;
  }
  console.log('filtered data is passed');
  return data;
};

export { getCategoryData };
