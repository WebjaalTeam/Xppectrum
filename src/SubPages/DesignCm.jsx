import { useNavigate } from "react-router-dom";

import { SiSimilarweb } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import Footer from "../Components/Footer";

import './DesignCm.css';

function DesignCommunication() {
    const navigate = useNavigate();
    return (
        <div className="designcm-container">
            <div className="designcm-text">
                <h1>Design Communication Services</h1>
                <p>At Webjaal, our Design Communication services are dedicated to crafting visually compelling and effective design solutions that resonate with your target audience. We understand the power of design in conveying your brand message and enhancing user experience.</p>
            </div>
            <div className="designcm-services">
                <h2><span><SiSimilarweb /></span>Website Development</h2>
                <p>
                    We build custom websites that are fast, responsive, and user-friendly. From simple portfolio sites to complex business platforms, our team creates engaging digital experiences tailored to your goals.

                    Our developers use the latest technologies including HTML5, CSS3, JavaScript, React, and WordPress to ensure your website performs seamlessly across all devices and browsers.
                </p>
                <button type="button" onClick={()=>navigate('/webdesign')}>Learn More</button>
            </div>
            <div className="designcm-application">
                <h2><span><FaMobileAlt /></span>Mobile Application Development</h2>
                <p>We create feature-rich mobile applications for both Android and iOS. Whether it’s a customer-facing app or an enterprise solution, we deliver high-performance mobile products that users love.

                    Our mobile development includes native and cross-platform solutions using Flutter, React Native, Kotlin, and Swift. We focus on clean UX/UI and reliable back-end integration.
                </p>
                 <button type="button" onClick={()=>navigate('/mobile')}>Learn More</button>
            </div>
            <div className="designcm-services">
                <h2><span><FaPaintBrush     /></span>Graphic Designs</h2>
                <p>
                    Our design team brings your brand to life through stunning visuals. From logos and brand identities to marketing materials and digital creatives, we create designs that communicate and convert.

                    We blend creativity with strategy, ensuring each graphic asset aligns with your brand and engages your target audience effectively.
                </p>
                <button type="button" onClick={()=>navigate('/graphicdesign')}>Learn More</button>
            </div>
            <Footer />
        </div>
    );
}
export default DesignCommunication;