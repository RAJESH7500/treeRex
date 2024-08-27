import React from 'react';

function Filter({ filters, addFilter, isOpen, setIsOpen }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="filterCard">
      <button className="close-button" onClick={() => setIsOpen(!isOpen)}>
        close
      </button>
      <h3>Colour</h3>
      <form className="color-form" action="">
        {filters.color.map((item) => (
          <div class="checkbox-container" key={item.id}>
            <input
              type="checkbox"
              id={item.value}
              name={item.value}
              onChange={() => addFilter('color', item)}
              checked={item.isActive}
            />
            <label for="myCheckbox">{item.name}</label>
          </div>
        ))}
      </form>
      <h3 className="mt-2">Gender</h3>
      <form className="color-form" action="">
        {filters.gender.map((item) => (
          <div class="checkbox-container" key={item.id}>
            <input
              type="checkbox"
              id={item.value}
              name={item.value}
              onChange={() => addFilter('gender', item)}
              checked={item.isActive}
            />
            <label for="myCheckbox">{item.name}</label>
          </div>
        ))}
      </form>
      <h3 className="mt-2">Price</h3>
      <form className="color-form" action="">
        {filters.price.map((item) => (
          <div class="checkbox-container" key={item.id}>
            <input
              type="checkbox"
              id={item.value}
              name={item.value}
              onChange={() => addFilter('price', item)}
              checked={item.isActive}
            />
            <label for="myCheckbox">{item.name}</label>
          </div>
        ))}
      </form>
      <h3 className="mt-2">Type</h3>
      <form className="color-form" action="">
        {filters.type.map((item) => (
          <div class="checkbox-container">
            <input
              type="checkbox"
              id={item.value}
              name={item.value}
              onChange={() => addFilter('type', item)}
              checked={item.isActive}
            />
            <label for="myCheckbox">{item.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Filter;
