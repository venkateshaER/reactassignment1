import React from "react";

interface Iprops{}
interface Istate{}

let About:React.FC=()=>{

        return(
            <React.Fragment>
                <div className="container mt3">
                    <div className="row">
                        <div className="col">
                            <p className="h3 fw-bold text-success">About Us</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates eos aliquam autem aliquid laudantium beatae, et sunt officia sit, dolorum, voluptate vitae ipsam impedit quia repellendus consequuntur porro doloribus quasi!</p>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        App Name: <span className="fw-bold"> React Practice</span>
                                    </li>
                                    <li className="list-group-item">
                                        Author: <span className="fw-bold">Venktesh ER</span>
                                    </li>
                                </ul>
                              </div>
                           </div>     
                </div>
                
            </React.Fragment>
        )
}

export default About;