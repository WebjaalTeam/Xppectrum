import { FaLaptopCode } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
import { FaCloud } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { LiaIndustrySolid } from "react-icons/lia";

import './Dashboard.css';
import FAQ from "../Pages/FAQ";
import Footer from "./Footer";
import { useNavigate, Link } from "react-router-dom";


function Dashboard() {
    const navigate = useNavigate();
    return (
        <div className="dashboard-conatainer">
            <div className="dashboard-content">
                <div className="dashboard-text">
                    <h1>
                        We make your dream come true.
                    </h1>
                    <p>
                        Leading in innovation and technology isn’t just a goal -
                        it’s our responsibility. We’re committed to shaping a digital
                        future that’s inclusive, intelligent, and impactful.
                    </p>
                    <button className="dashboard-btn" onClick={() => navigate("/service")}>
                        View More
                    </button>

                </div>
               <img src="/Xppectrum/logo.png" alt="Xppectrum" />


            </div>
            <div className="dashboard-bottom-text">
                <h1>Robust Web Applications and Mobile Apps Built for the Future</h1>
                <p>We build scalable, secure, high-performance web and app solutions powered by modern engineering and real industry insight.</p>
            </div>
            <div className="purpose-bar">
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone Number" />
                    <select>
                        <option value="" disabled selected>Purpose</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app-development">Mobile App Development</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="about-Xppectrum">
                <div className="image-container">
                    <img src="/Xppectrum/app.png" alt="Xppectrum" />
                </div>
                <div className="about-text">
                    <h1>We are Creative Tech Enthusiast working since 2018</h1>
                    <p><span>X</span>ppectrum is an international fast-growing IT Company that provides holistic IT solutions to businesses across geographies We offer IT expertise in Software, Website, and Application (iOS & Android) Development; UI/UX Design, Technology and Digital Marketing company based in India and has offices in the Australia, Poland, Netherlands, Oman, Qatar, Singapore, Malaysia, UAE and India. We are one of the fastest growing company which is specializing in software product, technology and digital marketing focused on implementing cutting-edge, targeted resolutions to customise the excellent mix of software , technology and digital marketing services.</p>
                    <button type="button" className="about-text-button" onClick={() => navigate("/contact")}>Contact Us</button>
                </div>
            </div>
            <div className="services-overview">
                <h1>Our Services Overview</h1>
                <p>We provide strategic, innovative, and industry-focused services that empower businesses to grow in the digital era.</p>
                <div className="services-card">
                    <Link to='/development'>

                        <div className="service-item">
                            <FaLaptopCode size={50} color="#0E9ECA" />
                            <h1>Web Development</h1>
                            <p>Building responsive and dynamic websites tailored to your business needs.</p>

                        </div>
                    </Link>
                    <Link to='/digitaMarketing'>
                        <div className="service-item">
                            <GrAnnounce size={50} color="#0E9ECA" />
                            <h1>Digital Marketing</h1>
                            <p>Comprehensive digital marketing strategies to enhance your online presence and reach.</p>
                        </div>
                    </Link>
                    <Link to='/designCommunication'>
                    <div className="service-item">
                        <MdDesignServices size={50} color="#0E9ECA" />
                        <h1>Design Communication</h1>
                        <p>Creative design solutions that effectively communicate your brand message.</p>
                    </div>
                    </Link>
                    <Link to='/cloudSolutions'>
                    <div className="service-item">
                        <FaCloud size={50} color="#0E9ECA" />
                        <h1>Cloud Solutions</h1>
                        <p>Scalable and secure cloud services to optimize your business operations.</p>
                    </div>
                    </Link>
                    <Link to='/technology'>
                    <div className="service-item">
                        <GrTechnology size={50} color="#0E9ECA" />
                        <h1>Web Technology</h1>
                        <p>Advanced web technologies to create innovative and efficient web applications.</p>
                    </div>
                    </Link>
                    <Link to='/industury'>
                    <div className="service-item">
                        <LiaIndustrySolid size={50} color="#0E9ECA" />
                        <h1>Industry</h1>
                        <p>Specialized solutions tailored for various industries to meet unique business challenges.</p>
                    </div>
                    </Link>

                </div>
                <h1>Our Vision & Mission</h1>
                <p>We’re committed to excellence, innovation, and customer success.</p>
                <div className="vision-mision">

                    <div className="vision">
                        <h2>Our Vision</h2>
                        <p>To be a global leader in IT solutions, driving innovation and excellence for businesses worldwide.</p>
                    </div>
                    <div className="mision">
                        <h2>Our Mission</h2>
                        <p>To deliver cutting-edge technology solutions that empower businesses to thrive in the digital age.</p>
                    </div>
                </div>
            </div>
            <div className="why-choose-us">
                <h1>Why Choose Xppectrum?</h1>
                <p>Choosing Xppectrum means partnering with a team dedicated to your success. Here’s why we stand out:</p>
                <ul>
                    <li><strong>Expertise:</strong> Our team consists of seasoned professionals with deep industry knowledge.</li>
                    <li><strong>Innovation:</strong> We leverage the latest technologies to deliver innovative solutions.</li>
                    <li><strong>Customer-Centric:</strong> We prioritize our clients' needs and work closely to achieve their goals.</li>
                    <li><strong>Quality Assurance:</strong> We are committed to delivering high-quality products and services.</li>
                    <li><strong>Comprehensive Services:</strong> From development to marketing, we offer end-to-end solutions.</li>
                </ul>
            </div>
            <FAQ />
            <div className="purpose-bar-bg">
                <h1>Looking for the Best Robust Web Applications and Mobile Apps Built for the Future</h1>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone Number" />
                    <select>
                        <option value="" disabled selected>Purpose</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app-development">Mobile App Development</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}
export default Dashboard;