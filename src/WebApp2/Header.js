import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import './Header.css'
import React from 'react'
import Button from '@restart/ui/esm/Button';

import PropTypes from 'prop-types'

export default function Header(props) {
    const history = useHistory();

    return (

        <div >
            <div className="profile-block">

                <div className="profile-btn">
                    <Button onClick={() => history.push({ pathname: "/Exp/Profile" })} className="btn-class">
                        Profile
                    </Button>
                </div>

                <div className="profile-btn">
                    <Button onClick={() => history.push({ pathname: "/Exp/Experience" })} className="btn-class">
                        Experience
                    </Button>
                </div>

                <div className="profile-btn">
                    <Button onClick={() => history.push({ pathname: "/Exp/Skills" })} className="btn-class">
                        Skills
                    </Button>
                </div>

                <div className="btn-last">
                    <Button onClick={() => history.push({ pathname: "/Home" })} className="btn-class">
                        Exit
                    </Button>
                </div>

            </div>
        </div>

    )
}








    // < div className = "port-size" >
    //     <Menu mode="horizontal">
    //         <Menu.Item key="mail" onClick={() => history.push({ pathname: "/Exp/Profile" })} icon={<MailOutlined />}>
    //             Profile
    //         </Menu.Item>
    //         <Menu.Item key="app" onClick={() => history.push({ pathname: "/Exp/Experience" })} icon={<AppstoreOutlined />}>
    //             Experience
    //         </Menu.Item>
    //         <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
    //             <Menu.ItemGroup title="Item 1">
    //                 <Menu.Item key="setting:1">Option 1</Menu.Item>
    //                 <Menu.Item key="setting:2">Option 2</Menu.Item>
    //             </Menu.ItemGroup>
    //             <Menu.ItemGroup title="Item 2">
    //                 <Menu.Item key="setting:3">Option 3</Menu.Item>
    //                 <Menu.Item key="setting:4">Option 4</Menu.Item>
    //             </Menu.ItemGroup>
    //         </SubMenu>
    //         <Menu.Item key="alipay" onClick={() => history.push({ pathname: "/home" })} >
    //             <a>
    //                 Back To HomePage
    //             </a>
    //         </Menu.Item>
    //     </Menu>
    //         </ >
    // <div>
    //     aaaaaaaaaa
    // </div>