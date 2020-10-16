import * as React from "react";
// import "./index.scss"
import styled from "styled-components";
// import "./index.scss";
const NavP = styled.p`
   color:red;
`;
export default class Nav extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navBox">
                <p>导航</p>
                <NavP>xixixi</NavP>
            </div>
        );
    }
}
