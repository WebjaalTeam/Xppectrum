import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import './Linux.css';
function Linux() {
    const navigate=useNavigate();
    return (
        <div className='linux-container'>
            <div className='linux-main-heading'>
                <h1>Dedicated Linux Hosting
                </h1>
                <p>We Are Providing High-Performance, Secure, and Reliable Linux-Based Dedicated Hosting Solutions

                </p>
            </div>
            <div className='linux-content'>
                <h1>We Provide the Following Linux Hosting Services
                </h1>
                <h2>Fully Managed Dedicated Servers
                </h2>
                <p>Enjoy hands-free hosting with our fully managed dedicated Linux servers. We handle setup, configuration, security hardening, and routine maintenance, allowing you to focus on your applications and services.

                    This solution is ideal for businesses that require reliability and 24/7 expert support without managing server internals. From patch updates to server monitoring, everything is taken care of by our professionals.

                </p>
                <h2>Self-Managed Root Access Hosting
                </h2>
                <p>Gain full control with our self-managed Linux hosting plans. Perfect for developers and sysadmins who prefer to configure and maintain their own environment with root-level access.

                    This service provides unmatched flexibility, letting you customize every aspect of your hosting—from the Linux distribution to software stack—suited to your exact use case.

                </p>
                <h2>Dedicated Hosting for Web Servers
                </h2>
                <p>Run high-traffic websites and web applications on our performance-optimized Linux servers. We support Apache, Nginx, and Litespeed setups tailored to your preferred configuration.

                    Built-in features include DDoS protection, SSD/NVMe storage, SSL setup, and scalable bandwidth. Ideal for eCommerce, CMS platforms, or any business-critical web service.

                </p>
                <h2>High-Security Environments
                </h2>
                <p>For clients with compliance requirements, our Linux dedicated hosting can be configured to meet stringent security standards. We support firewalls, VPN setups, SELinux enforcement, and two-factor SSH access.

                    Our expert team works with you to design a hardened server environment, ensuring data privacy and security best practices across your infrastructure.

                </p>


            </div>
            <div className='linux-partner'>
                <h1>Why Partner With Us?
                </h1>
                <h3>🟠  Choice of major Linux distributions (Ubuntu, CentOS, Debian, etc.)
                </h3>
                <h3>🟠  24/7 technical support and proactive monitoring
                </h3>
                <h3>🟠  Custom configurations for any workload
                </h3>
                <h3>🟠  High-performance hardware and data center redundancy
                </h3>
            </div>
            <div className='linux-contact'>
                <h2>Get Started with Dedicated Linux Hosting
                </h2>
                <p>Experience full control, reliability, and performance on our robust Linux server infrastructure tailored to your business needs.

                </p>
                <button type="button" onClick={()=>navigate('/contact')}>Request a Custom Quote</button>
            </div>
            <Footer />
        </div>
    );
};
export default Linux;
