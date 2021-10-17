import React from 'react'
import './Content.css'
import TabsA from './TabsA';

import { Row, Col, Card, Tabs } from 'antd';
import { useHistory } from 'react-router';
const { Meta } = Card;
const { TabPane } = Tabs;


function Content() {
    const history = useHistory();
    return (
        <body>
            <div className="flexbox">
                <div className="item">
                    <div className="">
                        <img
                            height="250px"
                            width="100%"
                            style={{ cursor: "pointer" }}
                            src="https://my.kapook.com/rf/376/282/img-hilight/img_hilight_11_1631872164.jpg"
                            onClick={() => window.open("http://kapook.com")}
                        />
                        <h3><a href="https://health.kapook.com/view228756.html" target="_blank" cat="tab-ไลฟ์สไตล์" track="ผมร่วงเยอะมาก บอกโรคอะไร เช็กอาการที่ส่อว่าอาจป่วย">ผมร่วงเยอะมาก บอกโรคอะไร เช็กอาการที่ส่อว่าอาจป่วย</a></h3>
                    </div>
                </div>
                <div className="item">
                    <div className="">
                        <img
                            height="250px"
                            width="100%"
                            style={{ cursor: "pointer" }}
                            src="https://s359.kapook.com/pagebuilder/2de505fc-da3b-4de2-b80b-d18c1c5358de.jpg"
                            onClick={() => window.open("http://kapook.com")}

                        />
                        <a href="https://www.kapook.com" target="_blank">อ่านต่อ....</a>

                    </div>
                </div>
                <div className="item">
                    <div className="">
                        <img
                            height="250px"
                            width="100%"
                            style={{ cursor: "pointer" }}
                            src="https://s359.kapook.com/pagebuilder/6d481a5a-b8a3-4ad7-9a5f-d48a07de5151.jpg"
                            onClick={() => window.open("http://kapook.com")}
                        />

                    </div>
                </div>
                <div className="item">
                    <div className="">
                        <img
                            height="250px"
                            width="100%"
                            src="https://img.kapook.com/u/2021/Jarosphan/Home/Fengshui/1339922/02.jpg"
                        />
                    </div>
                </div>
                <div className="item">
                    <div className="">
                        <img
                            height="250px"
                            width="100%"
                            src=" https://s359.kapook.com/pagebuilder/e7044f00-a436-463f-8c22-378e787d6d6b.jpg"
                        />

                    </div>
                </div>
                <div className="item">
                    <div className="">
                        <img
                            height="250px"
                            width="100%"
                            src="https://s359.kapook.com/pagebuilder/32022959-c5ea-406d-924d-3f2eb92f3412.jpg"
                        />

                    </div>
                </div>


            <TabsA/>

            <Card
                                    hoverable
                                    style={{ width: "100%" }}
                                    cover={<iframe width="560" height="600" src="https://www.youtube.com/embed/bP9gMpl1gyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
                                >
                                    <Meta title="Music SPA" description="ฟังเพลง ผ่อนคลาย" />
                                </Card>

            </div>
        </body>
    )
}

export default Content
