import { Image, Menu, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import './Header.css'
import React, { useState } from 'react'
import Button from '@restart/ui/esm/Button';





export default function Header(props) {
    const history = useHistory();
    const [visible, setVisible] = useState(false);
    return (

        <div>
            <div className="profile-block">
                <div className="profile-btn">
                    <Button onClick={() => history.push({ pathname: "/Exp/Experience" })} className="btn-class">
                        Experience
                    </Button>
                </div>
  

                <div className="btn-last">
                    <Button onClick={() => history.push({ pathname: "/Home" })} className="btn-class">
                        Exit
                    </Button>
                </div>
            </div>



            <div className="block-a">
                <div >
                    <Image
                        preview={{ visible: false }}
                        width={1000}
                        height={700}
                        src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.6435-9/103416440_607340513320462_6854675522184507915_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHHfPPJBZaq9Anb_-0zCXUkcuYiln9ULThy5iKWf1QtOMg3rKihAOZ_ROthc0L8adhHDwXwwJ27B-0PUFIFHH7V&_nc_ohc=3KGoFYNzGG0AX_UB_Lb&_nc_ht=scontent.fbkk12-1.fna&oh=b879bb1fcc306a0c14178b045d348456&oe=61977244"
                        onClick={() => setVisible(true)}
                    />
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                            <Image src="https://drive.google.com/uc?id=1nHPs6O-xu4IDmDV7gqlrBYAuyr-EJWfo" />
                            <Image src="https://drive.google.com/uc?id=1wtc4bk8-r0ELlS4b7cpJwfMOzNIhVyht" />
                            <Image src="https://drive.google.com/uc?id=1qu0Uu_TUGPXKZWftCTM14RM1zx4tT-lE" />
                            <Image src="https://drive.google.com/uc?id=15RrvCQWSZMkU49pY_TkD1_nQwbal2jXs" />
                            <Image src="https://drive.google.com/uc?id=1W5cJZ8eILKb-pz9uAdKz-Ehl6Y1ID_Dj" />
                            <Image src="https://drive.google.com/uc?id=1w_WOJn5JhRG8ORi0lRzHBDuGAVyZOxlu" />
                            <Image src="https://drive.google.com/uc?id=1vlP6uT_w4kEZIGtbuShJfKDeg4ZD6iC4" />
                            <Image src="https://drive.google.com/uc?id=1mBDUhGIYV7m0jiggaSZVoJA7VlrZY_ql" />
                            <Image src="https://drive.google.com/uc?id=1EViTnkHHlQvw4T8Y-yppKd0x2Rm8469B" />
                            <Image src="https://drive.google.com/uc?id=16baajURTnkwG_WpnJbG_U2r1VMwMnTib" />
                            <Image src="https://drive.google.com/uc?id=17bYBnZ6_rZXHTCcKS7BoZUL5tkfK02xK" />
                            <Image src="https://drive.google.com/uc?id=1aUEi0UYzib9dxNkg1EGpgsmoU4TKh-9Q" />
                            <Image src="https://drive.google.com/uc?id=1AxUGr_CJYTO99vX3spMwuSKdxiNAqwLy" />
                            <Image src="https://drive.google.com/uc?id=1P6Vkll99q6C_Cg3gpVxws2Z3Uxg0csqK" />
                            <Image src="https://drive.google.com/uc?id=1ow5h48rS3g07nfUbmYjI2aSiQcXKWMbt" />
                            <Image src="https://drive.google.com/uc?id=1KoT2Kx78JgdksFNLvyc9TNeIGpe86q2I" />
                            <Image src="https://drive.google.com/uc?id=1NfNqgUZSzY1pJz8KRL-_6SMVVAREI3lO" />
                            <Image src="https://drive.google.com/uc?id=1T6LUZPI_R29LCqQgIbXdMGPEFXorCEgX" />
                            <Image src="https://drive.google.com/uc?id=194xdcoSABVUZ7n2CNr1ZOPjLkT-coQNr" />
                            <Image src="https://drive.google.com/uc?id=1l6R9yvMzUhCyl4QAlFfvHCaUvdOxoujr" />
                            <Image src="https://drive.google.com/uc?id=1z-tzJqiEafcM1Z6mX8PtIR49KU8tqrm5" />
                        </Image.PreviewGroup>
                    </div>
                    <div style={{
                        textAlign: "center",
                        fontSize: "20px"
                    }}>
                        ^^ Click the image above ^^ 
                    </div>
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