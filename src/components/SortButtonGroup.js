import { useState } from 'react';

const SortButtonGroup = ({ buttons, handleChangeCategory }) => {
  const [clickedId, setClickedId] = useState(0);

  const handleOnClick = (index, button) => {
    setClickedId(index);
    handleChangeCategory(button.slug);
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

export default SortButtonGroup;
