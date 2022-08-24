import React, { useState } from "react";

interface Iprops{}
interface Istate{
    isLogin: boolean;
}

let AuthUser:React.FC=()=>{
    let [state,setState]=useState<Istate>({
        isLogin:false
    });
    let logIn =():void=>{
       setState({
        isLogin:true
       })
    }
    let logOut =()=>{
       setState({
        isLogin:false
       })
    }
    return(
        <React.Fragment>
          <div className="row">
           <div className="col-md-5">
           {
            state.isLogin?
           
            <React.Fragment>
                <div>
                <p className="h3">Welcome</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cum doloremque odio nulla facilis deserunt ullam illo iure commodi aliquid excepturi, eaque rem rerum aut quas. Aut, corporis recusandae.</p>
                </div>
            </React.Fragment>
            :
            <React.Fragment>
                <div>
                <p className="h3">Thank you</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cum doloremque odio nulla facilis deserunt ullam illo iure commodi aliquid excepturi, eaque rem rerum aut quas. Aut, corporis recusandae.</p>
                </div>
        </React.Fragment>
    }   {
        state.isLogin?<button className="btn btn-primary m-1" onClick={logOut}>LogOut</button>:<button className="btn btn-warning m-1" onClick={logIn}>LogIN</button>
    }
            
           </div>
          </div>
        </React.Fragment>
    )
};
export default AuthUser;