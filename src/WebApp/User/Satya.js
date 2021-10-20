import React from 'react'
import MasterPage from '../MasterPage'
import { Card, Descriptions } from 'antd';

const { Meta } = Card;
function Satya() {
    return (
        <MasterPage>
            <div
                style={{
                    padding: "10px"
                }}
            >
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://image.cnbcfm.com/api/v1/image/104800125-GettyImages-681557990.jpg?v=1573450585" />}
                >
                    <Meta title="Satya Nadella" description="https://news.microsoft.com/exec/satya-nadella/" />
                </Card>,
            </div>

            <div
                style={{
                    padding: "30px"
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

export default Satya
