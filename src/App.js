// import { useState } from "react";
import "./App.scss";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Team from "./Components/Team";

import Logo from "./assets/images/oh_name_white.png";

function App() {
    // const [showTeam, setShowTeam] = useState(false);

    return (
        <div className="Root">
            <div className="page">
                <Header />

                <div className="body">
                    <div className="home">
                        <img src={Logo} alt="Orange Hacks" />
                        {/* <p>OrangeHacks</p> */}
                    </div>
                    <div className="about_us">
                        <div className="aboutUsHeader">About Us</div>
                        <div>
                            <p className="content">
                                OrangeHacks is a vibrant and inclusive
                                technology community dedicated to empowering
                                individuals to pursue their passions and build
                                meaningful skills. Founded by a group of tech
                                enthusiasts who share a common goal of fostering
                                a love for technology.
                            </p>
                            <p className="content">
                                We are dedicated to empowering individuals to
                                pursue their passions in technology. We provide
                                a platform for members to connect, collaborate,
                                and grow their knowledge through regular
                                meetups, workshops, hackathons, and coding
                                competitions.
                            </p>
                            <p className="content">
                                Our goal is to create a safe space for people to
                                explore their interests in technology,
                                collaborate with others, and develop new skills.
                                We believe that technology has the power to
                                transform communities and drive positive change,
                                and we are committed to helping people harness
                                that power to make a difference.
                            </p>
                        </div>
                    </div>
                    <div className="teams">
                        <div className="teamHeader">Events</div>
                        <Team />
                    </div>

                    <div className="teams">
                        <div className="teamHeader">Team</div>
                        <Team />
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default App;
