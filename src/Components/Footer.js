import React from "react";

import Logo from "../assets/images/oh_name_white.png";

import classes from "../styles/Footer.module.scss";

const Footer = () => {
    return (
        <div className={classes.footerRoot}>
            <div className={classes.footer}>
                <div className={classes.logo}>
                    <img src={Logo} alt="logo" />
                </div>

                <div className={classes.footerLinks}>
                    <div className={classes.footerColumn}>
                        <p className={classes.footerColumnHeader}>
                            Social Media
                        </p>

                        <ul>
                            <li>
                                <a href="">Instagram</a>
                            </li>
                            <li>
                                <a href="">Twitter</a>
                            </li>
                            <li>
                                <a href="">LinkedIn</a>
                            </li>
                        </ul>
                    </div>

                    <div className={classes.footerColumn}>
                        <p className={classes.footerColumnHeader}>Contact</p>

                        <ul>
                            <li>
                                <a href="">Know the Team</a>
                            </li>
                            <li>
                                <a href="">Email</a>
                            </li>
                            <li>
                                <a href="">Blogs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
