import React from "react";

import Logo from "../assets/images/oh name black.png";

import classes from "../styles/Header.module.css";

const Header = () => {
    return (
        <div className={classes.headerRoot}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <img src={Logo} alt="logo" />
                </div>

                <div className={classes.headerControls}>
                    <div className={classes.navigation}>
                        <ul>
                            <li>
                                <a>About Us</a>
                            </li>
                            <li>
                                <a>Team</a>
                            </li>
                            <li>
                                <a>Contact Us</a>
                            </li>

                            <li>
                                <button>Theme</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
