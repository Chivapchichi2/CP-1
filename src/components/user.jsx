import React from "react";

const User = ({ name, profession, qualities, completedMeetings, rate, id, handleClick }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{profession.name}</td>
      <td>
        {qualities.map((el) => (
          <span className={`badge bg-${el.color} m-1`} key={el._id}>
            {el.name}
          </span>
        ))}
      </td>
      <td>{completedMeetings}</td>
      <td>{`${rate}/5`}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={() => handleClick(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
