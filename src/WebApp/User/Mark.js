import React, { useState } from 'react'
import MasterPage from '../MasterPage'
import { Card, Col, Descriptions, Row } from 'antd';
import Table, { Column } from 'rc-table';





function Mark() {

    const { Meta } = Card;
    const [loading, setLoading] = useState(false);
    const [excel, setExcel] = useState([]);

    return (
        <MasterPage>
            <div
            style={{
                padding:"10px"
            }}
            >
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://mpics.mgronline.com/pics/Images/563000000435901.JPEG" />}
                >
                    <Meta title="Mark Zuckerberg" description="https://web.facebook.com/" onClick={() => window.open("https://web.facebook.com/zuck?_rdc=1&_rdr")} />
                </Card>
            </div>

            <div
            style={{
                padding:"30px"
            }}
            >
                <Descriptions title="User Info">
                    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address">
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                </Descriptions>,
            </div>



        </MasterPage>
    )
}

export default Mark
