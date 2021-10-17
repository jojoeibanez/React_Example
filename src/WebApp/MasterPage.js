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
                <Sider collapsible theme="light" style={{ border: "0.2px solid " }}>
                    <div className="logo" style={{ border: "1px solid", height: "100px" }}>
                        <>
                            <Icon icon="line-md:home-md-twotone" width="198" height="80" />
                        </>
                    </div>
                    {/* <div style={{
                        padding: "10px",
                        color: "gray",
                    }}>
                      
                    </div> */}
                    {`Root/${state && state}`}
                    <Menu theme="light"
                        //  defaultSelectedKeys={['sub1']} 
                        mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />} onClick={() => {
                            
                            history.push({ pathname: "/WebApp/DashBoard" });

                        }}>
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />} onClick={() => {
                            setState("Covid-19");
                            history.push({ pathname: "/root/covid" });
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
                        <Menu.Item key="8" onClick={() => history.push({ pathname: "/root/Google" })}  >
                            <Icon icon="emojione-v1:money-bag" /> Expenses Account
                        </Menu.Item>

                        <Menu.Item key="9" onClick={() => {
                            setState("This Price is Current!!");
                            history.push({ pathname: "/root/DogeCoin" });
                        }}>
                            <Icon icon="openmoji:dog-face" /> DogeCoin
                        </Menu.Item>

                        <Menu.Item key="10" onClick={() => {
                            setState("Rating");
                            history.push({ pathname: "/root/Rating" });
                        }}>
                            <Icon icon="icon-park:comments" /> Rating
                        </Menu.Item>

                        <Menu.Item danger="true" key="10" onClick={() => {
                            setState("HomePage");
                            history.push({ pathname: "/home" });
                        }}>
                            <Icon icon="fxemoji:downpointingredtriangle" /> HomePage
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