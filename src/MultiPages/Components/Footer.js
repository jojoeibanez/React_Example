import React from 'react'
import './Footer.css'
import { useHistory, useRouteMatch } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';




function Footer() {
    const history = useHistory();

    return (
        <div className="cta-bg">
            <div className="overlay">
                <div className="cta-text">
                    <div className="cta-group">
                        <h2 style={{ color: "white" }}>Services & Solutions</h2>
                        <p>
                            สื่อโฆษณาออนไลน์ ครบวงจร<br />
                            ตอบสนองความต้องการทางการตลาด <br />
                            ด้วยการโฆษณาและประชาสัมพันธ์บนหน้าเว็บไซต์
                        </p>
                    </div>
                    <div className="cta-group">
                        <h2 style={{ color: "white" }}>Video Production</h2>
                        <p>
                            รับผลิต รายการโชว์ทางอินเทอร์เน็ต ในรูปแบบตอนสั้น ๆ <br />
                            ไปจนถึงซีรีส์, วิดีโอโปรโมชั่นสินค้าและบริการ <br />
                            ตลอดจนวิดีโอรูปแบบพิเศษ ทั้งถ่ายทอดสดและออนดีมานด์<br />
                        </p>
                    </div>
                    <div className="cta-group">
                        <h2 style={{ color: "white" }}>Enterprise Solutions</h2>
                        <p>
                            ครอบคลุมในทุกความต้องการด้านเทคโนโลยี ในยุค Big Data <br />
                            ด้วยทีมงานผู้เชี่ยวชาญทั้ง Software และ System Engineer <br />
                            ประสบการณ์พัฒนาระบบขนาดใหญ่ระดับองค์กรขนาดใหญ่ <br />
                            ทั้งหน่วยงานราชการ และเอกชน<br />
                            พร้อมให้บริการลูกค้าตลอด 24 ชั่วโมง.
                        </p>
                    </div>
                    <div className="cta-group">
                        <h2 style={{ color: "white" }}>Social Media Solutions</h2>
                        <p>
                            บริหารสื่อยุคใหม่ Social Media Solutions<br />
                            บริการรับวางแผนและบริหาร <br />
                            ผลิตเนื้อหาที่หลากหลายบนเครือข่าย Social Media
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Footer
