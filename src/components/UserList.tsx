import React, { useState } from "react";
import IUser from "../Models/IUser";
import IUserList from "../Models/IUserList";
import { UserService } from "../Service/UserService";

interface Iprops{
   
}
interface Istate{
    user:IUserList[]
}

let UserList:React.FC=()=>{
    let [state,setState]=useState({
        user:UserService.getAllUsers()
    });
    return(
        <React.Fragment>
           {/* <pre>{JSON.stringify(state.user)}</pre> */}

           <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h3">User List</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                  <table className="table table-striped text-center table-hover shadow-lg">
                    <thead className="bg-dark text-white">
                        <th>SNo</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Campony</th>
                    </thead>
                    <tbody>
                        {
                            state.user.length>0 &&
                            state.user.map(user=>{
                                return(
                                    <tr key={user.sNo}>
                                        <td>{user.sNo}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.designation}</td>
                                        <td>{user.company}</td>
                                    </tr>
                                )
                            }) 
                        }
                    </tbody>
                  </table>
                </div>
            </div>
           </div>
        </React.Fragment>
    )
};

export default UserList;