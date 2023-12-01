import * as client from './client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Signin() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const signin = async () => {
        const user = await client.signin(credentials);
        console.log(user);
        navigate("/Project/users/profile");
    }
    return (
        <div>
        <h3>Sign In</h3>
        <input value = {credentials.username} onChange = {(e) => setCredentials({...credentials, username: e.target.value})} className = "form-control mb-2" type = "text" placeholder = "Username"/>
        <input value = {credentials.password} onChange = {(e) => setCredentials({...credentials, password: e.target.value})} className = "form-control mb-2" type = "password" placeholder = "Password"/>
        <button onClick = {signin} className = "btn btn-primary w-100">Sign In</button>
        </div>
    );
}
export default Signin;