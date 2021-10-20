import React from 'react'
import MasterPage from '../MasterPage'
import { Card, Descriptions } from 'antd';

const { Meta } = Card;
function Susan() {
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
                    cover={<img alt="example" src="https://i.ytimg.com/vi/_0Nl-pl667U/maxresdefault.jpg" />}
                >
                    <Meta title="Susan Wojcicki" description="https://www.youtube.com/" />
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

export default Susan
