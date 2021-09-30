import React,{useState, useEffect}from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow]=useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    }, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className ="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-smiley-love-flatart-icons-lineal-color-flatarticons.png"
                alt="Netflix Logo"
            />
            
        </div>
    );
}

export default Nav