import React from "react";
const SearchStatus = ({ length }) => {
  const renderTitle = (num) => {
    if (num === 0) {
      return (
        <h2>
          <span className="badge bg-danger">Никто с тобой не тусанет</span>
        </h2>
      );
    }
    if (num > 1 && num < 5) {
      return (
        <h2>
          <span className="badge bg-primary">{num} человека тусанут с тобой сегодня</span>
        </h2>
      );
    }

    return (
      <h2>
        <span className="badge bg-primary">{num} человек тусанут с тобой сегодня</span>
      </h2>
    );
  };
  return <>{renderTitle(length)}</>;
};

export default SearchStatus;
