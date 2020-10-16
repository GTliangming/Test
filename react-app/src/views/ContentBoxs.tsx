import * as React from "react";
import Nav from "../components/nav/index";


export default class ContentBoxs extends React.Component {
    // constructor(props:any){
    //     super(props)
    // }
    render() {
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        );
    }
}