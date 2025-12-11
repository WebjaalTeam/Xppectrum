
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import './Industry.css'

function Industry() {
    const navigate = useNavigate();
    return (
        <div className='industry-container'>
            <h1>Empowering Industries with It Solutions</h1>
            <p className='para'>Innovative technology and expertise for every sector.</p>
            <div className='industry-cards-container'>
                <Carousel className='curousel'>
                    <Carousel.Item>
                        <img src='https://i.pinimg.com/1200x/18/09/aa/1809aadd8b5554064cf10b16c7d9577a.jpg' text="health" />
                        <Carousel.Caption>
                            <h3>HealthCare</h3>
                            <p>
                                Empowering hospitals and clinics with telemedicine, patient portals, and electronic
                                health
                                record systems for better care delivery.
                            </p>
                            <Button variant="outline-info" onClick={()=>navigate('/healthcare')}>View More</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='https://i.pinimg.com/1200x/fa/29/70/fa2970d17e2bbc7603b171ec231b6a4e.jpg' text="IT" />
                        <Carousel.Caption>
                            <h3>Information Technology(IT)</h3>
                            <p> Scalable IT infrastructure, cloud services, cybersecurity, and software development to</p>
                            <Button variant="outline-info" onClick={()=>navigate('/technology')}>View More</Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src='https://i.pinimg.com/1200x/f7/39/28/f7392885c6a2dd2ad7895ce0c14e1f34.jpg' text="real estate" />
                        <Carousel.Caption>
                            <h3>Real Estate</h3>
                            <p>

                                From property management tools to virtual tours and listings platforms, we support the
                                full
                                real estate lifecycle.

                            </p>
                            <Button variant="outline-info" onClick={()=>navigate('/realestate')}>View More</Button>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='https://i.pinimg.com/736x/38/59/30/38593081598d640c22f8ca34b6739e11.jpg' text="health" />
                        <Carousel.Caption>
                            <h3>Logistics & SupplyChain</h3>
                            <p>


                                Delivering end-to-end logistics software solutions, real-time tracking, and inventory
                                management for smoother operations.


                            </p>
                            <Button variant="outline-info" onClick={()=>navigate('/logistics')}>View More</Button>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='https://i.pinimg.com/1200x/bb/20/d3/bb20d3059ceda8c60d2bbaaa3e310656.jpg' text="finace" />
                        <Carousel.Caption>
                            <h3>Finace & Banking</h3>
                            <p>

                                Build trust with secure digital banking platforms, automated workflows, fraud detection,
                                and
                                financial insights.


                            </p>
                            <Button variant="outline-info" onClick={()=>navigate('/finace')}>View More</Button>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='https://i.pinimg.com/1200x/3a/06/e5/3a06e5dddf105c10edbfc9ea9abee306.jpg' text="retail" />
                        <Carousel.Caption>
                            <h3>Retail & E-commerce</h3>
                            <p>
                                Omnichannel platforms, payment gateways, and personalized customer experiences to boost
                                your
                                sales and loyalty. </p>
                            <Button variant="outline-info" onClick={()=>navigate('/retail')}>View More</Button>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <h1>Our Clients Love Our Work</h1>
            <div className='clients-container'>
                <div className='clients-card'>
                    <h1>"Exceptional support and deep industry understanding. Highly recommend!"</h1>
                    <p>-- Priya Mehta, Director - HealthLink Systems</p>
                </div>
                <div className='clients-card'>
                    <h1>"Their automation solution helped us reduce operational costs by 30% in just 6 months."

                    </h1>
                    <p>-- Anil Kumar, CEO - TechFab Ltd.</p>
                </div>
                <div className='clients-card'>
                    <h1>"Their automation solution helped us reduce operational costs by 30% in just 6 months."</h1>
                    <p>-- Anil Kumar, CEO - TechFab Ltd.</p>
                </div>
                <div className='clients-card'>
                    <h1>"Exceptional support and deep industry understanding. Highly recommend!"</h1>
                    <p>-- Priya Mehta, Director - HealthLink Systems</p>
                </div>
            </div>
            <div className='industry-expertise'>
                <h1>About Industry Expertise</h1>
                <div className='industry-head'>
                    <h1>
                        With decades of collective experience, we specialize in providing industry-focused technology solutions that drive innovation and efficiency. Our team works closely with businesses to understand their unique challenges and deliver customized strategies that align with their operational goals.

                        From process automation to real-time analytics, we blend advanced technologies with industry insights to deliver measurable results. Whether you’re in manufacturing, healthcare, finance, or retail, our solutions are designed to scale and adapt with your business.

                        What sets us apart is our commitment to understanding your industry inside and out. We stay ahead of emerging trends, regulatory shifts, and technology innovations—ensuring you always remain competitive.

                        By leveraging our domain knowledge, we help clients modernize legacy systems, optimize performance, and transition to smart, connected, and data-driven operations.

                        Our goal is not just to deliver technology—but to become your long-term strategic partner for growth, transformation, and industry leadership.
                    </h1>
                </div>
            </div>
            <div className="purpose-bar-bg">
                <h2>Ready to Elevate Your Business?</h2>
                <h4>Contact us to explore how our solutions can be tailored for your industry.</h4>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone Number" />
                    <select>
                        <option value="" disabled selected>Purpose</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app-development">Mobile App Development</option>
                    </select>
                    <button type="submit">Get in Touch</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Industry;