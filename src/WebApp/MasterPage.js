import React, { useEffect, useState } from "react"
import { Layout, Menu, Breadcrumb, Row, Col, Avatar, Image } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { Icon } from '@iconify/react';



const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


export default function MasterPage({ ...props }) {
    const history = useHistory()
    const [state, setState] = useState(null);
    console.log(state);
    useEffect(() => {
        if (state !== null) {
            alert(state)
        }
    }, [state])

    return (
        <>
            <Layout style={{ minHeight: '100vh' }} >
                <Sider collapsible theme="dark" style={{}}>
                    <Header style={{ padding: 10 }} >
                        {/* <Avatar style={{ float: 'right' }} src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' ></Avatar> */}
                        <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />

                    </Header>
                    <div>
                        aa
                    </div>
                    <div className="logo" style={{ border: "1px solid", height: "50px" }}>
                        <>
                            <Icon icon="icon-park-outline:more-app" color="#8393de" width="30" height="30" />
                            <Icon icon="icon-park-outline:more-app" color="#8393de" width="40" height="40" />
                        </>
                    </div>
                    <div style={{
                        padding: "10px",
                        color: "gray",
                    }}>

                    </div>

                    {`Root/${state && state}`}
                    <Menu theme="dark"
                        //  defaultSelectedKeys={['sub1']} 
                        mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}
                            onClick={() => {
                                history.push({ pathname: "/WebApp/DashBoard" });
                            }}>
                            Dashboard
                        </Menu.Item>

                        <Menu.Item key="2" icon={<DesktopOutlined />}
                            onClick={() => {
                                setState("Covid-19");
                                history.push({ pathname: "/WebApp/Covid" });
                            }}>
                            Covid-19
                        </Menu.Item>

                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3" onClick={() => {
                                setState("User/Tom");
                                history.push({ pathname: "/WebApp/User/Susan" })
                            }}>Susan</Menu.Item>
                            <Menu.Item key="4" onClick={() => {
                                setState("User/Bill");
                                history.push({ pathname: "/WebApp/User/Satya" });
                            }} >Satya</Menu.Item>
                            <Menu.Item key="5" onClick={() => {
                                setState("User/Alex");
                                history.push({ pathname: "/WebApp/User/Mark" });
                            }}>Mark</Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6" onClick={() => {
                                setState("Team/Team1");
                                history.push({ pathname: "/WebApp/Team/Team1" });
                            }}
                            >
                                Team 1
                            </Menu.Item>

                            <Menu.Item key="7" onClick={() => {
                                setState("Team/Team2");
                                history.push({ pathname: "/WebApp/Team/Team2" });
                            }}
                            >
                                Team 2
                            </Menu.Item>
                        </SubMenu>

                        <Menu.Item key="10" icon={<Icon icon="icon-park:comments" />}
                            onClick={() => {
                                setState("Form");
                                history.push({ pathname: "/WebApp/Form" });
                            }}>
                            Form
                        </Menu.Item>

                        <Menu.Item key="11" icon={<Icon icon="icon-park:comments" />}
                            onClick={() => {
                                setState("Rating");
                                history.push({ pathname: "/WebApp/Rating" });
                            }}>
                            Rating
                        </Menu.Item>

                        <Menu.Item danger="true" key="12" icon={<Icon icon="fxemoji:downpointingredtriangle" />} onClick={() => {
                            setState("HomePage");
                            history.push({ pathname: "/home" });
                        }}>
                            HomePage
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} >
                        <Row>
                            <Col span={24} style={{ textAlign: "right", marginRight: 20 }}>


                                <Avatar src={<Image src="https://drive.google.com/uc?id=1N5mtIDNiE-iNmqMmhuaQMxWRv_94bSMG" />} size={44}>
                                </Avatar>

                            </Col>
                        </Row>
                    </Header>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            backgroundColor: "#fff",
                        }}
                    >
                        {props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>

        </>
    )
}





// Satisfaction Rating