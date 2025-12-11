

import './ResearchInsight.css'
import Footer from '../Components/Footer'

function ResearchInsight() {
    return (
        <div className='research-container'>
            <div className='research-content'>
                <h1>Research and insights
                </h1>
            </div>
            <div className="researchInsight-section">

                <div>
                    <h2>Marketing Research & Insights</h2>
                    <h3 className="researchInsight-subtitle">
                        Data-driven strategies to understand your market, audience behaviors, and growth potential.
                    </h3>
                </div>

                <div className="researchInsight-grid">

                    <div className="researchInsight-card">
                        <h4>Brand Health & SWOT Analysis</h4>
                        <ul>
                            <li>Strength, weakness, opportunity & threat mapping</li>
                            <li>Brand perception analysis</li>
                            <li>Growth opportunity identification</li>
                        </ul>
                        <p className="card-desc">
                            We deliver in-depth brand assessments to uncover new market opportunities
                            and strengthen your overall brand identity.
                        </p>
                    </div>

                    <div className="researchInsight-card">
                        <h4>Audience & Consumer Intelligence</h4>
                        <ul>
                            <li>Demographics, interests & intent mapping</li>
                            <li>Location, income & gender segmentation</li>
                            <li>Advanced consumer profiling</li>
                        </ul>
                        <p className="card-desc">
                            Understand who your customers are and what they are looking for through
                            precise audience segmentation and behavioral analysis.
                        </p>
                    </div>

                    <div className="researchInsight-card">
                        <h4>Competition & Market Analysis</h4>
                        <ul>
                            <li>Competitor benchmarking & trends</li>
                            <li>Sector opportunity mapping</li>
                            <li>Strategy gap & risk assessment</li>
                        </ul>
                        <p className="card-desc">
                            Discover what’s working for competitors and identify high-return
                            sectors to invest in, ensuring a competitive advantage.
                        </p>
                    </div>

                    <div className="researchInsight-card">
                        <h4>Keyword & Search Intent Analysis</h4>
                        <ul>
                            <li>SEO-driven keyword strategy mapping</li>
                            <li>Ranking opportunity discovery</li>
                            <li>Audience intent-based content planning</li>
                        </ul>
                        <p className="card-desc">
                            We build optimized search strategies that improve visibility,
                            drive quality leads, and attract customers actively looking for your solutions.
                        </p>
                    </div>

                    <div className="researchInsight-card">
                        <h4>UI/UX & Digital Activity Audit</h4>
                        <ul>
                            <li>Website usability & performance testing</li>
                            <li>Digital strategy assessment</li>
                            <li>Customer journey analysis</li>
                        </ul>
                        <p className="card-desc">
                            Improve engagement and conversion through UX evaluations,
                            audience behavior research, and market-aligned design insights.
                        </p>
                    </div>

                    <div className="researchInsight-card">
                        <h4>Crisis & Risk Analysis</h4>
                        <ul>
                            <li>Threat prediction & mitigation</li>
                            <li>Reputation defense strategies</li>
                            <li>Crisis scenario planning</li>
                        </ul>
                        <p className="card-desc">
                            Detect vulnerabilities and protect your brand with proactive risk monitoring,
                            predictive crisis analysis, and actionable preventive strategies.
                        </p>
                    </div>

                </div>

                <div className="researchInsight-benefits-box">
                    <h3>Benefits of Digital Research & Insights</h3>
                    <ul>
                        <li>Understand your market, competitors & customer needs</li>
                        <li>Accurate forecasting & business-driven decision making</li>
                        <li>Detailed buyer personas & behavioral intelligence</li>
                        <li>Go-to-market strategy for new products & expansions</li>
                        <li>Real-time competitor tracking & trend adaptation</li>
                        <li>Efficient budgeting, ROI planning & cost savings</li>
                        <li>Enhanced strategic planning & quantitative projections</li>
                    </ul>
                </div>

                <div className="researchInsight-cta">
                    <h3>Ready to Unlock Powerful Market Insights?</h3>
                    <button className="researchInsight-btn">Talk to Our Specialists</button>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ResearchInsight;