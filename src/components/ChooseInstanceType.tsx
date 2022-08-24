import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import {useParams} from 'react-router-dom';
interface Iprops{}
interface Istate{
    count:number;
}
interface IstateName{
    name:string;
}
interface URLParamas{
}

let ChooseInstanceType:React.FC=()=>{
    // let {id}=useParams<URLParamas|any>();
    let {instname}=useParams<URLParamas|any>();
    const num = Number('2020');
    // var val = Number(`${id}`);
    const name= (`${instname}`);

    let [state,setState]=useState<Istate>({
        count:0
    });
    let [stateName,setStateName]=useState<IstateName>({
        name:'Region'
    });
    
    let updateprice=()=>{
        setState({
            count:state.count+1
        })
    };
    let fetchName=(nameOption:string):void=>{
        setStateName({
            name: nameOption
        })
    };
    // const getInitialState = () => {
    //     const value = "Orange";
    //     return value;
    //   };
    const [show, setShow] = useState(false);

//     const isRedioLinux=(value:boolean):boolean=>show===value;
//   // This function will be triggered when a radio button is selected
//   const radioLinux = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setShow(event.defaultPrevented);
   
//   };

      const [value, setValue] = useState<String>('1')
      const [priceName, setPriceName] = useState<String>('1')
      const [stateId, setStateId] = useState<String>('region')
      var price=Number(`${value}`)+Number(`${priceName}`);
    //   const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(e.target.value);
    //   };
      const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
       // val={selectedSuse}
      };
      const handleChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPriceName(event.target.value);
       // val={selectedSuse}
      };
    return(
        <React.Fragment>
           
            <div className="container mt-3">
            
            <label className='fw-bold h3'>
            Choose Instance Type
            </label>
            <select className='margin-left1 btn btn-outline-dark dropdown-toggle shadow-lg'>
        <option value="1">Region</option>
          <option value="2">Us-East-1</option>
          <option value="3">Asia Pacific-Mumbai</option>
          <option value="4">US-West-1</option>
        </select>
            <div className="row">
                        <div className="col-10">
                            <button type="button" className="btn btn-outline-dark m-2 shadow-lg">1. Choose Image</button>
                            <button className="btn btn-primary m-2 shadow-lg">2. Choose Instance Type</button>
                            <button className="btn btn-outline-dark m-2 shadow-lg">3. Choose Storage And Network</button>
                            <button className="btn btn-outline-dark m-2 shadow-lg">4. Configure Security</button>
                       <button className="btn btn-outline-dark m-2 shadow-lg">5. Review And Lanch</button> 

                       {/* <button className="btn btn-outline-dark m-2 shadow-lg" onClick={updateprice}>test</button> 
                       <p>{state.count}</p> */}
                       
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
                  <div className="container">
                            <div className="row">
                    <div className="col-9">
                    <button className="btn btn-outline-dark m-2 shadow-lg" onClick={() => setShow(!show)}>General Purpose</button>
                            <button className="btn btn-outline-dark m-2 shadow-lg" onClick={() => setShow(!show)}>CPU Optimised</button>
                            <button className="btn btn-outline-dark m-2 shadow-lg" onClick={() => setShow(!show)}>Storage Optimised</button>
                            <button className="btn btn-outline-dark m-2 shadow-lg" onClick={() => setShow(!show)}>Network Optimised</button>
                       
                        {/* <p>id value {name}</p> */}
        
        {/* <p>{stateName.name}</p> */}
        {/* <p>{`You selected price`}{price}</p> */}
                        
                    </div>
                    </div>
                    { show &&
                    (
                    <div className="row">
                    <div className="col-9">
                        <br/>
                        <p className="fw-bold h5">Create Configuration</p>
                    <select className='btn btn-outline-dark dropdown-toggle shadow-lg mt-3 m-1' onChange={handleChange}>
        <option id="1-Core" value="1">1 Core</option>
          <option id="2-Core" value="2">2 Core</option>
          <option id="4-Core" value="4" >4 Core</option>
          <option id="6-Core"  value="6" >6 Core</option>
          <option id="8-Core"  value="8" >8 Core</option>
         
        </select>
        <select className='btn btn-outline-dark dropdown-toggle shadow-lg mt-3 m-1' onChange={handleChange1}>
        <option id="1-Core" value="1">256MB</option>
          <option id="2-Core" value="2">516MB</option>
          <option id="4-Core" value="4" >1GB</option>
          <option id="6-Core"  value="6" >4GB</option>
          <option id="8-Core"  value="8" >8GB</option>
         
        </select>
                        </div>
                        
                    </div>
                   )
                }
                                </div>
                                
                                </div>
                                
                    <div className="col">
                        <div className="col">
                            <Card style={{ width: '18rem'}} className="shadow-lg">
                                <Card.Body>
                                    <Card.Title>Cost Estimates</Card.Title>
                                    <Card.Text>
                                        {name} : $0
                                    </Card.Text>
                                <hr></hr>
                                
                               $ {state.count} /mo
                               
                                </Card.Body>
                            </Card>
                        </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col">
                            <Link to={"/"} className="btn btn-dark mt-3 m-1">Back</Link>
                            <Link to={"/choosestorageandnetwork"} className="btn btn-success mt-3 m-1">Proceed</Link>
                        </div>
                    </div>
                    </div>
            
            
        </React.Fragment>
    )
}

export default ChooseInstanceType;