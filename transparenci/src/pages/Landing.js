import React from 'react'
import './styles/Landing.css'
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

export default function Landing() {
    const history = useHistory();

    useEffect(() => {
        for (let i = 1; i < 13; i++) {
            const z = i * 100
            anime({
                targets: `.header-letter-${i}`,
                translateX: 475,
                duration: 2500 + z,
                // easing: 'easeInOutExpo'

            });

        }
    }, [])

    return (
        <div className="landing-body">
            <div className="landing-title">
                <h1 className="header-letter-1 h1-letter"> T </h1>
                <h1 className="header-letter-2 h1-letter"> R </h1>
                <h1 className="header-letter-3 h1-letter"> A </h1>
                <h1 className="header-letter-4 h1-letter"> N </h1>
                <h1 className="header-letter-5 h1-letter"> S </h1>
                <h1 className="header-letter-6 h1-letter"> P </h1>
                <h1 className="header-letter-7 h1-letter"> A </h1>
                <h1 className="header-letter-8 h1-letter"> R </h1>
                <h1 className="header-letter-9 h1-letter"> E </h1>
                <h1 className="header-letter-10 h1-letter"> N </h1>
                <h1 className="header-letter-11 h1-letter"> C </h1>
                <h1 className="header-letter-12 h1-letter"> I </h1>
            </div>
            <div className="landing-header">
                <h3 className="landing-description">Share your Vibes and Passions.</h3>
            </div>


            <div className="landing-buttons">
                <button className="landing-login-button btn"
                    onClick={() => {
                        history.push("/login")
                    }}
                >
                    <span className="text">Text</span>
                    <span className="flip-front">Login</span>
                    <span className="flip-back">Login</span>
                </button>
                <button className="landing-register-button btn"
                      onClick={() => {
                        history.push("/register")
                    }}
                >
                    <span className="text">Text</span>
                    <span className="flip-front">Register</span>
                    <span className="flip-back">Register</span>
                </button>
            </div>
        </div>
    )
}
