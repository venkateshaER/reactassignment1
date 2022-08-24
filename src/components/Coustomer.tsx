import React from "react";

interface Iprops{
    name : string;
    age : number;
    title : string;
}

let Coustomer:React.FC<Iprops>=({name,age,title})=>{
    console.log(name,age,title);
    return(
        <React.Fragment>
            <h2>Coustomer Component</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    Name: {name}
                </li>
                <li className="list-group-item">
                    Age: {age}
                </li>
                <li className="list-group-item">
                    Title: {title}
                </li>
            </ul>
        </React.Fragment>
    )
};

export default Coustomer;