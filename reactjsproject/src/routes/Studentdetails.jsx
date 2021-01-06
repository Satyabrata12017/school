import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

function Contactus() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        setUser(result.data);
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
    };
    return (
        <div class="container my-4">
            

            <table class="table my-5 text-center">
                <thead class="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No.</th>
                        <th>Rollno</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.rollno}</td>
                            <td>
                                <Link class="btn btn-primary mr-2" to={`/viewstudent/${user.id}`}>View</Link>
                                <Link
                                    class="btn btn-outline-primary mr-2"
                                    to={`/editstudent/${user.id}`}>Edit</Link>
                                <Link
                                    class="btn btn-danger"
                                    onClick={() => deleteUser(user.id)}>Delete</Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default Contactus;
