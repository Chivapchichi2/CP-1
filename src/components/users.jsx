import React, { useState } from "react";

import Api from "../API";
import User from "./user";

const Users = () => {
  const [users, setUsers] = useState(Api.users.fetchAll());

  const handleClick = (id) => {
    setUsers(users.filter((el) => el._id !== id));
  };
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
  return (
    <>
      {renderTitle(users.length)}
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((el) => (
              <User
                key={el._id}
                name={el.name}
                profession={el.profession}
                qualities={el.qualities}
                completedMeetings={el.completedMeetings}
                rate={el.rate}
                id={el._id}
                handleClick={handleClick}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
