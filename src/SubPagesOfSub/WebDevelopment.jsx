import Contact from '../Pages/Contact';
import { useNavigate } from 'react-router-dom';
import './WebDevelopment.css'
function WebDevelopment() {
    const navigate=useNavigate();
    return (
        <div className='webdevelopment-container'>
            <div className='web-bg-container'>
                <h1>Your Trusted Web Development Partner</h1>
                <p>We build modern, responsive websites that bring your business vision to life.</p>
                <button type='button' onClick={() => navigate("/contact")}>Get A Free Consultation</button>
            </div>
            <div className='about-web'>
                <h1>About Our Web Development Services</h1>
                <hr style={{ width: "35%", margin: "0 auto", border: "1px solid black" }} />

                <p>
                    We are a passionate team of designers, developers, and strategists with a mission to create websites that not only look great but perform flawlessly. With years of experience in HTML, CSS, JavaScript, React, and backend technologies, we’ve helped businesses of all sizes grow online.

                    Whether you're a startup looking for a strong digital presence or a growing brand in need of a scalable solution, we provide tailored web development that delivers results. Responsive design, fast loading speed, and SEO optimization come standard in every project.
                    <ul>
                        <li>✅ Custom Website Design & Development</li>
                        <li>✅ E-commerce Platforms & CMS Integration</li>
                        <li>✅ SEO Optimization & Speed Performance</li>
                        <li>✅ Maintenance, Support, and Hosting Services</li>
                    </ul>

                </p>
            </div>
            <div className='web-clients'>
                <div className='web-clients-card'>
                    <h1>“They made our online store fully functional and mobile-friendly. Sales improved immediately.”</h1>
                    <p>- Fatima K.
                    </p>
                </div>
                <div className='web-clients-card'>
                    <h1>
                        “Our new website looks stunning and loads lightning fast. Their team delivered exactly what we needed.”

                    </h1>
                    <p>- Amanda J.</p>
                </div>
                <div className='web-clients-card'>
                    <h1>
                        “From UX design to backend logic, every part of our web app was handled with professionalism.”

                    </h1>
                    <p>- Rahul D.</p>
                </div>
                <div className='web-clients-card'>
                    <h1>
                        “I appreciated their clear communication and efficient project timeline. Highly recommend for startups.”

                    </h1>
                    <p>- Jason M.</p>
                </div>
            </div>
            <div className='project-details-conatiner'>
                <h1>Our Featured Projects</h1>
                <div className='project-details'>
                    <img src='https://www.webjaal.com/assets/content_imgs/web_3.jpeg' alt='porject-one' />
                    <div className='project-content'>
                        <h1>Fashion E-Commerce Website</h1>
                        <h4>Built with React + Firebase</h4>
                        <h6>
                            Responsive online store with cart, payment gateway, admin dashboard, and live inventory updates. Delivered in 3 weeks.
                        </h6>
                        <button type='button' onClick={() => navigate("/contact")}>Feel Free To Contact</button>
                    </div>
                </div>
                <div className='project-details'>
                    <img src='https://www.webjaal.com/assets/content_imgs/web_4.jpeg' alt='porject-one' />
                    <div className='project-content'>
                        <h1>Personal Portfolio Website</h1>
                        <h4>Built with HTML, CSS, JavaScript</h4>
                        <h6>
                            Elegant, fast-loading site with animations, blog, and project showcase. Great for freelancers and developers.Delivered in 4 Days.
                        </h6>
                        <button type='button' onClick={() => navigate("/contact")}>Feel Free To Contact</button>
                    </div>
                </div>
                <div className='services-names'>
                    <h1>Front-End Development</h1>
                    <div className='service-tech-name'>
                        <div className='service-tech-names'>
                            <h1>React</h1>
                        </div>
                        <div className='service-tech-names'>
                            <h1>CSS</h1>
                        </div>
                        <div className='service-tech-names'>
                            <h1>JavaScript</h1>
                        </div>
                        <div className='service-tech-names'>
                            <h1>Vue</h1>
                        </div>
                    </div>
                    <h1>Backend Development</h1>
                     <div className='service-tech-name'>
                        <div className='service-tech-names'>
                            <h1>Node.js</h1>
                        </div>
                        <div className='service-tech-names'>
                            <h1>PHP</h1>
                        </div>
                        <div className='service-tech-names'>
                            <h1>Python</h1>
                        </div>
                        <div className='service-tech-names'>
                            <h1>Express.js</h1>
                        </div>
                    </div>
                    <h1>CMS Platforms</h1>
                    <div className='service-tech-name'>
                        <div className='service-tech-names'>
                            <h1>WordPress</h1>
                        </div>
                        <div className='service-tech-names'>
                            <h1>Shopify</h1>
                        </div>
                        <div className='service-tech-names'>
                            <h1>React</h1>
                        </div>
                        <div className='service-tech-names'>
                            <h1>Webflow</h1>
                        </div>
                    </div>
                    <h1>API Integration & Database Management</h1>
                    <h1>Performance Optimization & Security</h1>
                </div>
                <div className='project-gallery'>
                    <h1>Project Gallery</h1>
                    <p>Explore snapshots from some of our recent website builds, UI designs, and frontend experiments.</p>
                    <div className='gallery-img'>
                        <img src='https://www.webjaal.com/assets/content_imgs/wed_5.png' alt='project-one'/>
                        <img src='https://www.webjaal.com/assets/content_imgs/web_6.png' alt='project-one'/>
                        <img src='https://www.webjaal.com/assets/content_imgs/web_6.png' alt='project-one'/>
                        <img src='https://www.webjaal.com/assets/content_imgs/web_8.png' alt='project-one'/>
                        <img src='https://www.webjaal.com/assets/content_imgs/web_9.png' alt='project-one'/>
                        <img src='https://www.webjaal.com/assets/content_imgs/web_10.png' alt='project-one'/>
                    </div>
                </div>
            </div>
            <Contact/>
        </div>
    )
}
export default WebDevelopment;