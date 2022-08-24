import React, { useState } from "react";

interface Iprops{

}
interface Istate{
    message:String
}

let Greeting:React.FC<Iprops>=()=>{
    
    let [state,setState]=useState<Istate>({
        message:"Hello"
    });

    let changeMessage=(greet:string):void=>{
        setState({
            message:greet
        });
    }

    return(
        <React.Fragment>
            <div className="countainer m-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-name">
                                <p className="h3 display-3">{state.message}</p>
                                <button className="btn btn-success m-1" onClick={()=>changeMessage("Goog Marning")}>Goog Marning</button>
                                <button className="btn btn-warning m-1" onClick={()=>changeMessage("Good AfterNoon")}>Goog Afternoon</button>
                                <button className="btn btn-danger m-1" onClick={()=>changeMessage("Good Evening")}>Goog Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Greeting;