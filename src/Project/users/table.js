import React, { useState, useEffect } from "react";
import * as client from "./client";
import { BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill, BsPencil } from "react-icons/bs";

function UserTable() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        username: "",
        password: "",
        role: "USER",
    });
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (error) {
            console.log(error);
        }
    };

    const selectUser = async (user) => {
        try {
            const response = await client.findUserById(user._id);
            setUser(response);
        }
        catch (error) {
            console.log(error);
        }
    }

    const updateUser = async () => {
        try {
            const response = await client.updateUser(user);
            setUsers(users.map((u) => u._id === user._id ? user : u));
        } catch (error) {
            console.log(error);
        }
    }

    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <h1>User List</h1>
            <table className="table">
                <thead> <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                    <tr>
                        <td>
                            {/* add placeholder to username and password */}
                            <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
                                placeholder="Username" />
                            <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
                                placeholder="Password" />

                        </td>
                        <td>
                            <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} 
                            placeholder="First Name"/>
                        </td>
                        <td>
                            <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} 
                            placeholder="Last Name"/>
                            <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td>
                            <BsFillCheckCircleFill onClick={updateUser}
                                className="me-2 text-success fs-1 text" />
                            <BsPlusCircleFill onClick={createUser}
                                className="text-success fs-1 text" />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <button className="btn btn-warning me-2">
                                <BsPencil onClick={() => selectUser(user)} />
                            </button>
                            <button className="btn btn-danger me-2">
                                <BsTrash3Fill onClick={() => deleteUser(user)} />
                            </button>
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;