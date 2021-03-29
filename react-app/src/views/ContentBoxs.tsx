import * as React from "react";
import Nav from "../components/nav/index";
import axios from "axios";

export default class ContentBoxs extends React.Component {
    // constructor(props:any){
    //     super(props)
    // }
   async componentDidMount(){
     axios.post("http://localhost:3002/api/loginAdmin",{username:"1111",password:"2222"}).then(res=>{
         console.log(1111,res)
     }).catch(err=>{
        console.log(222,err) 
     })

    }
    render() {
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        );
    }
}