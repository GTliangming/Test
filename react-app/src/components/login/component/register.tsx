import { Button, Form, Input, message } from "antd";
import * as React from "react";
import { HTTPServer } from "../../../server";
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 18 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};
// interface LoginInfo {
//     name: any;
//     password: any;
//     email: any;
//     checkCode: any;
// }
interface RegisterBoxState {
    isClick: boolean;
    countCode: number;
    email: string;
    btnLoding: boolean;
}
export default class RegisterBox extends React.Component<{}, RegisterBoxState>{
    Timer: any;

    constructor(props) {
        super(props);
        this.state = {
            isClick: false,
            countCode: 0,
            email: "",
            btnLoding: false
        }
    }
    async componentDidMount() {
        await HTTPServer("GET", "test").then(result => {
            console.log(222, result);

        })
    }
    onFinish = async (value) => {
        // await axios.get(HOST + "gettest").then(result => {
        //     console.log(222, result);

        // })
        this.setState({ btnLoding: true })
        const username = value.username;
        const password = value.password;
        const email = value.password;
        const checkcode = value.checkcode;

        await HTTPServer("POST", "login", { username, password, email, checkcode }).then(result => {
            console.log(22222, result)
            this.setState({ btnLoding: false })
        }).catch(err => {
            message.error(err, 1)
        })
    }
    sendCheckCode = async () => {
        const email = this.state.email;
        if (email && email !== "") {
            await HTTPServer("GET", "sendEmail?email=" + email).then(result => {
                console.log(111,result)
                // if (result.data.code === 200) {
                //     this.setState({ isClick: true, countCode: 5 })
                //     this.setInterval();
                // }
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

        const { isClick, countCode, btnLoding } = this.state;
        return (
            <div >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}

                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            { required: true, message: "请输入用户名!" },
                            { pattern: /^[\u4e00-\u9fff\w]{2,10}$/, message: "用户名格式有误" }
                        ]}
                    >
                        <Input placeholder="2-10位(数字、字母、汉字)" />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            { required: true, message: "请输入密码!" },
                            { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/, message: "密码格式有误" }
                        ]}
                    >
                        <Input.Password placeholder="6-10位(字母+数字)" />
                    </Form.Item>
                    <Form.Item
                        name="Confirm Password"
                        label="确认密码"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "请确认密码!",
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject("两次输入密码不一致!");
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="邮箱"
                        name="email"
                        rules={[
                            { required: true, message: "请输入邮箱账号!" },
                            { pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: "邮箱格式有误" }
                        ]}
                    >
                        <Input onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    </Form.Item>
                    <Form.Item
                        label="验证码"
                        name="checkcode"
                        rules={[{ required: true, message: "请输入验证码!" }]}
                    >
                        <div style={{ display: "flex" }}>
                            <Input style={{ width: "67%" }} />
                            <Button
                                disabled={isClick}
                                style={{ width: "33%" }}
                                onClick={this.sendCheckCode}
                            >
                                {isClick ? `${countCode}s后重试` : "获取验证码"}
                            </Button>
                        </div>
                    </Form.Item>
                    <Form.Item {...tailLayout} name="submit">
                        <Button type="primary" htmlType="submit" style={{ width: "70%" }} loading={btnLoding}>
                            注册并登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        );
    }
}
