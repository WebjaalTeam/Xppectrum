import { GiSpiderWeb } from "react-icons/gi";
import { GrApps } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { PiBuildingsBold } from "react-icons/pi";

import './Development.css'
import { useNavigate,Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Development() {
    const navigate=useNavigate();
    return (
        <div className='development-container'>
            <div className='web-bg'>
                <h1>
                    We build modern, scalable websites tailored to your needs.
                </h1>
                <p>Innovative technology and expertise for every sector.</p>
            </div>
            <div className='business-bg'>
                <h1>Crafting Digital Experiences That Drive Business Growth</h1>
                <hr style={{ width: "40%", margin: "0 auto", border: "1px solid black" }} />
                <p>A well-developed website has unlimited potential to attain the maximum reach of the business.
                    Xppectrum is a leading web development company in India that understands each and every micro information about the website and business to provide the excellent services out of best.
                    The crucial part of designing any website is understanding the main motive of the website and its user interface that acts like a magnet to the customers. Customer satisfaction is the backbone of our organization and we continuously work hard to maximize it and give the rich experience with one of the best website development company in India - Xppectrum.</p>
            </div>
            <div className='web-cards-container'>
                <Link to='/webdevelopment'>
                <div className='web-card-web'>
                    <GiSpiderWeb />
                    <div className="web-card-content">
                        <h1>Web Development</h1>
                        <p>We build modern, scalable websites tailored to your needs.
                            Our code is clean, fast, and SEO-optimized.</p>
                        <button type="button">View More</button>
                    </div>
                </div>
                </Link>
                <Link to='/mobile'>
                <div className='web-card-web'>
                    <GrApps />
                    <div className="web-card-content">
                        <h1>Mobile Apps</h1>
                        <p>We create powerful mobile apps that scale with your business.

                            Support for both Android & iOS platforms.
                        </p>
                        <button type="button">View More</button>
                    </div>
                </div>
                </Link>
                <Link to='/e-commerce'>
                <div className='web-card-web'>
                    <FaShippingFast />
                    <div className="web-card-content">
                        <h1>E-Commerce</h1>
                        <p>Launch your online store with ease.

                            Custom payment, shipping, and product modules.

                        </p>
                        <button type="button">View More</button>
                    </div>
                </div>
                </Link>
                <Link to='/product-development'>
                <div className='web-card-web'>
                    <MdProductionQuantityLimits />
                    <div className="web-card-content">
                        <h1>Product Developement</h1>
                        <p>Scale your business using cloud technology.

                            From hosting to automation, we manage it all.

                        </p>
                        <button type="button">View More</button>
                    </div>
                </div>
                </Link>
                <Link to='/infrastrucure'>
                <div className='web-card-web'>
                    <PiBuildingsBold />
                    <div className="web-card-content">
                        <h1>Infrastructure Maintenance</h1>
                        <p>Integrate intelligent solutions into your workflow.

                            Let automation handle the repetitive stuff.

                        </p>
                        <button type="button">View More</button>
                    </div>
                </div>
                </Link>
            </div>
            <div className="sets-us-part">
                <h1>What Sets Us Apart</h1>
                <p>Discover how we bring value to your digital journey.</p>
                <div className="sets-us-card-container">
                    <div className="sets-us-card">
                        <h1>Our Mission</h1>
                        <p>
                            At our core, we aim to empower businesses with modern, scalable digital solutions tailored to their unique needs. By understanding your goals, industry, and audience, we craft experiences that not only look good but perform exceptionally.
                        </p>
                    </div>
                    <div className="sets-us-card">
                        <h1>Why Choose Us</h1>
                        <p>
                            We combine strategic thinking, creative design, and robust development practices to deliver websites and applications that work seamlessly. Our team brings years of expertise and a passion for solving real-world problems through technology.

                        </p>
                    </div>
                    <div className="sets-us-card">
                        <h1>Custom-Tailored Solutions
                        </h1>
                        <p>
                            Every project we take on is approached with a unique strategy. From UI/UX planning to backend architecture, we ensure that your digital product is designed to scale and evolve with your business growth and goals.

                        </p>
                    </div>
                    <div className="sets-us-card">
                        <h1>Dedicated Support and Growth</h1>
                        <p>
                            Launching your website is just the beginning. We provide continuous support, performance monitoring, and feature enhancements to keep your digital presence strong, relevant, and competitive in your industry.

                        </p>
                    </div>
                </div>
            </div>
            <div className="shedule-card">
                <h1>Let’s Build Something Great Together</h1>
                <p>
                    Whether you're launching a new project or revamping an existing one, our team is ready to deliver a website that performs, scales, and stands out.
                </p>
                <button type="button" onClick={()=>navigate('/contact')}>Schedule a Call</button>
            </div>
            <Footer/>
        </div>
    )


}
export default Development;