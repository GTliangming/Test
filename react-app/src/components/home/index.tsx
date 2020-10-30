import * as React from "react";
import { Link } from "react-router-dom";



export default class Home extends React.Component {

    render() {
        return (
            <div style={{ marginTop: "55px", height: "1000px" }}>
                首页
                <Link to="/sideBar">侧边栏</Link>
            </div>

        );
    }
}
