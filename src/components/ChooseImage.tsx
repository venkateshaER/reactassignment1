import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


interface Iprops{
   
}
interface Istate{
    name:String;
}

let ChooseImage:React.FC=()=>{
    // var val=0;
    let [state, setState] = useState<Istate>({
        name: ''

    });
    // The selected drink
  const [selectedLinux, setSelectedLinux] = useState<String>('20');

const isRedioLinux=(value:String):boolean=>selectedLinux===value;
  // This function will be triggered when a radio button is selected
  const radioLinux = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLinux(event.target.value);
   
  };
//   val=Number(`${selectedLinux}`);
    const [selectedUbuntu, setSelectedUbuntu] = useState<String>('20');
    
const isRedioUbuntu=(value:String):boolean=>selectedUbuntu===value;
  // This function will be triggered when a radio button is selected
  const radioUbuntu = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUbuntu(event.target.value);
   // val={selectedUbuntu}
  };
//   val=Number(`${selectedUbuntu}`);
  const [selectedRedHat, setSelectedRedHat] = useState<String>('20');

const isRedioRedHat=(value:String):boolean=>selectedRedHat===value;
  // This function will be triggered when a radio button is selected
  const radioRedHat = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRedHat(event.target.value);
    //val={selectedRedHat}
  };
//   val=Number(`${selectedRedHat}`);
  const [selectedMicroSoft, setSelectedMicroSoft] = useState<String>('20');

const isRedioMicroSoft=(value:String):boolean=>selectedMicroSoft===value;
  // This function will be triggered when a radio button is selected
  const radioMicroSoft = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMicroSoft(event.target.value);
   // val={selectedMicroSoft}
  };
//   val=Number(`${selectedMicroSoft}`);
  const [selectedSuse, setSelectedSuse] = useState<String>('20');

const isRedioSuse=(value:String):boolean=>selectedSuse===value;
  // This function will be triggered when a radio button is selected
  const radioSuse = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSuse(event.target.value);
   // val={selectedSuse}
  };
//   val=Number(`${selectedSuse}`);
    return(
        <React.Fragment>
            <div className="container mt-3">
            <label className='fw-bold h3'>
          Choose Image
       </label>
        <select className='margin-left1 btn btn-outline-dark dropdown-toggle shadow-lg'>
        <option value="1">Region</option>
          <option value="2">Us-East-1</option>
          <option value="3">Asia Pacific-Mumbai</option>
          <option value="4">US-West-1</option>
        </select>
            <div className="row">
                        <div className="col-10">
                            <button className="btn btn-primary m-2 shadow-lg">1. Choose Image</button>
                            <button className="btn btn-outline-dark m-2 shadow-lg">2. Choose Instance Type</button>
                            <button className="btn btn-outline-dark m-2 shadow-lg">3. Choose Storage And Network</button>
                            <button className="btn btn-outline-dark m-2 shadow-lg">4. Configure Security</button>
                       <button className="btn btn-outline-dark m-2 shadow-lg">5. Review And Lanch</button> 
                       
                        </div> 
                        <div className="col">
                       {/* <Card style={{ width: '18rem'}} className="shadow-lg margin-left-card">
                                <Card.Body>
                                    <Card.Title>Cost Estimates</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus enim totam aliquid aliquam vero sapiente cumque, deleniti corporis, sint porro possimus odio itaque voluptatem corrupti consequuntur eos? Quod, modi facere?
                                    </Card.Text>
                                <hr></hr>
                                {selectedDrink}
                                </Card.Body>
                            </Card> */}
                        </div>
                        </div>
              
                    <div className="row">
                    <div className="col-9">
                    <div className="card shadow-lg mt-3">
                    
                        <fieldset>
                            <div className="container">
                            <div className="row">
                    <div className="col-9">
                    <div className="container">
                            <div className="row">
                        <p className="card-text">
                    {/* <Link to={`/chooseinstancetype/${selectedLinux}/Linux-2`} className="text-decoration-none text-success fw-bold"> Linux 2 Image</Link> */}
                    <Link to={`/chooseinstancetype`} className="text-decoration-none text-success fw-bold"> Linux 2 Image</Link>
                   
                    <br/>Linux 2 comes with 5 years of support. It provides Linux kerner 4.14 tuned for optimal performance
                    </p>
                   </div>
                   </div>
                    </div>
                    <div className="col">
                                <p> 
                                <input
                                    type="radio"
                                    name="linux"
                                    value="20"
                                    id="linux1"
                                    onChange={radioLinux}
                                    checked={isRedioLinux('20')}
                                />
                                <label>&nbsp;64-bit&nbsp;(x86)</label>
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
                                    onChange={radioLinux}
                                    checked={isRedioLinux('10')}
                                />
                                <label>&nbsp;64-bit&nbsp;(ARM)</label>
                                </p>
                                </div>
                                </div>
                                </div>
                            </fieldset>
                            
                        </div>
                        <div className="card shadow-lg mt-3">
                    
                        <fieldset>
                            <div className="container">
                            <div className="row">
                    <div className="col-9">
                    <div className="container">
                            <div className="row">
                        <p className="card-text">
                    <Link to={`/chooseinstancetype`} className="text-decoration-none text-success fw-bold">Ubuntu Server 18.04 LTS</Link>
                    <br/>Linux 2 comes with 5 years of support. It provides Linux kerner 4.14 tuned for optimal performance
                    </p>
                   </div>
                   </div>
                    </div>
                    <div className="col">
                                <p> 
                                <input
                                    type="radio"
                                    name="ubuntu"
                                    value="20"
                                    id="ubuntu1"
                                    onChange={radioUbuntu}
                                    checked={isRedioUbuntu('20')}
                                />
                                <label>&nbsp;64-bit&nbsp;(x86)</label>
                                </p>
                                </div>
                                
                                
                                <div className="col-9">
                    </div>
                    <div className="col">
                                <p>
                                <input
                                    type="radio"
                                    name="ubuntu"
                                    value="10"
                                    id="ubuntu2"
                                    onChange={radioUbuntu}
                                    checked={isRedioUbuntu('10')}
                                />
                                <label>&nbsp;64-bit&nbsp;(ARM)</label>
                                </p>
                                </div>
                                </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="card shadow-lg mt-3">
                    
                        <fieldset>
                            <div className="container">
                            <div className="row">
                    <div className="col-9">
                    <div className="container">
                            <div className="row">
                        <p className="card-text">
                    <Link to={`/chooseinstancetype`} className="text-decoration-none text-success fw-bold">Red Hat EnterPrise Linux 8</Link>
                    <br/>Linux 2 comes with 5 years of support. It provides Linux kerner 4.14 tuned for optimal performance
                    </p>
                   </div>
                   </div>
                    </div>
                    <div className="col">
                                <p> 
                                <input
                                    type="radio"
                                    name="redhat"
                                    value="20"
                                    id="redhat1"
                                    onChange={radioRedHat}
                                    checked={isRedioRedHat('20')}
                                />
                               <label>&nbsp;64-bit&nbsp;(x86)</label>
                                </p>
                                </div>
                                
                                
                                <div className="col-9">
                    </div>
                    <div className="col">
                                <p>
                               
                                <input
                                    type="radio"
                                    name="redhat"
                                    value="10"
                                    id="redhat2"
                                    onChange={radioRedHat}
                                    checked={isRedioRedHat('10')}
                                />
                               <label>&nbsp;64-bit&nbsp;(ARM)</label>
                                </p>
                                </div>
                                </div>
                                </div>
                            </fieldset>
                        
                    </div>
                    <div className="card shadow-lg mt-3">
                    
                    <fieldset>
                            <div className="container">
                            <div className="row">
                    <div className="col-9">
                    <Link to={`/chooseinstancetype`} className="text-decoration-none text-success fw-bold">MicroSoft Windows Server 2019 Base</Link>
                    <br/>Linux 2 comes with 5 years of support. It provides Linux kerner 4.14 tuned for optimal performance
                   
                    </div>
                    <div className="col">
                                <p> 
                                <input
                                    type="radio"
                                    name="microsoft"
                                    value="20"
                                    id="microsoft1"
                                    onChange={radioMicroSoft}
                                    checked={isRedioMicroSoft('20')}
                                />
                               <label>&nbsp;64-bit&nbsp;(x86)</label>
                                </p>
                                </div>
                                
                                
                                <div className="col-9">
                    </div>
                    <div className="col">
                        <p>

                        </p>
                                {/* <p>
                                <input
                                    type="radio"
                                    name="microsoft"
                                    value="10"
                                    id="microsoft2"
                                    onChange={radioHandler}
                                    checked={isRedioSelected('30')}
                                />
                                <label htmlFor="tea">Green Tea</label>
                                </p> */}
                                </div>
                                </div>
                                </div>
                            </fieldset>
                        
                    </div>
                    <div className="card shadow-lg mt-3">
                    
                    <fieldset>
                            <div className="container">
                            <div className="row">
                    <div className="col-9">
                    <Link to={`/chooseinstancetype`} className="text-decoration-none text-success fw-bold">Suse Linux Enterprise Server</Link>
                    <br/>Linux 2 comes with 5 years of support. It provides Linux kerner 4.14 tuned for optimal performance
                   
                    </div>
                    <div className="col">
                                <p> 
                                <input
                                    type="radio"
                                    name="suse"
                                    value="20"
                                    id="suse1"
                                    onChange={radioSuse}
                                    checked={isRedioSuse('20')}
                                />
                               <label>&nbsp;64-bit&nbsp;(x86)</label>
                                </p>
                                </div>
                                
                                
                                <div className="col-9">
                    </div>
                    <div className="col">
                                <p>
                                <input
                                    type="radio"
                                    name="suse"
                                    value="10"
                                    id="suse2"
                                    onChange={radioSuse}
                                    checked={isRedioSuse('10')}
                                />
                                <label>&nbsp;64-bit&nbsp;(ARM)</label>
                                </p>
                                </div>
                                </div>
                                </div>
                            </fieldset>
                        
                    </div>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem'}} className="shadow-lg">
                                <Card.Body>
                                    <Card.Title>Cost Estimates</Card.Title>
                                    <Card.Text>
                                        Sample
                                    </Card.Text>
                                <hr></hr>
                                
                                $0/mo
                                </Card.Body>
                            </Card>
                        </div>
                        </div>
                    
                    </div>
                    {/* <div className="row">
                        <div className="col">
                            <Link to={"/chooseinstancetype"} className="btn btn-success mt-3 m-1">Proceed</Link>
                       
                    
            </div>
            </div> */}
        </React.Fragment>
    )
};

export default ChooseImage;