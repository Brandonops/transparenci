import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setUserData } from '../redux/actions/userActions';
import './styles/Navbar.css';

export default function Navbar() {
    const history = useHistory();
    const userInfo = useSelector((state) => state.userReducer)
    return (
        <div className="nav-container row">
            <div className="col"></div>
            <h3 className="logo-title col" onClick={() => history.push("/home")}>TRANSPARENCI</h3>
            <div className="col username-display">
                <div>
                    {
                        userInfo === null ? <button onClick={
                            () => {
                                history.push("/login");
                            }}>
                            Log in here</button> :
                            <div>{userInfo.username}</div>
                    }
                </div>
                <div>
                    {
                        userInfo === null ? <div></div> :
                        <button className="logout-btn" onClick={
                            () => {
                                fetch("http://localhost:4000/api/v1/users/logout")
                                    .then((res) => res.json())
                                    .then((data) =>{
                                        if (data.error) {
                                            console.log(data.error)
                                        } else {
                                            setUserData(null)
                                            history.push("/");
                                        }
                                    })
                            }}>
                            Logout</button>

                    }
                </div>
            </div>
        </div>
    )
}
