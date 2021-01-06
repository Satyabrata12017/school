import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Viewstudent = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    rollno: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Student Name: {user.name}</li>
        <li className="list-group-item">Student Email: {user.email}</li>
        <li className="list-group-item">Student phone: {user.phone}</li>
        <li className="list-group-item">Student Student Roll No: {user.rollno}</li>
        <li className="list-group-item">Student Address: {user.address}</li>
      </ul>
    </div>
  );
};

export default Viewstudent;
