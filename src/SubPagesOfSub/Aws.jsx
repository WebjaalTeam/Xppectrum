import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import './Aws.css';

function Aws() {
    const navigate=useNavigate();
    return (
        <div className='aws-container'>
            <div className='aws-main-heading'>
                <h1>AWS Hosting Service
                </h1>
                <p>We Are Providing Powerful, Secure, and Scalable Hosting Solutions on Microsoft Azure

                </p>
            </div>
            <div className='aws-content'>
                <h1>We Provide the Following AWS Hosting Services
                </h1>
                <h2>EC2 (Elastic Compute Cloud)
                </h2>
                <p>AWS EC2 allows you to launch scalable virtual servers in the cloud. You can choose OS, instance type, storage, and network configurations to match your app’s needs.

                    Ideal for custom server environments, EC2 supports auto-scaling, load balancing, and secure access controls, making it perfect for web apps, backend APIs, or enterprise workloads.

                </p>
                <h2>Lightsail</h2>
                <p>AWS Lightsail is a simplified VPS solution that bundles compute, storage, and networking for small business apps, websites, and test environments.

                    It provides a predictable pricing model and easy setup, making it suitable for developers looking for a fast and low-cost cloud environment.

                </p>
                <h2>AWS Lambda (Serverless)
                </h2>
                <p>AWS Lambda lets you run backend functions without managing servers. Just upload your code, and AWS handles the execution in response to triggers like API calls or file uploads.

                    It's cost-effective for real-time processing, automation, and microservices architecture. Pay only for the compute time used.

                </p>
                <h2>S3 Website Hosting
                </h2>
                <p>Amazon S3 allows you to host static websites using highly durable and scalable object storage. Perfect for portfolios, landing pages, and marketing sites.

                    Combined with CloudFront and Route 53, you can deliver lightning-fast global content with low latency and custom domains.

                </p>
                <h2>Elastic Beanstalk
                </h2>
                <p>Elastic Beanstalk simplifies deployment for web apps by managing infrastructure provisioning, load balancing, scaling, and monitoring automatically.

                    Just upload your code and AWS handles the rest. Supports Java, .NET, Node.js, PHP, Python, Ruby, and more.

                </p>

            </div>
            <div className='aws-partner'>
                <h1>Why Choose Us for AWS Hosting?
                </h1>
                <h3>🟠  Certified AWS professionals for setup and optimization
                </h3>
                <h3>🟠  End-to-end support for CI/CD, backups, and security
                </h3>
                <h3>🟠  Cost monitoring and performance tuning
                </h3>
                <h3>🟠  Dedicated SLA-based technical support
                </h3>
            </div>
            <div className='aws-contact'>
                <h2>Start Hosting on AWS With Us
                </h2>
                <p>Leverage our experience to deploy reliable, scalable, and cost-efficient AWS hosting solutions tailored for your business goals.

                </p>
                <button type="button" onClick={()=>navigate('/contact')}>Launch on AWS Now</button>
            </div>
            <Footer />
        </div>
    );
};
export default Aws;
