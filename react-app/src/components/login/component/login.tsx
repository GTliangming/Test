import { Button, Checkbox, Form, Input, message } from "antd";
import * as React from "react";
import axios from "axios"
import { DEV_HOST } from "../../../server"
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};
interface LoginInfo {
    name: any;
    password: any;
    email: any;
    checkCode: any;
}
interface LoginBoxState {
    isClick: boolean;
    countCode: number;
    loginInfo: LoginInfo;
}
export default class LoginBox extends React.Component<{}, LoginBoxState>{
    Timer: any;

    constructor(props) {
        super(props);
        this.state = {
            isClick: false,
            countCode: 0,
            loginInfo: {
                name: "",
                password: "",
                email: "",
                checkCode: "",
            }
        }
    }
    onFinish = (value) => {
        console.log(111, value)
    }
    onValuesChange = (changedFields, allFields) => {
        this.setState({
            loginInfo: {
                name: allFields.username ,
                password: allFields.password ,
                email: allFields.email ,
                checkCode: allFields.checkcode 
            }
        })
    }
    sendCheckCode = async () => {
        const { email } = this.state.loginInfo;
        if (email && email !== "") {
            await axios.get(DEV_HOST + "sendEmail?email=" + email).then(result => {
                if (result.data.code === 200) {
                    this.setState({ isClick: true, countCode: 5 })
                    this.setInterval();
                }
            }).catch(err => {
                message.error(err, 1)
            })
        } else {
            message.info("请先输入邮箱再获取验证码", 1)
        }
    }
    setInterval = () => {
        this.Timer = setInterval(() => {
            const { countCode } = this.state;
            if (countCode === 1) {
                clearInterval(this.Timer);
                this.setState({ isClick: false });
            } else {
                this.setState({ isClick: true, countCode: countCode - 1 })
            }
        }, 1000);
    }
    render() {
        const { isClick, countCode } = this.state;
        return (
            <div >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onValuesChange={this.onValuesChange}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: "Please input your username!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="邮箱"
                        name="email"
                        rules={[{ required: true, message: "Please input your email!" }]}
                    >
                        <div style={{ display: "flex" }}>
                            <Input style={{ width: "67" }} />
                            <Button
                                disabled={isClick}
                                style={{ width: "33%" }}
                                onClick={this.sendCheckCode}
                            >
                                {isClick ? `${countCode}s后重试` : "获取验证码"}
                            </Button>
                        </div>
                    </Form.Item>
                    <Form.Item
                        label="验证码"
                        name="checkcode"
                        rules={[{ required: true, message: "Please input your email!" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <div>
                            <Checkbox>Remember me</Checkbox>
                            <a href="/#" style={{ marginLeft: "30px" }}>忘记密码/账号</a>
                        </div>
                    </Form.Item>

                    <Form.Item {...tailLayout} name="submit">
                        <Button type="primary" htmlType="submit" style={{ width: "70%" }}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        );
    }
}
