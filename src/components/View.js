import React from "react";

const view = (props) => {
  return (
    <div className="view">
      <div className="notepad">
        <p>
          First name:<span>{props.firstname}</span>
        </p>
        <p>
          Last name:<span>{props.lastname}</span>
        </p>
        <p>
          Phone:<span>{props.phone}</span>
        </p>
        <p>
          Role:<span>{props.role}</span>
        </p>
        <p>
          Message:<span>{props.message}</span>
        </p>
      </div>
    </div>
  );
};

export default view;
