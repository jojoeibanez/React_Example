import React from 'react'
import { Row, Col, Card, Tabs } from 'antd';
import './TabA.css'
import { Icon } from '@iconify/react';


const { Meta } = Card;
const { TabPane } = Tabs;

function TabsA() {
    return (
        <div>
            {/* Grid Responesive */}
            <Tabs className=".ant-tabs-card .ant-tabs-tab-active" defaultActiveKey="1" type="card" style={{
                marginTop: "35px"
            }}>
                <TabPane tab={
                    <>
                        <Icon icon="logos:youtube-icon" />
                        <label>xxxxx</label>
                    </>
                } key="1">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_1_1632387000.jpg" />}
                            >
                                <Meta title="งานวิวาห์ไฟลุกท่วม แขกผวากรี๊ดลั่น วิ่งหนีตายระทึก หวิดเกิดโศกนาฏกรรมสยอง" description="https://hilight.kapook.com/view/216787" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_1_1632373870.jpg" />}
                            >
                                <Meta title="แฉ ผอ. ถลุงเงินโรงเรียนก่อนเกษียณ 8 วัน บังคับใส่ซอง ครูนับวันให้ไปเร็ว ๆ" description="https://hilight.kapook.com/view/216778" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_1_1632371714.jpg" />}
                            >
                                <Meta title="รักเร่าร้อนเปลี่ยนชีวิต สาวโดนฝากรอยดูดที่ต้นคอขำ ๆ สุดท้ายกลายเป็นอัมพาต" description="https://hilight.kapook.com/view/216776" />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="ประเด็นร้อน" key="2">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_2_1632383888.jpg" />}
                            >
                                <Meta title="อนุทิน แจงปม ไฟเซอร์ 1 ล้านโดส จากสหรัฐฯ ยันไทยยังไม่ได้เอกสาร - กต." description="https://covid-19.kapook.com/view246883.html" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_2_1632382317.jpg" />}
                            >
                                <Meta title="อั่งอั๊ง หลานธนาธร รับทราบข้อหา ม.112 ปมทวีตเดือดเหตุม็อบปะทะ พาดพิงเบื้องสูง" description="https://hilight.kapook.com/view/216784" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_2_1632387244.jpg" />}
                            >
                                <Meta title="ครูทั่วประเทศเป็นหนี้สหกรณ์ฯ สูงสุด 9 แสนล้าน ศธ. เผยข่าวดี เร่งช่วยแก้หนี้" description="https://hilight.kapook.com/view/216788" />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="บันเทิง" key="3">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_3_1632372776.jpg" />}
                            >
                                <Meta title="อั๋น ดีใจลั่น จ๋า คลอด น้องพีท ลูกคนที่ 2...แม้น้ำตาไหลแต่ทุกวินาทีมีแต่ความสุข" description="https://baby.kapook.com/view246873.html" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_3_1632385983.jpg" />}
                            >
                                <Meta title="ปุ้มปุ้ย พรรณทิพา ฟาดมาก ! ซัดกลับชาวเน็ตช่างแซะ แขวะแรงเรื่องพุง-สะดือ" description="https://women.kapook.com/view246884.html" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_3_1632386244.jpg" />}
                            >
                                <Meta title="ไม่มีแผ่ว ! กระแต อาร์สยาม โชว์หุ่นในชุดบิกินี่ งานผิว-งานกล้าม อื้อหือ.. แซ่บ !!" description="https://women.kapook.com/view246889.html" />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="ผู้หญิง" key="4">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/496/372/img-hilight/img_hilight_5_1632310851.jpg" />}
                            >
                                <Meta title="รู้จัก น้องไข่เน่า อดีตดาว OnlyFans สุดน่ารัก ทำเงินเฉียดล้านใน 3 เดือน !" description="https://women.kapook.com/view246889.html" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/208/156/img-hilight/img_hilight_5_1632310870.jpg" />}
                            >
                                <Meta title="บอกลาตาบวมตุ่ย ! วิธีแต่งหน้าลดถุงใต้ตากับเทคนิคง่าย ๆ ไม่กี่ขั้นตอน" description="https://women.kapook.com/view85419.html" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/208/156/img-hilight/img_hilight_5_1632310889.jpg" />}
                            >
                                <Meta title="บีบสิวอันตรายไหม ? ทำอย่างไรให้ถูกวิธี ถ้าไม่อยากเสี่ยงหน้าพัง" description="https://women.kapook.com/view236411.html" />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="ผู้ชาย" key="5">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/417/313/img-hilight/img_hilight_6_1632355652.jpg" />}
                            >
                                <Meta title="เปิดประวัติ แม็ก เดอะสตาร์ หนุ่มหล่อหน้าใส กับความสามารถรอบด้าน" description="https://men.kapook.com/view90798.html" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/152/114/img-hilight/img_hilight_6_1632268573.jpg" />}
                            >
                                <Meta title="กางเกงในผู้ชายขึ้นรา ควรใส่หรือไม่ มีวิธีป้องกันยังไง ?" description="https://men.kapook.com/view246747.html" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/152/114/img-hilight/img_hilight_6_1631923385.jpg" />}
                            >
                                <Meta title="9 ถุงยางอนามัยผู้ชาย มีเซ็กส์อย่างปลอดภัย สัมผัสไวทุกท่วงท่า" description="https://men.kapook.com/view140937.html" />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="ไลฟ์สไตล์" key="6">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_11_1632308353.jpg" />}
                            >
                                <Meta title="ลำไส้ใหญ่ทำหน้าที่อะไร ดูแลอย่างไรห่างไกลโรค" description="https://health.kapook.com/view246824.html" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_11_1632363484.jpg" />}
                            >
                                <Meta title="20 สูตรขนมสไตล์มินิมอล ถ่ายรูปสวย ทำไม่ยากลงโซเชียลได้" description="https://cooking.kapook.com/view246340.html" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_11_1632286691.jpg" />}
                            >
                                <Meta title="รีโนเวทบ้านหน้าแคบ 27 ตร.ว. สวย โปร่ง ดูสบายตา อยู่แล้วสบายใจ" description="https://home.kapook.com/view246678.html" />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="ที่กิน - ที่เที่ยว" key="7">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_10_1632363713.jpg" />}
                            >
                                <Meta title="ชม 25 UNSEEN New Series แหล่งท่องเที่ยวไทยสุดอัศจรรย์" description="https://travel.kapook.com/view246790.html" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_10_1632303575.jpg" />}
                            >
                                <Meta title="9 ที่พักราชบุรีแนวธรรมชาติ ตักตวงชั่วโมงความสุขที่แสนเรียบง่าย" description="https://travel.kapook.com/view228427.html" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_10_1632303710.jpg" />}
                            >
                                <Meta title="เที่ยวเมืองเก่ายุโรป ทาลลินน์ เมืองหลวงแห่งเอสโตเนีย" description="https://travel.kapook.com/view221585.html" />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="วาไรตี้" key="8">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_8_1632305583.jpg" />}
                            >
                                <Meta title="8 ตัวละครจากหนัง-ซีรีส์ ที่คนดูเหม็นขี้หน้าสุด ๆ" description="https://movie.kapook.com/view246586.html" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_8_1632306011.jpg" />}
                            >
                                <Meta title="เปิดคำทำนายจากการจาม รู้ไหมจามเวลาไหน บอกอะไรได้บ้าง ?" description="https://horoscope.kapook.com/view9779.html" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_8_1632306053.jpg" />}
                            >
                                <Meta title="เช็ก ! วิธีขอคืนเงินสมทบประกันสังคมที่ส่งเกิน รีบยื่นเรื่องภายใน 1 ปี" description="https://money.kapook.com/view218769.html" />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="ฟุตบอล" key="9">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/208/156/img-hilight/img_hilight_9_1632366175.jpg" />}
                            >
                                <Meta title="ผลจับสลาก คาราบาว คัพ รอบ 4 - ลิเวอร์พูล งานเบา" description="https://football.kapook.com/news-36362" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/208/156/img-hilight/img_hilight_9_1632360800.jpg" />}
                            >
                                <Meta title="คาราบาว คัพ : เชลซี 1-1 แอสตัน วิลล่า (ดวลจุดโทษ 4-3)" description="https://football.kapook.com/match-18386424-chelsea-aston-villa" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://my.kapook.com/rf/208/156/img-hilight/img_hilight_9_1632360873.jpg" />}
                            >
                                <Meta title="คาราบาว คัพ : อาร์เซนอล 3-0 เอเอฟซี วิมเบิลดัน" description="https://football.kapook.com/match-18386428-arsenal-afc-wimbledon" />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default TabsA
