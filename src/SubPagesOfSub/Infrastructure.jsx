import Contact from '../Pages/Contact';
import { useNavigate } from 'react-router-dom';

import './Infrastructure.css'
function Infrastructure() {
    const navigate=useNavigate();
    return (
        <div className='infra-container'>
            <div className='infra-bg-container'>
                <h1>Secure & Scalable Infrastructure Maintenance

                </h1>
                <p>Keep your cloud and on-premise infrastructure reliable, optimized, and protected with proactive maintenance solutions.


                </p>
                <button type='button'onClick={() => navigate("/contact")}>Get Infra Support</button>
            </div>
            <div className='infra-web'>
                <h1>About Our Infrastructure  Services
                </h1>
                <hr style={{ width: "35%", margin: "0 auto", border: "1px solid black" }} />

                <p>
                    Infrastructure is the foundation of every digital system. Whether you're running on-premise servers, hybrid environments, or full cloud-native stacks — we ensure your infrastructure is monitored, patched, secured, and scaled.

                    Our team delivers continuous performance optimization, hardware health checks, software patching, cloud configuration reviews, and DevOps integrations to ensure uptime and reliability.
                    <ul>
                        <li>✅ 24/7 Infrastructure Monitoring</li>
                        <li>✅ OS & Server Patch Management</li>
                        <li>✅ Network Security Audits</li>
                        <li>✅ Cloud Scaling & Optimization</li>
                    </ul>

                </p>
            </div>
            <h1 className='infra-head'>What Clients Say
            </h1>
            <div className='infra-clients'>
                <div className='infra-clients-card'>
                    <h1>
                        “They proactively fixed our server load issues before we noticed. Their support is top-notch.”
                    </h1>
                    <p>- Arvind  M.
                    </p>
                </div>
                <div className='infra-clients-card'>
                    <h1>
                        “Our AWS infra used to be chaotic — now it’s clean, monitored, and auto-scaled thanks to their team.”
                    </h1>
                    <p>- Priya S.</p>
                </div>
                <div className='infra-clients-card'>
                    <h1>
                        “Our uptime went from 93% to 99.99% after they took over infrastructure support.”

                    </h1>
                    <p>- Ravi J.</p>
                </div>

            </div>
            <div className='infra-details-conatiner'>
                <h1>
                    Recent Infra Projects
                </h1>
                <div className='infra-details'>
                    <img src='https://www.webjaal.com/assets/content_imgs/infra_1.png' alt='porject-one' />
                    <div className='infra-content'>
                        <h1>Cloud Migration & Monitoring for Logistics App

                        </h1>
                        <h4>AWS + CloudWatch + EC2


                        </h4>
                        <h6>
                            Migrated on-prem to AWS, set up alert systems, auto-scaling, daily health checks, and storage optimization,and feel free to connect.



                        </h6>
                        <button type='button'onClick={() => navigate("/contact")}>Request Support</button>
                    </div>
                </div>
                <div className='infra-details'>
                    <img src='https://www.webjaal.com/assets/content_imgs/infra_2.png' alt='porject-one' />
                    <div className='infra-content'>
                        <h1>Infrastructure Support for FinTech Backend
                        </h1>
                        <h4>Ubuntu + NGINX + Docker



                        </h4>
                        <h6>
                            Maintained high availability servers, patched kernel updates, managed NGINX load balancing and Docker container health.Connect With Us.


                        </h6>
                        <button type='button'onClick={() => navigate("/contact")}>Schedule Infra Audit</button>
                    </div>
                </div>
                <div className='infra-names'>
                    <h1>Infrastructure Maintenance Services

                    </h1>
                    <p>We manage, monitor, and enhance your digital infrastructure with expertise in:



                    </p>
                    <div className='infra-service-cards'>
                        <h1>✔️ Cloud Infrastructure (AWS, Azure, GCP)</h1>
                        <h1>✔️ On-Premise Server Maintenance</h1>
                        <h1>✔️ OS & Security Patch Management</h1>
                        <h1>✔️ Uptime & Load Balancing</h1>
                        <h1>✔️  CI/CD, Backup, and DevOps Integration</h1>
                    </div>
                </div>

            </div>
            <Contact />
        </div>
    )
}

export default Infrastructure;