import React from "react";
import { removeDetails } from "../Details/Details";
import { useNavigate } from "react-router-dom";
import { navigate } from "react-router-dom";

const Employedata = (props) => {
  const onDelete = (id) => {
    removeDetails(id);
    props.showAlert("Employee data Deleted", "danger");
  };
  const nevigate = useNavigate();
  console.log(props);
  if (props === undefined) {
    return <div></div>;
  } else {
    return (
      <tr>
        <th scope="row">{props.deatails.id}</th>
        <td>{props.deatails.name}</td>
        <td>{props.deatails.email}</td>
        <td>{props.deatails.contect}</td>
        <td>
          <button
            onClick={() => onDelete(props.deatails.id)}
            type="submit"
            className="btn btn-danger"
          >
            delete
          </button>
        </td>
        <td>
          <button
            onClick={() =>
              nevigate("/addemployeedtails", { state: props.deatails })
            }
            type="submit"
            className="btn btn-primary"
          >
            Edit
          </button>
        </td>
      </tr>
    );
  }
};

export default Employedata;
