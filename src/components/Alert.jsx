import React from "react";

const alert = (props) => {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.masg}</strong>
      </div>
    )
  );
};

export default alert;
