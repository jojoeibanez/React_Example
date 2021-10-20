import React from 'react'
import MasterPage from './MasterPage'
import { Row, Col, Card, Tabs } from 'antd';
import { Icon } from '@iconify/react';

function Covid() {
    const { Meta } = Card;
    const { TabPane } = Tabs;
    return (
        <MasterPage>
            <div style={{
                fontSize: "30px",
                padding: "25px"
            }}>
                <h5>
                    Covid-19 News
                </h5>
            </div>
            <div style={{ padding: "30px" }}>

                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <Card
                            hoverable
                            style={{ width: "100%" }}
                            cover={<img alt="example" src="https://my.kapook.com/rf/208/156/img-covid19/img_covid19_1_1632205223.jpg" />}
                            onClick={() => window.open("https://covid-19.kapook.com/view246785.html")}
                        >
                            <Meta title="เปรียบเทียบวัคซีนซิโนฟาร์ม VS ไฟเซอร์ นักเรียนเลือกฉีดตัวไหนดี ?" description="https://covid-19.kapook.com/view246785.html" />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <Card
                            hoverable
                            style={{ width: "100%" }}
                            cover={<img alt="example" src="https://my.kapook.com/rf/496/372/img-covid19/img_covid19_1_1633574688.jpg" />}
                            onClick={() => window.open("https://health.kapook.com/view247382.html")}
                        >
                            <Meta title="ยาโมลนูพิราเวียร์ (Molnupiravir) ความหวังรักษาโควิด 19 ที่โลกรอคอย" description="https://health.kapook.com/view247382.html" />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <Card
                            hoverable
                            style={{ width: "100%" }}
                            cover={<img alt="example" src="https://my.kapook.com/rf/208/156/img-covid19/img_covid19_1_1625732885.jpg" />}
                            onClick={() => window.open("https://covid-19.kapook.com/view243582.html")}
                        >
                            <Meta title="ฉีดวัคซีนโควิดแล้วแพร่เชื้อได้ไหม ต้องระวังมากน้อยแค่ไหนไม่ให้ติดโควิด 19" description="https://covid-19.kapook.com/view243582.html" />
                        </Card>
                    </Col>
                </Row>

            </div>
        </MasterPage>
    )
}

export default Covid
