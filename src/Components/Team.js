import React from "react";
import { Details } from "./TeamDetails";

import classes from "../styles/Team.module.scss";
import Twitter from "../Components/icons/twitter";
import Instagram from "../Components/icons/instagram";
import Linkedin from "../Components/icons/linkedin";
import Github from "../Components/icons/github";

const Team = () => {
    return (
        <div className={classes.root}>
            {Details.map((item) => {
                return (
                    <div className={classes.card}>
                        <div className={classes.imageContainer}>
                            <img src={item.img} alt={item.name} />
                        </div>

                        <div className={classes.teamRoot}>
                            <div className={classes.details}>
                                <p className={classes.name}>{item.name}</p>
                                <p className={classes.post}>{item.post}</p>
                                <p>{item.description}</p>

                                <div className={classes.socialLinks}>
                                    <p>
                                        <a href={item.twitter}>
                                            <Twitter />
                                        </a>
                                    </p>
                                    <p>
                                        <a href={item.instagram}>
                                            <Instagram />
                                        </a>
                                    </p>
                                    <p>
                                        <a href={item.linkedin}>
                                            <Linkedin />
                                        </a>
                                    </p>
                                    <p>
                                        <a href={item.github}>
                                            <Github />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Team;
