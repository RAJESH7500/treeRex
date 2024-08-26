import React from 'react';

function Filter({ filterItem, color, setColor }) {
  const handleChange = (e) => {
    const value = e.target.checked;
    setColor({
      ...color,
      isChecked: false,
      [e.target.name]: value,
    });
  };
  console.log('properties are ', color);

  return (
    <div className="card filterCard">
      <h4>Colour</h4>
      <form className="color-form" action="">
        <label className="fcontainer">
          <h5>Red</h5>
          <input type="checkbox" name="red" onChange={handleChange} />
          <span className="checkmark"></span>
        </label>

        <label className="fcontainer">
          <h5>Blue</h5>
          <input type="checkbox" name="blue" onChange={handleChange} />
          <span className="checkmark"></span>
        </label>

        <label className="fcontainer">
          <h5>Green</h5>
          <input type="checkbox" name="green" onChange={handleChange} />
          <span className="checkmark"></span>
        </label>
      </form>
      <h5>Gender</h5>
      <form className="color-form" action="">
        <label className="fcontainer">
          <h5>Men</h5>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <label className="fcontainer">
          <h5>Women</h5>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </form>
      <h5>Price</h5>
      <form className="color-form" action="">
        <label className="fcontainer">
          <h5>0-Rs250</h5>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <label className="fcontainer">
          <h5>Rs251-450</h5>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <label className="fcontainer">
          <h5>Rs450</h5>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </form>
      <h5>Type</h5>
      <form className="color-form" action="">
        <label className="fcontainer">
          <h5>Polo</h5>
          <input type="checkbox" name="polo" onChange={handleChange} />
          <span className="checkmark"></span>
        </label>

        <label className="fcontainer">
          <h5>Hoodie</h5>
          <input type="checkbox" name="hoodie" onChange={handleChange} />
          <span className="checkmark"></span>
        </label>

        <label className="fcontainer">
          <h5>Basic</h5>
          <input type="checkbox" name="basic" onChange={handleChange} />
          <span className="checkmark"></span>
        </label>
      </form>
      <hr />

      {(color.red ||
        color.green ||
        color.blue ||
        color.polo ||
        color.basic ||
        color.hoodie) && (
        <a href="#" className="btn btn-primary" onClick={filterItem}>
          Apply
        </a>
      )}
    </div>
  );
}

export default Filter;
