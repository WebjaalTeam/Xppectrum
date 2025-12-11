import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import './BusinessEmail.css';
function BusinessEmail() {
    const navigate=useNavigate();
    return (
        <div className='businessemail-container'>
            <div className='businessemail-main-heading'>
                <h1>Business Email Hosting
                </h1>
                <p>We Are Providing Secure, Scalable, and Professional Email Hosting Solutions for Businesses

                </p>
            </div>
            <div className='businessemail-content'>
                <h1>Our Business Email Hosting Services
                </h1>
                <h2>Secure Email Solutions
                </h2>
                <p>Our business email hosting services provide encrypted communication, anti-virus protection, and anti-spam filters to ensure your company’s email environment is protected.

                    We support both web-based email access and integration with desktop clients like Outlook or Thunderbird for seamless professional communication.

                </p>
                <h2>Cloud-Based Email Hosting
                </h2>
                <p>Host your business email in the cloud for high availability and access from anywhere. We offer solutions powered by leading platforms with guaranteed uptime and backup options.

                    Perfect for remote teams and growing businesses, our cloud hosting ensures secure and uninterrupted email flow 24/7.

                </p>
                <h2>Microsoft Exchange Email Hosting
                </h2>
                <p>We provide hosted Exchange solutions that include calendaring, contact syncing, and seamless Microsoft Office integration. Suitable for enterprises needing reliable collaboration tools.

                    Our managed Exchange servers are monitored and maintained by experts, ensuring both performance and data protection.

                </p>
                <h2>Shared & Team Mailboxes
                </h2>
                <p>Enable team collaboration with shared mailboxes and role-based email management. Easily set up departmental addresses like sales@ or support@ for streamlined communication.

                    This service is great for businesses that need centralized email management and role-specific permissions across their teams.

                </p>


            </div>
            <div className='businessemail-partner'>
                <h1>Why Partner With Us?
                </h1>
                <h3>🔻  Custom domain email addresses
                </h3>
                <h3>🔻  99.9% uptime with backup and redundancy
                </h3>
                <h3>🔻  24/7 technical support for all email-related issues
                </h3>
                <h3>🔻  Seamless migration from existing email systems
                </h3>
            </div>
            <div className='businessemail-contact'>
                <h2>Get Started with Business Email Hosting
                </h2>
                <p>Establish a professional identity with reliable and secure email hosting for your business.

                </p>
                <button type="button" onClick={()=>navigate('/contact')}>Contact Us For A Custom Email Plan</button>
            </div>
            <Footer />
        </div>
    );
}
export default BusinessEmail;
