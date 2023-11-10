import React from "react";

const PageButton = ({ index, handlePage, page }) => {
  return (
    <button
      key={index}
      className={`border px-2 py-1 w-9 rounded-full font-bold ${
        index === page ? `bg-amber-600` : null
      }`}
      onClick={() => handlePage(index)}
    >
      {index + 1}
    </button>
  );
};

export default PageButton;
