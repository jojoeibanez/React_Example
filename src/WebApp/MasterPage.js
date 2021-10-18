import React, { useEffect, useState } from "react"
import { Layout, Menu, Breadcrumb, Row, Col, Avatar } from 'antd';
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
                                history.push({ pathname: "/root/Tom" })
                            }}>Tom</Menu.Item>
                            <Menu.Item key="4" onClick={() => {
                                setState("User/Bill");
                                history.push({ pathname: "/root/Bill" });
                            }} >Bill</Menu.Item>
                            <Menu.Item key="5" onClick={() => {
                                setState("User/Alex");
                                history.push({ pathname: "/root/Alex" });
                            }}>Alex</Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6" onClick={() => setState("Team/Team 1")}>Team 1</Menu.Item>
                            <Menu.Item key="7" onClick={() => setState("Team/Team 2")} >Team 2</Menu.Item>
                        </SubMenu>

                        <Menu.Item key="8" icon={<Icon icon="emojione-v1:money-bag" />} 
                        onClick={() => history.push({ pathname: "/WebApp/Expenses" })}  >
                            Expenses Account
                        </Menu.Item>

                        <Menu.Item key="9" icon={<Icon icon="openmoji:dog-face" />} 
                        onClick={() => {
                            setState("This Price is Current!!");
                            history.push({ pathname: "/root/DogeCoin" });
                        }}>
                            DogeCoin
                        </Menu.Item>

                        <Menu.Item key="10" icon={<Icon icon="icon-park:comments" />} 
                        onClick={() => {
                            setState("Rating");
                            history.push({ pathname: "/root/Rating" });
                        }}>
                            Rating
                        </Menu.Item>

                        <Menu.Item danger="true" key="10" icon={<Icon icon="fxemoji:downpointingredtriangle" />} onClick={() => {
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
                                <Avatar size={44} icon={<UserOutlined />} style={{ marginRight: 20 }} />
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