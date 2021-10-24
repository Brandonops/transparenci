import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setUserData } from '../redux/actions/userActions';
import './styles/Login.css'

export default function Register() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="login-body">
            <div className="login-heading-content">
                <h2>
                    Welcome back to
                </h2>
                <h1>Transparenci</h1>
            </div>
            <div className="login-form-container">
                <h3>Please Log in with your Email and Password below</h3>
                <form className="login-form"
                    onSubmit={
                        (e) => {
                            e.preventDefault();
                            fetch('http://localhost:4000/api/v1/users/register', {
                              method: 'POST',
                              credentials: 'include',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                username,
                                email,
                                password
                              }),
                            })
                              .then((res) => res.json()) 
                              .then((data) => {
                                if (data.error) {
                                  alert(data.error);
                                } else {
                                    dispatch(setUserData(data))
                                  history.push('/login');
                                }
                              });
                        }
                    }
                >
                      <div className="label-input-group">
                        <label className="login-labels" htmlFor="username">Username:</label>
                        <input
                            className="login-inputs"
                            id="username"
                            name="username"
                            type="text"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            >
                        </input>
                    </div>
                    <div className="label-input-group">
                        <label className="login-labels" htmlFor="email">Email:</label>
                        <input
                            className="login-inputs"
                            id="email"
                            name="email"
                            type="text"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            >
                        </input>
                    </div>
                    <div className="label-input-group">
                        <label className="login-labels" htmlFor="password">Password:</label>
                        <input
                            className="login-inputs"
                            id="password"
                            name="password"
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            >
                        </input>
                    </div>
                    <button className="login-login-button btn-2"
                    >
                        <span className="text-2">Text</span>
                        <span className="flip-front-2">Login</span>
                        <span className="flip-back-2">Login</span>
                    </button>
                </form>
                    <div>
                        Don't have an account yet? <span style={{"fontWeight": "bolder"}} >Click here</span>
                    </div>
            </div>
        </div>
    )
}



