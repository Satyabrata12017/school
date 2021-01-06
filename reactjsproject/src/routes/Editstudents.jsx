import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";

function Editstudents() {
    const { id } = useParams();
    let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    rollno: "",
    address:"", 

  });
  useEffect(() => {
    loadUser();
  }, []);


  const { name, email, phone, rollno,address } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    history.push("/studentdetails");
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };
    return (
        <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Student</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Student Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter student E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter student Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Student Rollno"
              name="rollno"
              value={rollno}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Student Address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Update Student</button>
        </form>
      </div>
    </div>
    );
}

export default Editstudents;
