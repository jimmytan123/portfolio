import { useState } from 'react';

const FilterButtonGroup = ({ buttons, setFilter }) => {
  // set default active button class when first load
  // when filter button is clicked, set active class to that button
  const [clickedId, setClickedId] = useState(0);

  const handleOnClick = (index, button) => {
    setClickedId(index);
    setFilter(button.slug);
  };

  return (
    <>
      {buttons &&
        buttons.map((button, index) => {
          return (
            <button
              key={index}
              onClick={() => handleOnClick(index, button)}
              className={
                index === clickedId ? 'customButton active' : 'customButton'
              }
            >
              {button.name}
            </button>
          );
        })}
    </>
  );
};

export default FilterButtonGroup;
