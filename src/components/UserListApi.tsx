import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IUserApi } from "../Models/IUserApi";
import { UserApiService } from "../Service/UserApiService";

interface Iprops{}
interface Istate{
    loading:boolean;
    users:IUserApi[];
    errorMessage:String;
}

let UserListApi:React.FC=()=>{
    let [state,setState]=useState<Istate>({
        
           loading:false,
           users:[] as IUserApi[],
           errorMessage:""
        
    });
    useEffect(()=>{
        setState({...state,
            loading:true})
        UserApiService.getUser().then((response)=>{
            setState({
                ...state,
                loading:false,
                users:response.data,
                    })
            

        }).catch((error)=>{
            setState({
                ...state,
                loading:false,
                errorMessage:error.message
                    })
        });

    },[]);
    let {loading,users,errorMessage}=state;
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 fw-bold text-success">User Api List</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa odit, nam itaque praesentium beatae aspernatur asperiores iste odio adipisci amet enim voluptate eligendi, in distinctio? Iste odit rerum voluptatibus?</p>
                    </div>
                </div>
            </div>
           <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-hover text-center table-striped">
                    <thead className="bg-success text-white">
                        <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>    
                        <th>email</th>
                        <th>address</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length>0 &&
                            state.users.map(users=>{
                                return(
                                    <tr key={users.id}>
                                    <td>{users.id}</td>
                                    <td>
                                        <Link to={`/contactList/${users.id}`} className="text-decoration-none text-success fw-bold"> {users.name}</Link>
                                    </td>
                                    <td>{users.username}</td>
                                    <td>{users.email}</td>
                                    <td>{users.address.city}</td>
                                    <td>{users.phone}</td>
                                    <td>{users.website}</td>
                                    <td>{users.company.name}</td>
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

export default UserListApi;