import React, { useState } from "react";
import { json } from "stream/consumers";
import { IUser } from "../Models/IUser";

interface Iprops{
    
}
interface Istate{
    user :IUser;
}

let Login:React.FC=()=>{

    let [state,setState]=useState<Istate>({
        user:{
            userName:'',
            password:''
        }
    });

    let updateInput=(event:React.ChangeEvent<HTMLInputElement>):void=>{

        setState({
            user:{
                ...state.user,
                [event.target.name]: event.target.value
            }
        });

    }
    let login=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(state.user);
    }

    return(
        <React.Fragment>
            <pre>{JSON.stringify(state.user)}</pre>
           <div className="countainer">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <p className="h3 text-center bg-primary text-white">Login</p>
                        </div>
                        <div className="card-body">
                            <form onSubmit={login}>
                                <div className="mb-2">
                                    <input
                                    required={true}
                                    name='userName'
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="UserName"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name='password'
                                    onChange={updateInput}
                                    type="password" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="mb-2">
                                <input type="submit" className="btn btn-primary" value="Login"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </React.Fragment>
    )

};

export default Login;