import "./Inputsection.css";
import saveDetails from "../Details/Details";
import { useLocation } from "react-router-dom";
import { updateData } from "../Details/Details";
import Alert from "../components/Alert";
import { useState } from "react";

var data = {};

const onChangeName = (event) => {
  data.name = event.target.value;
};
const onchangeEmpId = (event) => {
  data.id = event.target.value;
};
const onchangeEmail = (event) => {
  data.email = event.target.value;
};
const onchangeContect = (event) => {
  data.contect = event.target.value;
};

const Inputsection = (props) => {
  const onclick = () => {
    if (deatails === "undefined") {
      saveDetails(data);
      props.showAlert("Employee data added", "success");
    } else {
      updateData(data);
      props.showAlert("Employee data Edited", "success");
    }
  };

  const location = useLocation();
  const deatails = location.state;
  data = deatails ?? {};
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label className="form-label">Enter Your Name</label>
          <input
            onChange={onChangeName}
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            defaultValue={deatails?.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Employee Id</label>
          <input
            onChange={onchangeEmpId}
            type="text"
            className="form-control"
            id="email"
            defaultValue={deatails?.id}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Entar Email id</label>
          <input
            onChange={onchangeEmail}
            type="Email"
            className="form-control"
            id="email"
            defaultValue={deatails?.email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Entar Contect Number</label>
          <input
            onChange={onchangeContect}
            type="Number"
            className="form-control"
            id="phone"
            defaultValue={deatails?.contect}
          />
        </div>

        <button onClick={onclick} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Inputsection;
