import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Tabs } from "antd";
import * as React from "react";
import styled from "styled-components";
import { px2rem } from "utils/common";
import LoginBox from "./component/login";
import RegisterBox from "./component/register";
const { TabPane } = Tabs;
const LoginContent = styled.div`
    margin-top:${px2rem(64)};
`;

interface LoginState {
    visable: boolean;
}


export default class LoginAndRegisterBox extends React.Component<{}, LoginState> {
    state = {
        visable: false
    }

    showModel = () => {
        this.setState({
            visable: true
        })
    }
    render() {
        const { visable } = this.state;
        return (
            <LoginContent>

                <Button type="primary" onClick={this.showModel}>登录注册</Button>
                <Modal
                    // title="登录注册"
                    visible={visable}
                    onCancel={() => { this.setState({ visable: false }) }}
                    footer={null}
                    style={{ borderRadius: "100px" }}
                    closeIcon={<CloseCircleOutlined />}
                >
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane tab="登录" key="1"><LoginBox /></TabPane>
                        <TabPane tab="注册" key="2"><RegisterBox /></TabPane>
                    </Tabs>
                </Modal>
            </LoginContent>
        );
    }
}
