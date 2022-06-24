import React from "react";

function CategoryFilter({ categories, categoryOption, onSetCategoryOption }) {

  const categoryButton = categories.map(category => (
    <button
      key={category}
      className={category === categoryOption ? "selected" : null}
      onClick={() => onSetCategoryOption(category)}
    >{category}</button>

  ))
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
