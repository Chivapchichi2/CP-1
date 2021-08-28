import React from "react";
import Qualities from "./qualities";
import BookMark from "./bookMark";

const User = ({ name, profession, qualities, completedMeetings, rate, _id, onDelete, status, onStatusClick }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{profession.name}</td>
      <td>
        <Qualities qualities={qualities} />
      </td>
      <td>{completedMeetings}</td>
      <td>{`${rate}/5`}</td>
      <td>
        <BookMark status={status} onStatusClick={() => onStatusClick(_id)} />
      </td>
      <td>
        <button type="button" className="btn btn-danger" onClick={() => onDelete(_id)} disabled={status}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
