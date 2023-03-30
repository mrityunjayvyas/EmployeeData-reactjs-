import React from "react";
import { db } from "../firebase_setup/firebase";
import { async } from "@firebase/util";
import { collection, addDoc } from "firebase/firestore";
import {
  getDatabase,
  ref,
  child,
  push,
  set,
  remove,
  update,
} from "firebase/database";
import { UpdateData } from "firebase/firestore";

const saveDetails = async (employedetai) => {
  try {
    const newPostKey = push(child(ref(db), "posts")).key;

    set(ref(db, "employees/" + employedetai.id), employedetai);
  } catch (err) {
    console.log(err);
  }
};
const updates = {};

export const updateData = (employedetai) => {
  updates["employees/" + employedetai.id] = employedetai;

  update(ref(db), updates);
};

export const removeDetails = (id) => {
  remove(ref(db, "employees/" + id));
};

export default saveDetails;
