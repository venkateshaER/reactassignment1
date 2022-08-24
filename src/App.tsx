import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import internal from 'stream';
import Coustomer from './components/Coustomer';
import Button from 'react-bootstrap/Button';
import { CoustomerClassComponent } from './components/CoustomerClassComponent';
import Employee from './components/Employee';
import { EmployeeClassComponent } from './components/EmployeeClassComponent';
import Counter from './components/Counter';
import Greeting from './components/Greetings';
import Login from './components/Login';
import AuthUser from './components/AuthUser';
import UserList from './components/UserList';
import UserListApi from './components/UserListApi';
import NavBar from './components/NavBar';
import { Routes,Route,Navigate } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import About from './components/About';
import ChooseImage from './components/ChooseImage';
import ChooseInstanceType from './components/ChooseInstanceType';
import ChooseStorageAndNetwork from './components/ChooseStorageAndNetwork';
import ConfigureSecurity from './components/ConfigureSecurity';
import ReviewAndLanch from './components/ReviewAndLanch';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';


function App() {
  // internal way of applying css
  let colors={
      color: 'red'
  };
  // const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {/* <button type="button" className="btn btn-outline-dark m-2 shadow-lg" onClick={() => setShow(!show)}>1. Choose Image</button>
      {show && 
      <div className="div">
      <p>dfghjk,</p>
      </div>
} */}
      {/* <NavBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contactList/list'}/>}/>
        <Route path={'/contactList/list'} element={<UserListApi/>}/>
        <Route path={'/contactList/:id'} element={<UserDetails/>}/>
        <Route path={'/about'} element={<About/>}/>
      </Routes> */}
        <Navbar bg="light" expand="lg" className='shadow-lg'>
      <Container>
      <Navbar.Collapse className="justify-content-center">
      <Navbar.Brand className='fw-bold'>HVC</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className="container">
        <div className="row">
          <div className="col">

            {/* <ChooseImage/> */}
            {/* <ChooseInstanceType/>
            <ChooseStorageAndNetwork/>
            <ConfigureSecurity/>
            <ReviewAndLanch/> */}
          </div>
        </div>
      </div>
      <Routes>
      <Route path={'/'} element={<Navigate to={'/chooseimage'}/>}/>
      <Route path={'/chooseimage'} element={<ChooseImage/>}/>
      {/* <Route path={'/chooseinstancetype/:instname'} element={<ChooseInstanceType/>}/> */}
      <Route path={'/chooseinstancetype'} element={<ChooseInstanceType/>}/>
      <Route path={'/choosestorageandnetwork'} element={<ChooseStorageAndNetwork/>}/>
      <Route path={'/configuresecurity'} element={<ConfigureSecurity/>}/>
      <Route path={'/reviewandlanch'} element={<ReviewAndLanch/>}/>
      </Routes>
       </React.Fragment>
  );
}
      {/* inline css <h2 style={{color:'blue'}}>App Component</h2> */}
      {/* internal way of applying css <h2 style={colors}>App Component</h2> */}
      {/* external css apply in .App.css for local or .index.css for global file*/}
      {/* <h2 className="text-warning">App Component</h2> 
      <i className='fa fa-home fa-2x'/> */}
      {/* <div className="container mt-3">
        <div className='grid'>
          <div className='row'>
            <div className='col'></div>
            <p className='h3 fw-bold text-success'>App Component</p>
            <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quisquam voluptate dolore necessitatibus recusandae. Libero voluptatem exercitationem vel illo tempore amet tenetur consequatur sit magnam dolorem. Dicta voluptates quia quis!</p>
          <div>
          <button className="btn btn-outline-primary">
          <i className='fa fa-book'></i>Read More</button>
          </div>
          </div> */}
          {/* <div className="row"></div>
          <div className="col"></div>
          <Coustomer name={"Ram"} age={20} title={"developer"}/>
          <div className="row"></div>
          <div className="col"></div>
          <CoustomerClassComponent name={"Krish"} age={20} title={"developer"}/> */}
          {/* <div className="row"></div>
          <div className="col"></div>
          <Employee/>
        </div>
        <div className="row"></div>
        <div className="col"></div>
        <EmployeeClassComponent/> */}
        {/* <div className="row"></div>
        <div className="col"></div>
        <Counter/>
        <div className="row"></div>
        <div className="col"></div>
        <Greeting/> */}
        {/* <div className="row"></div>
        <div className="col"></div>
        <Login/> */}
        {/* <div className="row">
          <div className="col">
            <AuthUser/>
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col">
            <UserList/>
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col">
            <UserListApi/>
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col">
            <NavBar/>
          </div>
        </div>
        </div>
      </div> */}
//       </React.Fragment>
//   );
// }
{/* <React.Fragment>
<NavBar/>
<Routes>
  <Route path={'/'} element={<Navigate to={'/contactList/list'}/>}/>
  <Route path={'/contactList/list'} element={<UserListApi/>}/>
  <Route path={'/contactList/:id'} element={<UserDetails/>}/>
  <Route path={'/about'} element={<About/>}/>
</Routes>
 </React.Fragment> */}

export default App;
