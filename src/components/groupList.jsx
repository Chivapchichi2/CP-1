import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({ items, valueProperty, contentProperty, onItemSelect }) => {
  const itemsObj = { ...items };
  return (
    <ul className="list-group">
      {Object.keys(itemsObj).map(item => (
        <li
          key={itemsObj[item][valueProperty]}
          className="list-group-item"
          onClick={() => onItemSelect(itemsObj[item])}
          onKeyDown={() => {}}
          role="none"
        >
          {itemsObj[item][contentProperty]}
        </li>
      ))}
    </ul>
  );
};

GroupList.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name',
};

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  valueProperty: PropTypes.string,
  contentProperty: PropTypes.string,
  onItemSelect: PropTypes.func.isRequired,
};

export default GroupList;
