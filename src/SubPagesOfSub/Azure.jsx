import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import './Azure.css';
function Azure() {
    const navigate=useNavigate();
    return (
        <div className='azure-container'>
            <div className='azure-main-heading'>
                <h1>Azure Hosting Service
                </h1>
                <p>We Are Providing Powerful, Secure, and Scalable Hosting Solutions on Microsoft Azure

                </p>
            </div>
            <div className='azure-content'>
                <h1>We Provide the Following Azure Hosting Services
                </h1>
                <h2>Web App Hosting (PaaS)
                </h2>
                <p>Deploy web applications without the need to manage physical servers or virtual machines. Azure Web Apps provide a scalable and fully managed platform that supports a wide range of programming languages and frameworks including .NET, Java, Node.js, and Python.

                    This service includes integrated monitoring, auto-scaling, and built-in DevOps capabilities to streamline your development lifecycle. Whether you're building a blog or an enterprise-grade app, Azure Web Apps offer robust performance and global availability.

                </p>
                <h2>Virtual Machines (IaaS)
                </h2>
                <p>Azure Virtual Machines provide on-demand, scalable computing resources with complete control over the operating system and environment. Choose from a wide selection of Linux and Windows images or upload your own custom configurations.

                    These machines are ideal for applications that require administrative control, legacy systems, or resource-intensive tasks. With features like load balancing, auto-scaling, and availability sets, you can ensure uptime and performance under any workload.

                </p>
                <h2>Kubernetes (AKS)
                </h2>
                <p>The Azure Kubernetes Service (AKS) simplifies the deployment, management, and operations of Kubernetes. It offers a fully managed Kubernetes environment, removing the burden of managing complex orchestration tools.

                    AKS allows you to scale applications seamlessly, integrate CI/CD pipelines, and take advantage of containerized microservices. It's perfect for modern cloud-native applications that demand flexibility, scalability, and fast deployments.

                </p>
                <h2>Static Web Apps
                </h2>
                <p>Azure Static Web Apps is a modern web hosting service ideal for static sites built with frameworks like Angular, React, and Vue, or simple HTML, CSS, and JavaScript. It provides instant global scaling with integrated content delivery networks (CDNs).

                    With features like GitHub Actions for CI/CD, custom domains, free SSL certificates, and serverless APIs via Azure Functions, you can build and deploy secure and lightning-fast sites with minimal overhead.

                </p>
                <h2>App Service Environment (ASE)
                </h2>
                <p>The Azure App Service Environment provides a premium, isolated hosting environment for securely running web applications at scale. It is designed for apps that require secure network access, high scalability, and compliance with enterprise standards.

                    With full VNet integration, you gain control over inbound and outbound traffic. ASE is perfect for mission-critical applications that require advanced networking, regulatory compliance, and dedicated compute resources.

                </p>

            </div>
            <div className='azure-partner'>
                <h3>Why Partner With Us?
                </h3>
                <h3>🟠  Expert setup, migration, and optimization for Azure environments
                </h3>
                <h3>🟠  End-to-end support for DevOps, backups, security, and scalability
                </h3>
                <h3>🟠  Real-time performance monitoring and reporting
                </h3>
                <h3>🟠  Ongoing technical support and SLAs tailored to your business
                </h3>
            </div>
            <div className='azure-contact'>
                <h2>Start Your Azure Journey With Us
                </h2>
                <p>Let our Azure experts host, manage, and scale your web and cloud infrastructure with Microsoft’s trusted platform.

                </p>
                <button type="button" onClick={()=>navigate('/contact')}>Get Started Today</button>
            </div>
            <Footer />
        </div>
    );
};
export default Azure;
