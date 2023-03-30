import React from "react";
import { Navigate } from "react-router-dom";
import "../components/Datasheet.css";
import { useNavigate } from "react-router-dom";
import Employerow from "./Employerow";

const Datasheet = (props) => {
  const nevigate = useNavigate();
  return (
    <div>
      <div className="container2 container">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Contect Number</th>
              </tr>
            </thead>
            <Employerow showAlert={props.showAlert} />
          </table>
        </div>
      </div>
      <div className="add">
        <button
          onClick={() => nevigate("/addemployeedtails")}
          type="button"
          className="bto btn-light"
        >
          ADD EMPLOYEE DETAILS
        </button>
      </div>
    </div>
  );
};

export default Datasheet;
