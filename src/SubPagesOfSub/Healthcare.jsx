import './Healthcare.css';
import Footer from '../Components/Footer';

function Healthcare() {
    return (
        <div className="healthcare-container">
            <div className="healthcare-content">
                <h1>Healthcare Technology Solutions</h1>
                <p>We offer cutting-edge digital healthcare and medical solutions, ensuring quality care, compliance, and</p>
            </div>
            <div className="health-services-section">

                <div>
                    <h2>Healthcare, Medical & Staffing Solutions</h2>
                    <h3 className="health-subtitle">Connecting Healthcare with Technology & Talent</h3>
                    <p className="health-desc">Our staffing services connect the best professionals with top healthcare institutions.</p>
                </div>

                <div className="health-services-grid">

                    <div className="health-card">
                        <h4>Digital Healthcare Solutions</h4>
                        <ul>
                            <li>Telemedicine & remote consultations</li>
                            <li>EMR/EHR integration and compliance</li>
                            <li>Mobile health (mHealth) apps</li>
                            <li>Health data analytics and reporting</li>
                            <li>Patient portals & appointment scheduling</li>
                        </ul>
                        <p className="card-desc">Empowering healthcare providers with modern technology to reach more patients and deliver higher-quality care while reducing operational friction.</p>
                    </div>

                    <div className="health-card">
                        <h4>Medical Services & Support</h4>
                        <ul>
                            <li>Clinical workflow automation</li>
                            <li>Medical billing & RCM systems</li>
                            <li>Diagnostic & laboratory integrations</li>
                            <li>Inventory & hospital asset management</li>
                            <li>Remote patient monitoring with IoT</li>
                        </ul>
                        <p className="card-desc">Our medical software services enhance care coordination and resource utilization while maintaining compliance and security standards.</p>
                    </div>

                    <div className="health-card">
                        <h4>Healthcare Staffing & Workforce</h4>
                        <ul>
                            <li>Permanent & temporary medical staffing</li>
                            <li>Credential verification & onboarding</li>
                            <li>Allied health professionals placement</li>
                            <li>Healthcare RPO & outsourcing solutions</li>
                            <li>Shift scheduling & staff management tools</li>
                        </ul>
                        <p className="card-desc">We match qualified professionals to your needs quickly and reliably. From nurses to specialists—we help maintain workforce continuity.</p>
                    </div>

                </div>

                <div className="why-choose-box">
                    <h3>Why Choose Us?</h3>
                    <ul className="why-list">
                        <li>HIPAA-compliant healthcare software</li>
                        <li>Cloud-native scalable solutions</li>
                        <li>Trusted by hospitals & clinics globally</li>
                        <li>Certified recruiters and developers</li>
                        <li>Fast turnaround with 24/7 support</li>
                    </ul>
                    <p className="why-desc">Our team blends deep domain knowledge with top-tier tech expertise. We work as your partner to build sustainable, future-ready solutions.</p>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Healthcare;