import React from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
const { SubMenu } = Menu;
function Header() {
    const history = useHistory();
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    Navigation One
                </Menu.Item>

                <Menu.Item key="DogeCoin" onClick={() => history.push({ pathname: "/DogeCoin" })}>
                    DogeCoin Price
                </Menu.Item>

                <Menu.Item key="Application" style={{color:"red"}} onClick={() => history.push({ pathname: "/home" })}>
                    Exit To HomePage
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Header
