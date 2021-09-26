import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Api from '../../API';
import MyLoader from '../myLoader/myLoader';
import Qualities from './qualities';

const User = ({ id }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    Api.users.getById(id).then(setUser);
  }, []);
  const history = useHistory();
  const handleBtnClick = () => {
    history.replace('/users');
  };
  const renderUser = ({
    name,
    profession,
    qualities,
    completedMeetings,
    rate,
  }) => (
    <div>
      <h2>{name}</h2>
      <h3>Профессия: {profession.name}</h3>
      <Qualities qualities={qualities} />
      <h3>Встретился, раз: {completedMeetings}</h3>
      <h3>Оценка: {rate}</h3>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleBtnClick}
      >
        Все пользователи
      </button>
    </div>
  );
  return <>{user ? renderUser(user) : <MyLoader />}</>;
};

User.propTypes = {
  id: PropTypes.string.isRequired,
};

export default User;
