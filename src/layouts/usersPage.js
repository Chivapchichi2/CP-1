import React from 'react';
import { useParams } from 'react-router-dom';

import Users from '../components/users';
import User from '../components/users/user';

const UsersPage = () => {
  const { userId } = useParams();
  return <>{userId ? <User id={userId} /> : <Users />}</>;
};
export default UsersPage;
