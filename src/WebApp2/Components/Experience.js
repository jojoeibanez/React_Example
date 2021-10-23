import React from 'react';
import Mainpage from '../Mainpage';
import Picc1 from "../Picture/Picc1.jpg"
import Picc2 from "../Picture/Picc2.jpg"
import Picc3 from "../Picture/Picc3.jpg"
import Picc4 from "../Picture/Picc4.jpg"
import Picc5 from "../Picture/Picc5.jpg"
import Picc6 from "../Picture/Picc6.jpg"
import { Image, Col, Row } from 'antd';



function Experience() {

    return (
        <Mainpage>
            <div style={{
                display: "flex",
                flexDirection: 'column',
                alignItems:'center',
                alignContent:"center"
            }}>
                <Row gutter={[16, 16]} style={{ padding: '30px' }}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={8} >
                        <img src={Picc1} />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={8}>
                        <img src={Picc2} />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={8}>
                        <img src={Picc3} />
                    </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ padding: '30px' }}>
                    <Col xs={24} sm={12} md={8} lg={6} xl={8}>
                        <img src={Picc4} />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={8}>
                        <img src={Picc5} />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={8}>
                        <img src={Picc6} />
                    </Col>
                </Row>
            </div>

        </Mainpage >
    )
}

export default Experience
