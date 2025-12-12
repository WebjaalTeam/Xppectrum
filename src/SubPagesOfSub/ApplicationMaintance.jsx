import Contact from '../Pages/Contact';
import { useNavigate } from 'react-router-dom';

import './ApplicationMaintance.css'
function ApplicationMaintance() {
    const navigate = useNavigate();
    return (
        <div className='application-container'>
            <div className='application-bg-container'>
                <h1>Reliable Application Maintenance & Support
                </h1>
                <p>Keep your apps running efficiently with 24/7 support, upgrades, and performance optimization services.

                </p>
                <button type='button' onClick={() => navigate("/contact")}>Get A Free Consultation</button>
            </div>
            <div className='application-web'>
                <h1>About Our Maintenance Services
                </h1>
                <hr style={{ width: "35%", margin: "0 auto", border: "1px solid black" }} />

                <p>
                    Applications need continuous care to stay secure, fast, and user-friendly. Our dedicated application maintenance team ensures your software evolves with your business. We reduce downtime, enhance functionality, and implement critical patches to avoid disruptions.

                    From minor bug fixes to major version upgrades, we maintain both frontend and backend layers to keep your application in peak condition. Our team follows a proactive monitoring strategy to catch and resolve issues before they impact your users.

                    <ul>
                        <li>✅ 24/7 Monitoring & Bug Fixes</li>
                        <li>✅ UI/UX Refinement & Feature Upgrades</li>
                        <li>✅ Security Patch Management</li>
                        <li>✅ Code Refactoring & Performance Tuning</li>
                    </ul>

                </p>
            </div>
            <h1 className='application-head'>Client Feedback</h1>
            <div className='application-clients'>
                <div className='application-clients-card'>
                    <h1>“Their monitoring services helped us avoid a major crash. Truly a professional maintenance partner.”
                    </h1>
                    <p>- Kiran D.

                    </p>
                </div>
                <div className='application-clients-card'>
                    <h1>
                        “They take care of updates, backups, and bugs so we can focus on business growth. Highly recommended.”
                    </h1>
                    <p>- Neha T.
                    </p>
                </div>
                <div className='application-clients-card'>
                    <h1>
                        “Our legacy system is still running smoothly, thanks to their team’s proactive performance tuning and support.”

                    </h1>
                    <p>- Rajat V.
                    </p>
                </div>

            </div>
            <div className='application-details-conatiner'>
                <h1>Recent Maintenance Projects
                </h1>
                <div className='application-details'>
                    <img src='https://www.webjaal.com/assets/content_imgs/crm.png' alt='application-one' />
                    <div className='application-content'>
                        <h1>CRM Dashboard Revamp & Optimization
                        </h1>
                        <h4>Laravel + MySQL + Redis

                        </h4>
                        <h6>
                            Improved query speed by 60%, resolved session errors, and implemented monthly release cycles with rollback support.


                        </h6>
                        <button type='button' onClick={() => navigate("/contact")}>Get Maintenance Quote</button>
                    </div>
                </div>
                <div className='application-details'>
                    <img src='https://www.webjaal.com/assets/content_imgs/mobile_stay.png' alt='porject-one' />
                    <div className='application-content'>
                        <h1>Mobile App Stability & Update Release
                        </h1>
                        <h4>Flutter + Firebase

                        </h4>
                        <h6>
                            Fixed login bugs, released v2.3 with new features, added crash analytics, and enhanced battery optimization.

                        </h6>
                        <button type='button' onClick={() => navigate("/contact")}>Let’s Maintain Yours</button>
                    </div>
                </div>
                <div className='application-names'>
                    <h1>Our Maintenance Scope
                    </h1>
                    <p>We offer comprehensive support and maintenance services for modern and legacy applications:

                    </p>
                    <div className='application-service-cards'>
                        <h1>✔️  Application Health Monitoring
                        </h1>
                        <h1>✔️  Bug Identification & Resolution
                        </h1>
                        <h1>✔️  Performance Optimization
                        </h1>
                        <h1>✔️  Version Control & Code Refactoring
                        </h1>
                        <h1>✔️  Security Enhancements & Compliance Updates
                        </h1>
                    </div>
                </div>

            </div>
            <Contact />
        </div>
    )
}

export default ApplicationMaintance;