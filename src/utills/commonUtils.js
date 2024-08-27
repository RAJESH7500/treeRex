export const updateFilterData = (filters, dataCopy) => {
  const colors = filters['color']
    .filter((item) => item.isActive)
    .map((item) => item.value);
  const gender = filters['gender']
    .filter((item) => item.isActive)
    .map((item) => item.value);
  const price = filters['price']
    .filter((item) => item.isActive)
    .map((item) => item.value);
  const type = filters['type']
    .filter((item) => item.isActive)
    .map((item) => item.value);
  let filteredData = dataCopy;
  if (colors.length) {
    filteredData = dataCopy.filter((product) =>
      colors.includes(product.color.toLowerCase())
    );
  }
  if (gender.length) {
    filteredData = dataCopy.filter((product) =>
      gender.includes(product.gender.toLowerCase())
    );
  }
  if (type.length) {
    filteredData = dataCopy.filter((product) =>
      type.includes(product.type.toLowerCase())
    );
  }
  if (price.length) {
    let min = 0,
      max = 0;
    min = Number(price[0].split('-')[0]);
    max = Number(price.at(-1).split('-')[1]);
    if (!max) max = Number.MAX_SAFE_INTEGER;
    filteredData = dataCopy.filter(
      (product) => product.price >= min && product.price <= max
    );
  }
  return filteredData;
};
