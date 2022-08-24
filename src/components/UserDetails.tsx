import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom';
import IUserApi from "../Models/IUserApi";
import { UserApiService } from "../Service/UserApiService";
interface Iprops{}
interface Istate{
    loading:boolean;
    user:IUserApi;
    errorMessage:string;
}
interface URLParamas{
    id:string;
}
let UserDetails:React.FC=()=>{
    let [state,setState]=useState<Istate>({
            loading:false,
            user:{} as IUserApi,
            errorMessage:""
    });

   
    let {id}=useParams<URLParamas|any>();

    useEffect(()=>{
        if(id){
            setState({...state,loading:true});
            UserApiService.getUserById(id).then((response)=>{
                setState({
                ...state,
                loading:false,
                user:response.data
                })

            }).catch((error)=>{
                setState({
                    ...state,
                    loading:false,
                    errorMessage:error.message
                })
            });
        }
    },[id]);
    let {user,loading,errorMessage}=state
        return(
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success fw-bold">User Deatails</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto totam consectetur, quis obcaecati laborum aspernatur fugiat? Ullam beatae aliquam in, illum saepe architecto, vel veniam velit ratione deleniti aut perspiciatis?</p>
                        </div>
                    </div>
                    {
                        Object.keys(user).length>0 &&
                        <div className="row">
                            <div className="col">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Name: <span className="fw-bold">{user.name}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Email: <span className="fw-bold">{user.email}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Company: <span className="fw-bold">{user.company.name}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Phone: <span className="fw-bold">{user.phone}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    }
                    <div className="row">
                        <div className="col">
                            <Link to={"/"} className="btn btn-success mt-3">Back</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}

export default UserDetails;