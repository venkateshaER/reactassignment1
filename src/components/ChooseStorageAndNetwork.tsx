import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
interface Iprops{}
interface Istate{}

let ChooseStorageAndNetwork:React.FC=()=>{
    const [selected, setSelected] = useState<String>('20');
    const radioLinux = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.value);
       
      };


const [val,setVal]=useState([])
    return(
        <React.Fragment>
            <div className="container mt-3">
            
            <label className='fw-bold h3'>
            Choose Storage And Network
       </label>
        <select className='margin-left btn btn-outline-dark dropdown-toggle shadow-lg'>
        <option value="1">Region</option>
          <option value="2">Us-East-1</option>
          <option value="3">Asia Pacific-Mumbai</option>
          <option value="4">US-West-1</option>
        </select>
            <div className="row">
                        <div className="col-10">
                            <button className="btn btn-outline-dark m-2">1. Choose Image</button>
                            <button className="btn btn-outline-dark m-2">2. Choose Instance Type</button>
                            <button className="btn btn-primary m-2">3. Choose Storage And Network</button>
                            <button className="btn btn-outline-dark m-2">4. Configure Security</button>
                            <button className="btn btn-outline-dark m-2">5. Review And Lanch</button>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                    <div className="row">
                    <div className="col-10">
                    <div className="card shadow-lg mt-3">
                    
                    <fieldset>
                        <div className="container">
                        <div className="row">
                <div className="col">
                <div className="container">
                        <div className="row">
                    <p className="card-text">
                {/* <Link to={`/chooseinstancetype/${selectedLinux}/Linux-2`} className="text-decoration-none text-success fw-bold"> Linux 2 Image</Link> */}
                {/* <Link to={`/chooseinstancetype`} className="text-decoration-none text-success fw-bold"> Linux 2 Image</Link> */}
                <div className="row">
                <div className="col-2">
                   <p className="text-center fw-bold mt-3 small">Type</p>
                   <select className='btn btn-outline-dark dropdown-toggle small shadow-lg m-1'>
       
          <option id="SSD" value="6" >SSD</option>
          <option id="Magnatic-disks" value="7">Magnatic disks</option>
         
        </select>
                </div>
                
                <div className="col-1">
                   <p className="text-center fw-bold mt-3 small">Volume</p>
                   <p className="text-center small">Root</p>
                   
                </div>
                <div className="col-2">
                   <p className="text-center fw-bold mt-3 small">Capacity (GB)</p>
                   <input
                                    required={true}
                                    name='rootCapacity'
                                   // onChange={updateInput}
                                    type="text" className="form-control"/>
                   
                </div>
                <div className="col-2">
                   <p className="text-center fw-bold mt-3 small">Encryption</p>
                  <label> &emsp;&emsp;&emsp;&emsp;</label> <input className=""
                                    type="radio"
                                    name="ubuntu"
                                    value="20"
                                    id="ubuntu1"
                                    // onChange={radioUbuntu}
                                    // checked={isRedioUbuntu('20')}
                                />
                   
                </div>
                <div className="col-1">
                   <p className="text-center fw-bold mt-3 small">IOPS</p>
                   <p className="text-center small">600</p>
                   
                </div>
                <div className="col-2">
                   <p className="text-center fw-bold mt-3 small">Backup Required</p>
                   <label>&emsp;&emsp;&emsp;&emsp;</label> <input className=""
                                    type="radio"
                                    name="ubuntu"
                                    value="20"
                                    id="ubuntu1"
                                    // onChange={radioUbuntu}
                                    // checked={isRedioUbuntu('20')}
                                />
                   
                </div>
                <div className="col-2">
                   <p className="text-center fw-bold mt-3 small">Remarks</p>
                   <input
                                    required={true}
                                    name='rootCapacity'
                                   // onChange={updateInput}
                                    type="text" className="form-control"/>
                   
                </div>
                
                <p>

                </p>
                </div>
                {/* <br/>Linux 2 comes with 5 years of support. It provides Linux kerner 4.14 tuned for optimal performance */}
                </p>
               </div>
               </div>
                </div>
                            </div>
                            </div>
                        </fieldset>
                        
                    </div>
                        </div>
                        
                        <div className="col-2">
                        <div className="col">
                            <Card style={{ width: '18rem'}} className="shadow-lg">
                                <Card.Body>
                                    <Card.Title>Cost Estimates</Card.Title>
                                    <Card.Text>
                                        {/* {name} : $0 */}Sample
                                    </Card.Text>
                                <hr></hr>
                                
                               $ 0 /mo
                               
                                </Card.Body>
                            </Card>
                        
                        </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-10">
                    <div className="card shadow-lg mt-3">
                    
                    <fieldset>
                        <div className="container">
                        <div className="row">
                <div className="col">
                <div className="container">
                        <div className="row">
                    <p className="card-text">
                {/* <Link to={`/chooseinstancetype/${selectedLinux}/Linux-2`} className="text-decoration-none text-success fw-bold"> Linux 2 Image</Link> */}
                {/* <Link to={`/chooseinstancetype`} className="text-decoration-none text-success fw-bold"> Linux 2 Image</Link> */}
                <div className="row">
                <div className="col-2">
                   <p className="text-center fw-bold mt-3 small">Type</p>
                   <select className='btn btn-outline-dark dropdown-toggle small shadow-lg m-1'>
       
          <option id="SSD" value="6" >SSD</option>
          <option id="Magnatic-disks" value="7">Magnatic disks</option>
         
        </select>
                </div>
                
                <div className="col-1">
                   <p className="text-center fw-bold mt-3 small">Volume</p>
                   <p className="text-center small">Root</p>
                   
                </div>
                <div className="col-2">
                   <p className="text-center fw-bold mt-3 small">Capacity (GB)</p>
                   <input
                                    required={true}
                                    name='rootCapacity'
                                   // onChange={updateInput}
                                    type="text" className="form-control"/>
                   
                </div>
                <div className="col-2">
                   <p className="text-center fw-bold mt-3 small">Encryption</p>
                  <label> &emsp;&emsp;&emsp;&emsp;</label> <input className=""
                                    type="radio"
                                    name="ubuntu"
                                    value="20"
                                    id="ubuntu1"
                                    // onChange={radioUbuntu}
                                    // checked={isRedioUbuntu('20')}
                                />
                   
                </div>
                <div className="col-1">
                   <p className="text-center fw-bold mt-3 small">IOPS</p>
                   <p className="text-center small">600</p>
                   
                </div>
                <div className="col-2">
                   <p className="text-center fw-bold mt-3 small">Backup Required</p>
                   <label>&emsp;&emsp;&emsp;&emsp;</label> <input className=""
                                    type="radio"
                                    name="ubuntu"
                                    value="20"
                                    id="ubuntu1"
                                    // onChange={radioUbuntu}
                                    // checked={isRedioUbuntu('20')}
                                />
                   
                </div>
                <div className="col-2">
                   <p className="text-center fw-bold mt-3 small">Remarks</p>
                   <input
                                    required={true}
                                    name='rootCapacity'
                                   // onChange={updateInput}
                                    type="text" className="form-control"/>
                   
                </div>
                
                <p>

                </p>
                </div>
                {/* <br/>Linux 2 comes with 5 years of support. It provides Linux kerner 4.14 tuned for optimal performance */}
                </p>
               </div>
               </div>
                </div>
                            </div>
                            </div>
                        </fieldset>
                        
                    </div>
                        </div>
                        
                    </div>

                    <div className="row">
                        <div className="col">
                            <button className="btn btn-outline-secondary mt-3 m-1">Add Volume</button>
                            
                        </div>
                    </div>
                    <div className="container mt-3">
                    <div className="row">
                        <div className="col-4">
                    <label className='fw-bold h5'>
            Choose Storage And Network (GB)
       </label>
       <input type="range" className="form-range" min="0" max="6000" id="customRange2" onChange={radioLinux}></input>
       
       <p>{selected}</p>
       </div>
       </div>
       </div>
                    
            <div className="row">
                        <div className="col">
                            <Link to={"/chooseinstancetype"} className="btn btn-dark mt-3 m-1">Back</Link>
                            <Link to={"/configuresecurity"} className="btn btn-success mt-3 m-1">Proceed</Link>
                        </div>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default ChooseStorageAndNetwork;