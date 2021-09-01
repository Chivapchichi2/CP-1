import React from 'react';
import PropTypes from 'prop-types';

import Qualities from './qualities';
import BookMark from './bookMark';

const User = ({
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  _id,
  onDelete,
  status,
  onStatusClick,
}) => (
  <tr>
    <td>{name}</td>
    <td>
      <Qualities qualities={qualities} />
    </td>
    <td>{profession.name}</td>
    <td>{completedMeetings}</td>
    <td>{`${rate}/5`}</td>
    <td>
      <BookMark status={status} onStatusClick={() => onStatusClick(_id)} />
    </td>
    <td>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onDelete(_id)}
        disabled={status}
      >
        Delete
      </button>
    </td>
  </tr>
);

User.defaultProps = {
  status: false,
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.shape().isRequired,
  qualities: PropTypes.arrayOf(PropTypes.object).isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  status: PropTypes.bool,
  onStatusClick: PropTypes.func.isRequired,
};

export default User;
