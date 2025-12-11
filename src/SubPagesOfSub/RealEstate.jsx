

import './RealEstate.css';
import Footer from '../Components/Footer';

function RealEstate() {
    return (
        <div className="realestate-container">
            <div className="realestate-content">
                <h1>Trusted Real Estate Services</h1>
                <p>Your partner in buying, selling, renting, and investing in properties.</p>
            </div>
            <div className="realestate-services-section">
            </div>
            <div class="realestate-section">

                <div>
                    <h2>Our Real Estate Solutions</h2>
                    <h3 class="realestate-subtitle">Smart Property Services for Buyers, Sellers & Investors</h3>
                </div>

                <div class="realestate-grid">

                    <div class="realestate-card">
                        <h4>Property Buying Assistance</h4>
                        <ul>
                            <li>Personalized property listings</li>
                            <li>Verified documentation support</li>
                            <li>Legal & financial guidance</li>
                            <li>Neighborhood analysis & future prospects</li>
                        </ul>
                    </div>

                    <div class="realestate-card">
                        <h4>Property Selling Services</h4>
                        <ul>
                            <li>Professional listing creation</li>
                            <li>High-conversion marketing campaigns</li>
                            <li>Buyer verification & negotiation</li>
                            <li>Complete end-to-end closing support</li>
                        </ul>
                    </div>

                    <div class="realestate-card">
                        <h4>Rental & Leasing</h4>
                        <ul>
                            <li>Tenant background checks</li>
                            <li>Property listing and promotion</li>
                            <li>Rental agreement & compliance</li>
                            <li>Property management</li>
                        </ul>
                    </div>

                    <div class="realestate-card">
                        <h4>Investment Advisory</h4>
                        <ul>
                            <li>Commercial & residential investment plans</li>
                            <li>ROI-focused suggestions</li>
                            <li>Location & market trend analysis</li>
                            <li>Portfolio management assistance</li>
                        </ul>
                    </div>

                    <div class="realestate-card">
                        <h4>Land Development Consulting</h4>
                        <ul>
                            <li>Land use planning & zoning help</li>
                            <li>Project feasibility analysis</li>
                            <li>Government approvals guidance</li>
                            <li>Development project partnerships</li>
                        </ul>
                    </div>

                    <div class="realestate-card">
                        <h4>Commercial Property Services</h4>
                        <ul>
                            <li>Office, retail & warehouse space options</li>
                            <li>Valuation & rent projections</li>
                            <li>Leasing negotiations support</li>
                            <li>Corporate space relocation strategy</li>
                        </ul>
                    </div>

                </div>

                <div class="realestate-cta">
                    <h3>Let’s Make Your Property Goals a Reality</h3>
                    <p>Contact our real estate experts to get started with a free consultation today.</p>
                    <button class="realestate-btn">Get in Touch</button>
                </div>

            </div>
            <Footer />
        </div>
    );
}
export default RealEstate;