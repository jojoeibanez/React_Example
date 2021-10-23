import React from 'react'
import MasterPage from './MasterPage'
import { Form, Input, Button, DatePicker, TimePicker } from 'antd';
import Calendar1 from './Calendar';


function FormApp() {
    return (

        <MasterPage>
            <h1 style={{
                fontSize: "20px",
                paddingLeft: "20px",
                paddingTop: "10px"
            }}>
                Contact Us
            </h1>
            <div style=
                {{
                    padding: "30px",
                    width: "1700px",
                    display: "flex",
                    flexDirection: 'row'

                }}>
                <div style={{width:"40%"}}>
                    <Form
                        // form={}
                        name="formAdd"
                    // onFinish={onFinishAdd}
                    >
                        <Form.Item
                            label="FirstName"
                            name="firstname"
                            rules={[{ required: true, message: 'Please input your firstname!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Lastname"
                            name="Lastname"
                            rules={[{ required: true, message: 'Please input your Lastname!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Tel"
                            name="tel"
                            rules={[{ required: false, message: 'Please input your Tel Number!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[{ required: false, message: 'Please input your Address!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Comment"
                            name="Comment"
                            rules={[{ required: false, message: 'Please input your Comment!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                    <Button style={{
                        display: "flex",
                        alignItems: "center",
                        width: "200px",
                        textAlign: "center"
                    }}
                        onClick={() => {
                            console.log("Submit Completed!!");
                        }}>
                
                    Submit Your Answer >>
                    </Button>
                </div>
                <div style={{
                    paddingLeft: "60px",
                    width: "500px"
                }}>
                    <Calendar1 />
                    <br/>
                    <DatePicker/>
                    <TimePicker/>
                </div>
            </div>
        </MasterPage>
    )
}

export default FormApp
