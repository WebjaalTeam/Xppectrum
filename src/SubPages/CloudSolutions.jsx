import Footer from '../Components/Footer';
import { useNavigate,Link } from 'react-router-dom';
import './CloudSolutions.css';

function CloudSolutions() {
    const navigate=useNavigate();
    return (
        <div className='cloudsolutions-container'>
            <div className='cloudsolutions-content'>
                <h1>Our Cloud Solutions</h1>
                <p>Scalable, secure, and reliable hosting & email services tailored for your business needs.</p>
            </div>
            <div className='cloudsolutions-text'>
                <p>    At our company, we provide comprehensive cloud solutions that empower businesses to scale efficiently and securely. Whether you're migrating existing infrastructure or building from the ground up, our services are tailored to fit your unique needs. From public and private cloud deployments to hybrid models, we ensure seamless integration, high availability, and maximum uptime for your mission-critical operations.

                </p>
                <p>Our team of cloud experts specializes in architecture design, automation, DevOps practices, and continuous optimization. With strong partnerships with leading cloud providers like AWS, Microsoft Azure, and Google Cloud, we deliver robust and future-ready environments. Trust us to modernize your IT landscape, reduce operational costs, and enhance agility through secure, scalable, and high-performance cloud technologies.</p>
            </div>
            <div className='cloudsolutions-services'>
                <Link to='/azure'>
                <div className='cloudsolutions-service-card'>
                    <h2>Azure Hosting</h2>
                    <p>Deploy apps and manage services across Microsoft’s powerful Azure cloud. Benefit from auto-scaling</p>
                </div>
                </Link>
                <Link to='/aws'>
                <div className='cloudsolutions-service-card'>
                    <h2>AWS Hosting</h2>
                    <p>Power your infrastructure with Amazon Web Services. We help businesses utilize EC2, S3, RDS and more for secure, scalable cloud hosting.</p>
                </div>
                </Link>
                <Link to='/businessemail'>
                <div className='cloudsolutions-service-card'>
                    <h2>Business Emails</h2>
                    <p>Professional-grade email hosting with your domain name. Get access to secure, fast, and spam-free email services powered by top-tier platforms. </p>
                </div>
                </Link>
                <Link to='/wordpress'>
                <div className='cloudsolutions-service-card'>
                    <h2>WordPress Hosting</h2>
                    <p>Optimized WordPress hosting with blazing speed, auto-updates, and backups. Perfect for bloggers, agencies, and businesses. </p>
                </div>
                </Link>
                <Link to='/linux'>
                <div className='cloudsolutions-service-card'>
                    <h2>Dedicated Linux Hosting</h2>
                    <p>Full control and powerful performance with our dedicated Linux hosting solutions. Root access, SSD storage, and custom configurations included. </p>
                </div>
                </Link>
            </div>
            <button type="button" onClick={()=>navigate('/contact')}>Get Started Today</button>
            <Footer />
        </div>
    );
};
export default CloudSolutions;