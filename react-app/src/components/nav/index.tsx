import * as React from "react";
import styled from "styled-components";




const NavBox = styled.div`
    align-items: center;
    position:absolute;
    z-index:90;
    top: 0;
    width: 100vw;
    height: 64px;
    display:flex;
    background-color: pink;
    border-bottom: 1px solid #eee;
    text-align:center;
`;
const NavP = styled.p`
   color:red;
`;
export default class Nav extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <NavBox>
                <p>导航</p>
                <NavP>xixixi</NavP>
            </NavBox>
        );
    }
}
