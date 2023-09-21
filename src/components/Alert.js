import React from "react";

function Alert(props) {
  const capitlize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div className="alert alert-success" role="alert">
          <strong>{capitlize(props.alert.type)}!!</strong> {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
