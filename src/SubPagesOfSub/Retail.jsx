
import './Retail.css'
import Footer from '../Components/Footer'

function Retail() {
    return (
        <div className='retail-container'>
            <div className='retail-header'>
                <h1>Retail & E-commerce Solutions</h1>
                <p>Omnichannel platforms, secure payment gateways, and personalized experiences to boost your conversions and loyalty.</p>
            </div>
            <div className="retail-services-section">

                <div>
                    <h2>Unified Omnichannel Retail Experience</h2>
                    <h3 className="retail-subtitle">
                        Seamlessly connect online and offline channels to boost customer loyalty & sales.
                    </h3>
                </div>

                <div className="retail-services-grid">

                    <div className="retail-card">
                        <h4>Omnichannel Retail Solutions</h4>
                        <ul>
                            <li>Real-time inventory & order sync</li>
                            <li>POS integration with e-commerce</li>
                            <li>Cross-channel loyalty & promotions</li>
                        </ul>
                        <p className="card-desc">
                            Deliver unified experiences across in-store, website, mobile apps, and social commerce by integrating inventory, sales, and customer service in one system.
                        </p>
                    </div>

                    <div className="retail-card">
                        <h4>Secure Payment Gateway Integration</h4>
                        <ul>
                            <li>Multi-gateway seamless checkout</li>
                            <li>Fraud detection & prevention tools</li>
                            <li>Multi-currency & global payment support</li>
                        </ul>
                        <p className="card-desc">
                            We integrate PCI-compliant payment systems supporting UPI, cards, wallets, EMI, and international payments with high security and reliability.
                        </p>
                    </div>

                    <div className="retail-card">
                        <h4>Personalized Customer Experiences</h4>
                        <ul>
                            <li>AI-driven product recommendations</li>
                            <li>Dynamic content & landing pages</li>
                            <li>Automated SMS & email campaigns</li>
                        </ul>
                        <p className="card-desc">
                            Increase conversions by customizing product discovery, offers, and communication based on user behavior, interests, and purchase history.
                        </p>
                    </div>

                    <div className="retail-card">
                        <h4>Inventory & Logistics Automation</h4>
                        <ul>
                            <li>Auto stock updates & low-stock alerts</li>
                            <li>Multi-warehouse coordination</li>
                            <li>Real-time delivery status tracking</li>
                        </ul>
                        <p className="card-desc">
                            Automate warehouse and delivery with smart stock syncing, logistics partner integration, and real-time tracking to speed up fulfillment.
                        </p>
                    </div>

                    <div className="retail-card">
                        <h4>Data & Analytics for Growth</h4>
                        <ul>
                            <li>Sales & conversion performance tracking</li>
                            <li>Customer lifetime value (CLV) analysis</li>
                            <li>Marketing funnel & attribution insights</li>
                        </ul>
                        <p className="card-desc">
                            Make informed decisions using analytics dashboards for sales, customer behavior, and inventory trends to improve ROI and AOV (Average Order Value).
                        </p>
                    </div>

                </div>

                <div className="retail-cta">
                    <h3>Boost Your Retail or E-commerce Growth</h3>
                    <p>Let’s build the future of your retail business. Talk to our expert consultants today.</p>
                    <button className="retail-btn">Free Consultation</button>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Retail;