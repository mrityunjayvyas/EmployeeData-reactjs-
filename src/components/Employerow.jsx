import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Employedata from "../components/Employedata";

const Employerow = (props) => {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    return onValue(
      ref(db, "employees/"),
      (snapshot) => {
        console.log(snapshot.val());
        var entries = Object.entries(snapshot.val());
        if (entries.length !== employeeList.length) {
          setEmployeeList(entries);
        }
      },

      function (error) {
        console.log("Error: " + error.code);
      }
    );
  }, [employeeList]);
  console.log(employeeList);
  return (
    <tbody>
      {employeeList.map((e) => (
        <Employedata showAlert={props.showAlert} deatails={e[1]} />
      ))}
    </tbody>
  );
};

export default Employerow;
