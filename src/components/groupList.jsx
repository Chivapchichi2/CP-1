import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  itemSelected,
}) => {
  const itemsObj = { ...items };
  return (
    <div className="d-flex flex-column">
      <ul className="list-group">
        {Object.keys(itemsObj).map(item => (
          <li
            key={itemsObj[item][valueProperty]}
            className={`list-group-item mb-1 btn btn-secondary ${
              itemSelected === itemsObj[item] ? 'active' : ''
            }`}
            onClick={() => onItemSelect(itemsObj[item])}
            onKeyDown={() => {}}
            // eslint-disable-next-line
            role="button"
          >
            {itemsObj[item][contentProperty]}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => onItemSelect()}
      >
        Сброс
      </button>
    </div>
  );
};

GroupList.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name',
  itemSelected: {},
};

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  valueProperty: PropTypes.string,
  contentProperty: PropTypes.string,
  onItemSelect: PropTypes.func.isRequired,
  itemSelected: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default GroupList;
