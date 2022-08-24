import React, { useState } from "react";

interface Iprops{
}

interface Istate{
    count:number;
}

let Counter:React.FC=()=>{

    let [state,setState]=useState<Istate>({
        count:0
    });

    let incr=():void=>{
        setState({
            count:state.count+1
        })
    };

    let desc=():void=>{

        setState({
            count:state.count-1
        })

    };

   return(
    <React.Fragment>
            <div className="countainer">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3 display-3"> {state.count}</p>
                                <button className="btn btn-success m-1" onClick={incr}>Incr</button>
                                <button className="btn btn-danger m-1" onClick={desc}>Incr</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </React.Fragment>
   )


};
export default Counter;