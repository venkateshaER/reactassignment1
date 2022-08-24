import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
interface Iprops{}
interface Istate{}

let ReviewAndLanch:React.FC=()=>{

    return(
        <React.Fragment>
            <div className="container mt-3">
            <label className='fw-bold h3'>
            Review And Lanch
       </label>
        <select className='margin-left1 btn btn-outline-dark dropdown-toggle shadow-lg'>
        <option value="1">Region</option>
          <option value="2">Us-East-1</option>
          <option value="3">Asia Pacific-Mumbai</option>
          <option value="4">US-West-1</option>
        </select>
        <div className="row">
                        <div className="col-10">
                            <button className="btn btn-outline-dark m-2 shadow-lg">1. Choose Image</button>
                            <button className="btn btn-outline-dark m-2 shadow-lg">2. Choose Instance Type</button>
                            <button className="btn btn-outline-dark m-2 shadow-lg">3. Choose Storage And Network</button>
                            <button className="btn btn-outline-dark m-2 shadow-lg">4. Configure Security</button>
                       <button className="btn btn-primary m-2 shadow-lg">5. Review And Lanch</button> 

                       {/* <button className="btn btn-outline-dark m-2 shadow-lg" onClick={updateprice}>test</button> 
                       <p>{state.count}</p> */}
                       
                        </div> 
                    
                    <div className="col">
                        </div>
                        </div>
                        <div className="row">
                    <div className="col-9">
                        {/* write code */}
                        </div>
                        <div className="col">
                        <div className="col">
                            <Card style={{ width: '18rem'}} className="shadow-lg">
                                <Card.Body>
                                    <Card.Title>Cost Estimates</Card.Title>
                                    <Card.Text>
                                        $0
                                    </Card.Text>
                                <hr></hr>
                                
                               {/* $ {state.count} /mo */}
                               0$ /mo
                                </Card.Body>
                            </Card>
                        </div>
                        </div>
                    </div>
            <div className="row">
                        <div className="col">
                            <Link to={"/configuresecurity"} className="btn btn-dark mt-3 m-1">Back</Link>
                            <Link to={"/"} className="btn btn-success mt-3 m-1">Proceed</Link>
                        </div>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default ReviewAndLanch;