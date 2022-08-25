import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import {useParams} from 'react-router-dom';
interface URLParamas{
}
interface Iprops{}
interface Istate{}

let ConfigureSecurity:React.FC=()=>{
    let {id}=useParams<URLParamas|any>();
    const instVal=(`${id}`)
    const [selected, setSelected] = useState<String>('20');

const isRedio=(value:String):boolean=>selected===value;
  // This function will be triggered when a radio button is selected
  const radio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
   
  };
  const [value, setValue] = useState<String>('6')
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
   // val={selectedSuse}
  };
  var price=Number(`${value}`)+Number(instVal);
  
    return(
        <React.Fragment>
            <div className="container mt-3">
            <h3></h3>
            <label className='fw-bold h3'>
            Configure Security
       </label>
        <select className='margin-left1 btn btn-outline-dark dropdown-toggle shadow-lg'>
        <option value="1">Region</option>
          <option value="2">Us-East-1</option>
          <option value="3">Asia Pacific-Mumbai</option>
          <option value="4">US-West-1</option>
        </select>
            <div className="row">
                <div className="col-10">
                            <button className="btn btn-outline-dark m-2">1. Choose Image</button>
                            <button className="btn btn-outline-dark m-2">2. Choose Instance Type</button>
                            <button className="btn btn-outline-dark m-2">3. Choose Storage And Network</button>
                            <button className="btn btn-primary m-2">4. Configure Security</button>
                            <button className="btn btn-outline-dark m-2">5. Review And Lanch</button>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                    <div className="col-9">
                    <div className="row">
                    <div className="col-4 mt-3 ">
                    <div className="container">
                            <div className="row">

                    <div className="col">
                                <p> 
                                <input
                                    type="radio"
                                    name="linux"
                                    value="20"
                                    id="linux1"
                                    onChange={radio}
                                    checked={isRedio('20')}
                                />
                                <label>&nbsp;Create a new security group</label>
                                </p>
                                </div>
                                
                                
                                <div className="col-9">
                    </div>
                    <div className="col">
                                <p>
                                <input
                                    type="radio"
                                    name="linux"
                                    value="10"
                                    id="linux2"
                                    onChange={radio}
                                    checked={isRedio('10')}
                                />
                                <label>&nbsp;Select an existing security group</label>
                                </p>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                        </div>
                        
                        <div className="col">
                        <div className="col">
                            <Card style={{ width: '18rem'}} className="shadow-lg">
                                <Card.Body>
                                    <Card.Title>Cost Estimates</Card.Title>
                                    <Card.Text>
                                    Security Type &emsp;&emsp;&emsp;&emsp; ${value}
                                    </Card.Text>
                                <hr></hr>
                                Total&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;${price} /mo
                               {/* $ {state.count} /mo */}
                             
                                </Card.Body>
                            </Card>
                        </div>
                        </div>
                        </div>
                        
                        { (selected==='20') && 
                            
                       
                        <div className="row">
                            <div className="col-4">
                            <p className="fw-bold mt-3 h4">New Security Group</p>
                   <input
                                    required={true}
                                    name='newSecurity'
                                   // onChange={updateInput}
                                    type="text" className="form-control" placeholder="New Security Group Name"/>
                            </div>
                        </div>
                        }
                        { (selected==='20') && 
                            
                        <div className="row">
                    <div className="col-9">
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
                   <p className="fw-bold mt-3 small">&emsp;&emsp;Type</p>
                   <select className='btn btn-outline-dark dropdown-toggle' onChange={handleChange}>
       
          <option id="SSD" value="6" >HTTPS</option>
          <option id="SSH" value="7">SSH</option>
          <option id="SMTP" value="8">SMTP</option>
         
        </select>
                </div>
                
                
                <div className="col-2">
                   <p className="text-center fw-bold mt-3 small">Protocol</p>
                   <input
                                    required={true}
                                    name='protocol'
                                   // onChange={updateInput}
                                    type="text" className="form-control" placeholder="TCP"/>
                   
                </div>
                <div className="col-2">
                   <p className="text-center fw-bold mt-3 small">Port Range</p>
                   <input
                                    required={true}
                                    name='portrange'
                                   // onChange={updateInput}
                                    type="text" className="form-control" placeholder="443"/>
                   
                </div>
                <div className="col-3">
                   <p className="text-center fw-bold mt-3 small">Source</p>
                   <input
                                    required={true}
                                    name='source'
                                   // onChange={updateInput}
                                    type="text" className="form-control" placeholder="192.168.1.1"/>
                   
                </div>
                <div className="col-3">
                   <p className="text-center fw-bold mt-3 small">Description</p>
                   <input
                                    required={true}
                                    name='source'
                                   // onChange={updateInput}
                                    type="text" className="form-control" placeholder="Some Remarks"/>
                   
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
                    }
                    { (selected==='10') &&

                    <div className="row">
                            <div className="col-4">
                            <p className="fw-bold mt-3 h4">Select Security Group</p>
                            <select className='btn btn-outline-dark dropdown-toggle' onChange={handleChange}>
       
       <option id="SC-1" value="6" >Security SC 1</option>
       <option id="SC-2" value="7">Security SC 2</option>
       <option id="SC-3" value="8">Security SC 3</option>
       <option id="SX-27" value="9" >Security SX 27</option>
       <option id="SL-12" value="10">Security SL 12</option>
       <option id="SC-3" value="11">Security SC 3</option>
       <option id="Group-29" value="12" >Group 29</option>
       <option id="RT-7" value="13">Security RT 7</option>
       <option id="SGX-8" value="14">SGX 8 </option>


     </select>
                            </div>
                        </div>
                        }
            <div className="row">
                        <div className="col">
                            <Link to={`/choosestorageandnetwork/${id}`} className="btn btn-dark mt-3 m-1">Back</Link>
                            <Link to={`/reviewandlanch`} className="btn btn-success mt-3 m-1">Proceed</Link>
                        </div>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default ConfigureSecurity;