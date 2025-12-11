
import './Finace.css'
import Footer from '../Components/Footer'

function Finace() {
    return (
        <div className='finace-container'>
            <div className='finace-header'>
                <h1>Finance & Banking Solutions</h1>
                <p>Empowering your institution with secure, scalable, and smart digital banking solutions tailored to build trust and drive growth.</p>
            </div>
            <div className="banking-services-section">

                <div>
                    <h2>Secure Digital Banking Platforms</h2>
                    <h3 className="banking-subtitle">
                        Enterprise-grade security, seamless transactions & intelligent fintech automation for modern banking.
                    </h3>
                </div>

                <div className="banking-services-grid">

                    <div className="banking-card">
                        <h4>Secure Digital Banking Platforms</h4>
                        <ul>
                            <li>Real-time transaction monitoring</li>
                            <li>End-to-end encryption + biometric login</li>
                            <li>Instant fund transfers & intuitive dashboards</li>
                        </ul>
                        <p className="card-desc">
                            We build secure web & mobile banking platforms with strong authentication,
                            advanced encryption, and frictionless digital banking experiences.
                        </p>
                    </div>

                    <div className="banking-card">
                        <h4>Automated Workflows & Operations</h4>
                        <ul>
                            <li>Loan processing automation</li>
                            <li>Digital onboarding & form processing</li>
                            <li>Compliance-ready workflows</li>
                        </ul>
                        <p className="card-desc">
                            Reduce operational costs with intelligent automation that speeds up banking
                            operations while maintaining strict regulatory compliance.
                        </p>
                    </div>

                    <div className="banking-card">
                        <h4>Fraud Detection & Risk Mitigation</h4>
                        <ul>
                            <li>AI-based anomaly detection</li>
                            <li>Real-time alerts & risk scoring</li>
                            <li>Predictive fraud analytics</li>
                        </ul>
                        <p className="card-desc">
                            Our systems continuously monitor suspicious behavior, prevent fraud,
                            and safeguard customer trust with proactive fintech risk management.
                        </p>
                    </div>

                    <div className="banking-card">
                        <h4>Financial Insights & Data Analytics</h4>
                        <ul>
                            <li>Customer segmentation dashboards</li>
                            <li>Predictive risk & portfolio analysis</li>
                            <li>AI-driven financial recommendations</li>
                        </ul>
                        <p className="card-desc">
                            Boost decision-making with real-time financial dashboards, predictive analytics,
                            and personalized insights for users and banks.
                        </p>
                    </div>

                </div>

                <div className="banking-why-box">
                    <h3>Why Choose Us?</h3>
                    <ul>
                        <li>End-to-end digital banking solutions</li>
                        <li>Secure integration with payment & core systems</li>
                        <li>Regulatory compliance & secure architecture</li>
                        <li>24/7 monitoring & technical support</li>
                        <li>Mobile-first & responsive banking interfaces</li>
                        <li>API-driven infrastructure for fintech ecosystems</li>
                    </ul>
                </div>

                <div className="banking-expertise-box">
                    <h3>Our Expertise Covers:</h3>
                    <ul>
                        <li>Retail & Corporate Banking Portals</li>
                        <li>Mobile Wallet Development</li>
                        <li>Credit Scoring Engines</li>
                        <li>Loan Origination & KYC Systems</li>
                        <li>Blockchain for Secure Transactions</li>
                        <li>AI Chatbots for Customer Support</li>
                    </ul>
                </div>

                <div className="banking-cta">
                    <h3>Ready to Transform Your Banking Experience?</h3>
                    <button className="banking-btn">Talk to Our Experts</button>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Finace;