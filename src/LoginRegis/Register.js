import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory, useRouteMatch } from "react-router-dom";
import Axios from 'axios';

function Register() {

    const history = useHistory();
    const onFinish = async (value) => {
        await Axios({
            method: "POST",
            url: "https://sheet.best/api/sheets/dcbf2025-c8cb-4bf5-8320-0317d42128fd",
            data: {
                username: value.username,
                password: value.password,
                tel: value.tel
            },
        })
    }

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "#F0F8FF",
                height: "100vh"
            }}>

                <Form
                    style={{
                        border: "5px solid gray",
                        padding: "100px",
                        paddingTop: "25px",
                        background: "#FFFFFF"
                    }}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'กรุณาใส่ username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'กรุณาใส่ password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Telephone Number"
                        name="tel"
                        rules={[{ required: false, message: 'กรุณาใส่ Telephone Number!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button style={{ width: "300px", marginTop: "20px", alignItems: "center", marginRight: "200px" }} type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button
                            style={{
                                width: "300px",
                                marginTop: "20px",
                                backgroundColor: "lightgray",
                                color: "black",
                                borderBlockColor: ""
                            }}
                            type="primary"
                            onClick={() => history.push({ pathname: "/login" })}
                        >

                            Back To login


                        </Button>
                    </Form.Item>

                </Form>


            </div>

        </>
    )
}

export default Register
