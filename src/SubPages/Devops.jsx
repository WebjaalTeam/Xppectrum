import Contact from '../Pages/Contact';
import { useNavigate } from 'react-router-dom';
import './Devops.css'
function Devops() {
    const navigate=useNavigate()
    return (
        <div className='devops-container'>
            <div className='devops-bg-container'>
                <h1>End-to-End DevOps Services
                </h1>
                <p>Accelerate delivery, enhance reliability, and optimize your infrastructure with our expert DevOps solutions.

                </p>
                <button type='button'onClick={() => navigate("/contact")}>Get A Devops Support</button>
            </div>
            <div className='devops-web'>
                <h1>About Our Mobile DevOps Expertise</h1>
                <hr style={{ width: "35%", margin: "0 auto", border: "1px solid black" }} />

                <p>
                    At WebJaal, we help businesses adopt modern DevOps practices to improve deployment speed, stability, and scalability. We bring together development and operations through automation, monitoring, and continuous feedback.

                    Whether you need CI/CD pipelines, container orchestration, or infrastructure as code, our DevOps engineers ensure smooth delivery and optimal performance.


                    <ul>
                        <li>✅ CI/CD Setup (GitHub Actions, Jenkins, GitLab CI)</li>
                        <li>✅  Docker & Kubernetes Orchestration</li>
                        <li>✅ Infrastructure as Code (Terraform, CloudFormation)</li>
                        <li>✅ Monitoring & Alerting (Prometheus, Grafana)</li>
                    </ul>

                </p>
            </div>
            <h1 className='devops-head'>What Clients Say
            </h1>
            <div className='devops-clients'>
                <div className='devops-clients-card'>
                    <h1>“Their CI/CD pipelines saved us hours every week — deployments are now seamless.”
                    </h1>
                    <p>- Prateek S.

                    </p>
                </div>
                <div className='devops-clients-card'>
                    <h1>
                        “We migrated to Kubernetes with zero downtime thanks to their expertise.”
                    </h1>
                    <p>- Sana R.</p>
                </div>
                <div className='devops-clients-card'>
                    <h1>
                        “Their DevOps support helped us pass ISO audits with flying colors.”

                    </h1>
                    <p>- Abhishek J.</p>
                </div>

            </div>
            <div className='devops-details-conatiner'>
                <h1>Recent DevOps Projects</h1>
                <div className='devops-details'>
                    <img src='https://www.webjaal.com/assets/content_imgs/cloud_1.png' alt='porject-one' />
                    <div className='devops-content'>
                        <h1>CI/CD for Fintech Platform
                        </h1>
                        <h4>GitLab CI + Docker + AWS

                        </h4>
                        <h6>
                            Implemented zero-downtime deployments with rollback and automated testing integrated into the pipeline.


                        </h6>
                        <button type='button'onClick={() => navigate("/contact")}>Request Setup</button>
                    </div>
                </div>
                <div className='devops-details'>
                    <img src='https://www.webjaal.com/assets/content_imgs/cloud.png' alt='porject-one' />
                    <div className='devops-content'>
                        <h1>Cloud-Native Infra with Kubernetes
                        </h1>
                        <h4>Terraform + Kubernetes + GCP

                        </h4>
                        <h6>
                            Built and managed scalable microservices infrastructure using Terraform scripts and GKE clusters,availability.

                        </h6>
                        <button type='button'onClick={() => navigate("/contact")}>Request Setup</button>
                    </div>
                </div>
                <div className='devops-names'>
                    <h1>DevOps Services We Offer</h1>
                    <p>We automate, scale, and secure your development pipeline:

                    </p>
                    <div className='devops-service-cards'>
                        <h1>✔️ CI/CD Pipeline Setup & Optimization</h1>
                        <h1>✔️ Dockerization & Container Management</h1>
                        <h1>✔️ Kubernetes Clusters & Orchestration</h1>
                        <h1>✔️ Server Monitoring, Logging & Alerting</h1>
                        <h1>✔️ Cloud Infra Setup (AWS, Azure, GCP)  </h1>
                    </div>
                    <Contact />
                </div>

            </div>

        </div>
    )
}

export default Devops;