import React, { useEffect, useState } from "react";
import MasterPage from "./MasterPage";
import { Breadcrumb, Card, Row, Col, Table, Modal, Form, Input, Spin, Divider, Popconfirm, Button, Select } from 'antd';
import { HomeOutlined, UserOutlined, EditOutlined, DeleteOutlined, LoadingOutlined } from '@ant-design/icons';
import Axios from "axios";

const { Column } = Table;
const { Option } = Select;

export default function DashBoard() {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [excel, setExcel] = useState([]);
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

    // Modal
    const [modalEdit, setModalEdit] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);

    const [rowData, setRowData] = useState([]);
    const [formAdd] = Form.useForm();
    const [formEdit] = Form.useForm();

    const url = ""
    //https://sheet.best/api/sheets/e20d97cc-6dc0-4398-a0f4-f92e933f7023
    //filter
    const [filterData, setFilterData] = useState(null);

    const searchDataExcel = (param) => {
        let result = excel.filter(o =>
            Object.keys(o).some(k =>
                String(o[k])
                    .toLowerCase()
                    .includes(param?.toLowerCase())
            )
        );

        setFilterData(result);

    }

    const getDataExcel = async () => {
        await Axios.get(url)
            .then((res) => {
                console.log("res", res)

                setExcel(res.data.map((data, index) => {
                    return {
                        no: index + 1,
                        key: index,
                        fistname: data.username,
                        password: data.password,
                        age: data.age,
                        tel: data.tel,
                        address: data.address
                    }
                }))
            }).catch((error) => {

            });
    }

    const addDataExcel = async (param) => {
        // setLoading(true);
        // setAntIcon(true);
        await Axios({
            url: url,
            method: "POST",
            data: {
                username: param.firstname,
                password: param.password,
                tel: param.tel,
                address: param.address
            }
        }).then((res) => {
            setModalAdd(false);
            formAdd.resetFields();

            setLoading(false);
            Modal.success({
                content: 'บันทึกสำเร็จแล้วนะ',
            });
            getDataExcel();

        }).catch((error) => {

        })
    }

    const editDataExcel = async (param) => {
        setLoading(true);
        await Axios({
            url: `${url}/` + rowData.key,
            method: "PATCH",
            data: {
                username: param.firstname,
                password: param.password
            }
        }).then(() => {
            // suscess
            setModalEdit(false);

            getDataExcel();

            setLoading(false);

            Modal.success({
                content: 'บันทึกสำเร็จแล้วนะ',
            });
        }).catch(() => {

        })
    }


    const onFinishAdd = (values) => {
        console.log("values", values)
        addDataExcel(values)
    };

    const onFinish = (values) => {
        editDataExcel(values)
    };
    

    const deleteData = async (param) => {
        // setLoading(true);
        // console.log(test2);
        await Axios({
            url: `${url}/` + param.key,
            method: "DELETE"

        }).then(() => {
            // suscess
            setModalEdit(false);
            getDataExcel();

            // setLoading(false);

            Modal.success({
                content: 'ลบข้อมูลสำเร็จ',
            });
        }).catch(() => {

        })
    }

    useEffect(() => {
        getDataExcel();
    }, [])



    return (
        <MasterPage>
            <Breadcrumb>
                <Breadcrumb.Item href="">
                    <HomeOutlined />
                    <span>Dash Board {state}</span>
                </Breadcrumb.Item>
            </Breadcrumb>

            <Row>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Card style={{ width: 300 }} hoverable onClick={() => setState("Dash Board1")}>
                        <p>Dash Board</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Card style={{ width: 300 }} hoverable onClick={() => setState("Dash Board2")}>
                        <p>Dash Boar2</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Card style={{ width: 300 }} hoverable>
                        <p>Dash Board</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Card style={{ width: 300 }} hoverable>
                        <p>Dash Board</p>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Select
                        showSearch
                        allowClear
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={(value) => {
                            searchDataExcel(value === undefined ? "" : value)
                        }}

                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        options={excel.map((n) => {
                            return {
                                value: n.fistname,
                                label: n.fistname
                            }
                        })}
                    >
                        {/* <Option value="jack">Jack</Option> */}
                    </Select>
                </Col>
                <Col span={8} style={{ textAlign: "right" }}>
                    <Input.Search placeholder="ค้นหาข้อมูล" allowClear
                        enterButton
                        onSearch={searchDataExcel}
                    />

                </Col>
                <Col span={2}>
                    <Button type="primary" style={{ backgroundColor: "green" }} onClick={() => setModalAdd(true)}>ADD</Button>
                </Col>
            </Row>

            <Row style={{ marginTop: 24 }}>
                <Col span={24}>
                    <Table dataSource={filterData === null ? excel : filterData} loading={loading} bordered>
                        <Column title="No" width="10%" align="center" dataIndex="no" />
                        <Column title="First Name" width="20%" align="center" dataIndex="fistname" />
                        <Column title="Password" width="20%" align="center" dataIndex="password" />
                        <Column title="Tel" width="20%" align="left" dataIndex="tel" />
                        <Column title="Address" width="20%" align="center" dataIndex="address" />
                        <Column title="edit" width="10%"
                            render={(value, record, index) => {
                                return (
                                    <>
                                        <EditOutlined onClick={() => {
                                            setModalEdit(true);

                                            formEdit.setFieldsValue({
                                                firstname: record.fistname,
                                                password: record.password
                                            });

                                            setRowData(record);
                                        }}
                                        />
                                        {/* D1 */}
                                        <Divider type="vertical" />
                                        <Popconfirm
                                            title="ต้องการลบข้อมูล ใช่หรือไม่???"
                                            onConfirm={() => deleteData(record)}

                                            onCancel={""}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <DeleteOutlined />
                                        </Popconfirm>

                                    </>
                                )
                            }}
                        />
                    </Table>
                </Col>
            </Row>

            <Modal title="Add Data" visible={modalAdd}
                confirmLoading={loading}
                onCancel={() => {
                    setModalAdd(false);
                    formAdd.resetFields();
                }}
                onOk={() => formAdd.submit()}
                okText="ตกลง"
                cancelText="ยกเลิก"
            >
                {/* เนื้อหา ใน modal */}
                <Form
                    form={formAdd}
                    name="formAdd"
                    onFinish={onFinishAdd}
                >
                    <Form.Item
                        label="FirstName"
                        name="firstname"
                        rules={[{ required: true, message: 'Please input your firstname!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your firstname!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Tel"
                        name="tel"
                        rules={[{ required: false, message: 'Please input your firstname!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: false, message: 'Please input your firstname!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>

            <Modal title="Edit Data" visible={modalEdit}
                confirmLoading={loading}
                onCancel={() => setModalEdit(false)}
                onOk={() => formEdit.submit()}
                okText="ตกลง"
                cancelText="ยกเลิก"
            >
                {/* เนื้อหา ใน modal */}
                <Form
                    form={formEdit}
                    name="formEdit"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="FirstName"
                        name="firstname"
                        rules={[{ required: true, message: 'Please input your firstname!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your firstname!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>
        </MasterPage >
    )
}