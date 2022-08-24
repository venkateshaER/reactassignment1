import React from "react";

interface Iprops{

}
interface Istate{
    name: string;
    age: number;
    title: String;
}
export class EmployeeClassComponent extends React.Component<Iprops,Istate>{

    constructor(props:Iprops){
        super(props);
        this.state={
            name: "ram",
            age: 30,
            title: "Software Engineer"
        } as Istate
    }

    render(): React.ReactNode {
        let {name,age,title}=this.state;
        return(
            <React.Fragment>
                <h3>Employee Class Component</h3>
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
        
    }

};