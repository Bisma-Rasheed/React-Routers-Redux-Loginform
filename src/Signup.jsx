import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.dataReducer.users);

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    var obj = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password
    };

    function setData(e) {
        e.preventDefault();

        if (users.length === 0) {
            dispatch({ type: 'Signup', payload: obj });
            setFirstname('');
            setLastname('');
            setUsername('');
            setPassword('');
            navigate('/');
        }
        else {
            for (var i = 0; i < users.length; i++) {
                if (users[i].username === obj.username) {
                    alert('username already exist');
                    break;
                }
                else if (users[i].username !== obj.username && i === users.length - 1) {
                    dispatch({ type: 'Signup', payload: obj });
                    setFirstname('');
                    setLastname('');
                    setUsername('');
                    setPassword('');
                    navigate('/');
                    break;
                }
            }
        }
    }

    return (
        <>
            <nav className="navbar"><Link to="/">Login</Link></nav>
            <div className="main_div">
                <form>
                    <label htmlFor="firstname">Firstname</label>
                    <input name="firstname"
                        type="text"
                        placeholder="Enter your firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}></input>
                    <br />
                    <label htmlFor="lastname">Lastname</label>
                    <input name="lastname"
                        type="text"
                        placeholder="Enter your lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}></input>
                    <br />
                    <label htmlFor="username">Username</label>
                    <input name="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}></input>
                    <br />
                    <label htmlFor="password">Password</label>
                    <input name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>
                    <br />
                    <button onClick={setData}>Register</button>
                    <br />
                    <Link to="/">Login</Link>
                </form>
            </div>
        </>
    )
}

export default Signup;