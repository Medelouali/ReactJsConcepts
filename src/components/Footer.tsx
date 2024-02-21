import { FunctionComponent } from "react";

const person: { name: string, age: number }={ name: "toto", age: 22 };

const Footer:FunctionComponent=()=>{
    return <div className="footer">My name is {person.name} and I am {person.age} years old</div>
}

export default Footer;