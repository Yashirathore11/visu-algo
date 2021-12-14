import React, { useState, useEffect } from 'react';
import "../styles/Home.css"
import {ReactComponent as Github} from "../assets/github.svg";
import Sorting from "../assets/sorting.svg";
import Pathfinding from '../assets/pathfinding.svg';
import Searching from '../assets/searching.svg';
import Coding from '../assets/Coding.svg';
import Launching from '../assets/Launching.svg';
import Y from "../assets/Y.jpg";
import "particles.js";
import particleJSON from "../assets/particles.json";
import {Link} from "react-router-dom";
const Home = () => {
    useEffect(() => {
        window.particlesJS("particles-js",particleJSON );
      }, []);
return(
    <div className="backgroundHome">
        <div id="particles-js"></div>
        <div className="hometop">
            <div className="link">
                <div onClick={() => window.open("https://github.com/Yashirathore11/visu-algo", "_blank")}>
                    <Github/>
                </div>

                <h1 style={{
                    color: "#fff",
                }}>VISU<span
                    style={{
                        color:
                            "#2ed327"
                    }}>ALgo</span></h1>
                <a href='#footer' style={{
                    color: "#fff",
                }}>About Us</a>
            </div>

            <div className={"main-content"}>
                <div>
                    <p>
                        Algorithm visualization illustrates how algorithms work in a graphical way.
                        It mainly aims to simplify and deepen the understanding of algorithms operation.
                        We Introduce Visualgo for visualising data structures and algorithms through animation.
                    </p>
                    <Link to={"/cli"} className={"btn btn-success"}>Learn Algorithms</Link>
                    {/*<a href="/Visualgo/cli" className="btn btn-success">Learn Algorithms</a>    */}
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card">
                            <img src={Sorting} className="card-img-top" height="157px" />
                                <div className="card-body">
                                    <h5 className="card-title">Sorting Techniques</h5>
                                    <p className="card-text">Implementing and visualizing various sorting algorithms to specify the way to arrange data in a particular order.</p>
                                    <Link to={"/sorting"} className={"btn btn-outline-success"}>Proceed</Link>                                   
                                </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src={Pathfinding} className="card-img-top" height="157px" />
                            <div className="card-body">
                                <h5 className="card-title">Pathfinding Techniques</h5>
                                <p className="card-text">Finding the shortest path for a given starting point and ending point by implementing various pathfinding algorithms.</p>
                                <Link to={"/pathfinding"} className={"btn btn-outline-success"}>Proceed</Link>
                           </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src={Searching} className="card-img-top" height="157px" />
                            <div className="card-body">
                                <h5 className="card-title">Searching Techniques</h5>
                                <p className="card-text">Implementing and visualizing searching algorithms to find whether an element is present in collection or not.
                                </p>
                                <Link to={"/searching"} className={"btn btn-outline-success"}>Proceed</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div id="footer" className="container1">
                <h1 style={{
                    fontSize: "40px",
                    color: "#fff",
                    textAlign:"center",
                    paddingTop: "35px",
                    paddingBottom: "35px",
                    fontWeight: "bold"
                }}>Our  <span
                    style={{
                        color: "#2ed327"
                    }}>Team</span></h1>

            </div> */}
            <div id="footer" className={"teams"}>
            <h1>
                Our &nbsp;
                <span>Team</span>
            </h1>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="teamCard">
                        <img src={Coding} alt=""/>
                        <h5>Yashi Rathore</h5>
                        <p>
                        I’m Yashi Rathore! I’m a web and mobile app developer, currently pursuing (Btech+Mtech) Integrated in IT from IIPS Davv. 
                        Being a tech-enthusiast I love to explore new technologies and use them to solve real-life problems.
                        </p>
                        <div className={"teamIconWrapper"}>
                            <a href="mailto:yashirathore11@gmail.com">
                            <i className="fas fa-envelope"></i>
                                </a>
                            <a href="https://github.com/Yashirathore11">
                            <i className="fab fa-github"></i>
                                </a>
                            <a href="https://www.linkedin.com/in/yashi-rathore-70029317b/">
                            <i className="fab fa-linkedin"></i>
                                </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="teamCard">
                        <img src={Launching} alt=""/>
                        <h5>Priyanshi Bairagi</h5>
                        <p>
                        I’m Priyanshi Bairagi! I’m a front end developer and a creative coder. Currently pursuing Btech+Mtech in IT from davv.
                        </p>
                        <div className={"teamIconWrapper"}>
                            <a href="mailto:Priyanshibairagi@gmail.com">
                                <i className="fas fa-envelope"></i>
                            </a>
                            <a href="https://github.com/priyanshi-bairagi">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/priyanshi-bairagi-0ba177175">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>


    </div>
);
}
export default Home;


