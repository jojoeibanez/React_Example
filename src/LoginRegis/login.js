import React, { useState, useEffect } from "react"
import { Form, Input, Button } from "antd";
import Axios from "axios"
import { useHistory } from "react-router";
import { GoogleLogin } from "react-google-login";


export default function Login() {
    const history = useHistory();


    // เก็บค่า google login 
    const [googleData, setGoogleData] = useState(null);

    const responseGoogle = (response) => {
        console.log("responseGoogle", response.profileObj);
        setGoogleData(response.profileObj);
    };

    const onFinish = (value) => {
        Axios.get("https://sheet.best/api/sheets/dcbf2025-c8cb-4bf5-8320-0317d42128fd")

            .then((res) => {

                res.data.map((excel) => {
                    if (value.username === excel.username && value.password === excel.password) {
                        alert("WelCome")
                        history.push({ pathname: "/Success" })
                    }
                    // else
                    //     alert("")
                });
            });
    }

    useEffect(() => {
        Axios.get("https://sheet.best/api/sheets/dcbf2025-c8cb-4bf5-8320-0317d42128fd")

            .then((res) => {

                console.log(res.data)
            });
    },

        [])



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
                        background: "#FFFFFF",
                        width: "500px",
                        padding: 24,
                        border: "5px solid gray",
                        paddingRight: "100px"
                    }}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    

                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'กรุณาระบุ user name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'กรุณาระบุ password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="เบอร์โทรศัพท์"
                        name="tel"
                        rules={[{ required: false, message: 'กรุณาระบุ เบอร์โทร!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16 }}>
                        <Button style={
                            {
                                width: "250px",

                            }}
                            type="primary" htmlType="submit">
                            เข้าสู่ระบบ
                        </Button>

                        <Button style={
                            {
                                width: "250px",
                                marginTop: "20px",
                                backgroundColor: "green"
                            }}
                            type="primary" onClick={() => history.push({ pathname: "/Register" })}>
                            สมัครสมาชิก
                        </Button>

                    </Form.Item>
                </Form>



                <GoogleLogin
                    clientId="yourId"
                    onSuccess={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                />

                <Button style={
                    {
                        width: "180px",
                        marginTop: "20px",
                        backgroundColor: "lightgray",
                        borderColor: "black",
                        color: "black"
                    }}
                    type="primary" onClick={() => history.push({ pathname: "/Home" })}>
                    Back to HomePage
                </Button>

            </div>
        </>
    )
}