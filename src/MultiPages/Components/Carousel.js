import React from 'react'
import { Carousel } from 'antd';
import './Carousel.css';



function carousel() {

    const contentStyle = {
        height: '750px',
        color: '#fff',
        lineHeight: '260px',
        textAlign: 'center',
        background: '#364d79',
    };


    return (

        <Carousel autoplay>
            <div>
                <div style={contentStyle}>
                    <img
                        height="450px"
                        width="100%"
                        style={contentStyle}
                        src="https://gmedia.playstation.com/is/image/SIEPDC/no-mans-sky-huge-hero-desktop-tablet-02-ps4-en-28jul20?$native$"
                    />
                </div>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img
                        height="450px"
                        width="100%"
                        style={contentStyle}
                        src="https://res09.bignox.com/appcenter/th/2020/12/unnamed-1-ocg.png"
                    />
                </h3>
            </div>
            <div>
                <div style={contentStyle}>
                    <img
                        height="450px"
                        width="100%"
                        style={contentStyle}
                        src="https://s3-ap-southeast-1.amazonaws.com/media.storylog/storycontent/5e482116fef7c60f7f0b7da3/15817854127363854144.jpg"
                    />
                </div>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img
                        height="450px"
                        width="100%"
                        style={contentStyle}
                        src="https://static.trueplookpanya.com/tppy/member/m_845000_847500/845956/cms/images/2019/Screenshot_20200408_152304_com.tgc.sky.android.jpg"
                    />
                </h3>
            </div>
        </Carousel>
    )
}

export default carousel
