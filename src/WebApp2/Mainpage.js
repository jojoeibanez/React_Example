import { Image, Menu, Row, Col, Layout, Button, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { HomeOutlined, LineChartOutlined, ProfileOutlined, FullscreenExitOutlined, WindowsFilled } from '@ant-design/icons';
import './Mainpage.css'
const { Header, Content, Footer, Sider } = Layout;


export default function Mainpage(props) {
    const history = useHistory();

    return (
        <>
            <Layout style={{ minHeight: '100vh', }} >
                <Layout style={{
                    // alignItems: "center",
                    backgroundColor: 'white'
                }}>
                    <Header style={{
                        height: '80px',
                        backgroundColor: "white",
                        justifyItems: 'center',
                        alignItems: "center",
                        width: '100%',
                        display: 'flex',
                        borderColor: "gray",
                        paddingLeft: '180px',
                        position: '',
                        top: '0'
                    }} >

                        <Button style={{
                            border: 'none',
                            color: 'Gray',
                            fontSize: '20px',
                        }}
                            onClick={() => { history.push({ pathname: "/HomeExp" }) }}>
                            <HomeOutlined /> Home
                        </Button>

                        <Button ghost={false} style={{
                            border: 'none',
                            color: 'Gray',
                            fontSize: '20px',
                        }}
                            onClick={() => { history.push({ pathname: "/Main/Experience" }) }}>
                            <LineChartOutlined /> Experience
                        </Button>

                        <Button ghost={false} style={{
                            border: 'none',
                            color: 'Gray',
                            fontSize: '20px'
                        }}
                            onClick={() => { history.push({ pathname: "/Main/Profile" }) }}>
                            <ProfileOutlined /> Profile
                        </Button>

                        <Button ghost={false} style={{
                            border: 'none',
                            color: 'Gray',
                            fontSize: '20px',
                            marginLeft: '1200px'
                        }}
                            onClick={() => { history.push({ pathname: "/Home" }) }}>
                            <FullscreenExitOutlined /> Exit
                        </Button>


                    </Header>

                    <Content
                        style={{
                            padding: 244,
                            margin: 0,
                            minHeight: 800,
                            backgroundColor: "#fff",
                            width: '100%',

                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>

                <Layout style={{
                    alignItems: "center"
                }}>
                    <Footer className="background" style=
                        {{
                            height: '300px',
                            width: '100%',
                            display: 'flex',
                            fontSize: '20px'
                        }}>
                        <div>
                            {/* Let's talk together <br/> */}

                             JOJOEJJ.

                        </div>
                    </Footer>

                </Layout>
            </Layout>
        </>
    )
}

