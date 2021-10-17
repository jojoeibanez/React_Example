import React from 'react'
import { Carousel } from 'antd';
import './Carousel.css';



function carousel() {

    const contentStyle = {
        height: '450px',
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
                        src="https://s359.kapook.com/pagebuilder/8c00ed0c-9b38-48bf-abd6-9b1cd8793a3e.jpg"
                    />
                </div>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img
                        height="450px"
                        width="100%"
                        style={contentStyle}
                        src="https://s359.kapook.com/pagebuilder/1e192cb3-f442-4e95-a0f8-0037da45fcc3.jpg"
                    />
                </h3>
            </div>
            <div>
                <div style={contentStyle}>
                    <img
                        height="450px"
                        width="100%"
                        style={contentStyle}
                        src="https://s359.kapook.com/pagebuilder/8c00ed0c-9b38-48bf-abd6-9b1cd8793a3e.jpg"
                    />
                </div>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img
                        height="450px"
                        width="100%"
                        style={contentStyle}
                        src="https://s359.kapook.com/pagebuilder/1e192cb3-f442-4e95-a0f8-0037da45fcc3.jpg"
                    />
                </h3>
            </div>
        </Carousel>
    )
}

export default carousel
