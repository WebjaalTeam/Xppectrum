import './Insurence.css'
import Footer from '../Components/Footer'

function Insurence() {
    return (
        <div className='insurence-container'>
            <div className='insurence-content'>
                <h1>Insurance Software Development
                </h1>
                <p>Insurance systems should work smoothly, but outdated tools slow things down. Insurance software development simplifies policy management, speeds up claims, and reduces manual errors. Modern solutions help insurers handle data securely and improve customer service.

                    Differenz System builds industry-specific software with advanced automation, real-time data processing, and secure integrations. Our solutions support compliance, detect fraud, and adapt to changing insurance needs.
                </p>
            </div>
            <div className="insurance-features-section">

                <h2 className="section-title">Smart Features Powering Secure Insurance Software</h2>

                <div className="insurance-card-container">

                    {/* Customizable Workflows */}
                    <div className="insurance-card">
                        <h3>Customizable Workflows</h3>
                        <ul>
                            <li>Automate claims to save time and effort.</li>
                            <li>Custom rules for each policy type.</li>
                            <li>Simplified underwriting and compliance.</li>
                            <li>Role-based access for better control.</li>
                            <li>Flexible templates for renewals.</li>
                        </ul>
                    </div>

                    {/* Third-Party Integrations */}
                    <div className="insurance-card">
                        <h3>Third-Party Integrations</h3>
                        <ul>
                            <li>Secure payment gateway integrations.</li>
                            <li>ERP & CRM connections for smooth operations.</li>
                            <li>Integrate with insurers & compliance APIs.</li>
                            <li>Easy document handling setup.</li>
                            <li>Unified dashboard across systems.</li>
                        </ul>
                    </div>

                    {/* Advanced Data Security */}
                    <div className="insurance-card">
                        <h3>Advanced Data Security</h3>
                        <ul>
                            <li>End-to-end encryption for data safety.</li>
                            <li>Multi-level user authentication.</li>
                            <li>Compliant with GDPR & HIPAA rules.</li>
                            <li>Threat monitoring in real time.</li>
                            <li>Secure audit-enabled file sharing.</li>
                        </ul>
                    </div>

                    {/* AI-Powered Fraud Detection */}
                    <div className="insurance-card">
                        <h3>AI-Powered Fraud Detection</h3>
                        <ul>
                            <li>Predictive tech to detect claim fraud.</li>
                            <li>AI monitors abnormal patterns fast.</li>
                            <li>Instant alerts for risky claims.</li>
                            <li>Real-time scoring for smart reviews.</li>
                            <li>External DB integration for checks.</li>
                        </ul>
                    </div>

                    {/* Cloud-Based & Scalable */}
                    <div className="insurance-card">
                        <h3>Cloud-Based & Scalable</h3>
                        <ul>
                            <li>Access from anywhere, anytime.</li>
                            <li>Grows as your users and data grow.</li>
                            <li>Seamless updates without downtime.</li>
                            <li>Built-in backups and failover.</li>
                            <li>Use across multiple devices easily.</li>
                        </ul>
                    </div>

                    {/* Real-Time Reporting */}
                    <div className="insurance-card">
                        <h3>Real-Time Reporting & Dashboards</h3>
                        <ul>
                            <li>Live policy and claim data tracking.</li>
                            <li>Custom reports & KPIs at a glance.</li>
                            <li>AI-based insights on performance.</li>
                            <li>Automated audit & compliance logs.</li>
                            <li>Role-based views for each user.</li>
                        </ul>
                    </div>

                </div>
                <div className="industries-section">

                    <h2 className="industries-title">Industries We Serve</h2>

                    <div className="industries-grid">

                        <div className="industry-card">
                            <h3>Automotive</h3>
                        </div>

                        <div className="industry-card">
                            <h3>Banking & Finance (Fintech)</h3>
                        </div>

                        <div className="industry-card">
                            <h3>Construction</h3>
                        </div>

                        <div className="industry-card">
                            <h3>Education</h3>
                        </div>

                        <div className="industry-card">
                            <h3>Entertainment</h3>
                        </div>

                        <div className="industry-card">
                            <h3>Healthcare</h3>
                        </div>

                        <div className="industry-card">
                            <h3>Insurance</h3>
                        </div>

                        <div className="industry-card">
                            <h3>Manufacturing</h3>
                        </div>

                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Insurence;