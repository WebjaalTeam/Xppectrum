import './DataStrategy.css'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';

function DataStrategy() {
  return (
    <div className="dataStrategy-section">

      <div>
        <h2>Data Strategy & Digital Intelligence</h2>
        <h3 className="dataStrategy-subtitle">
          Build a unified, measurable and insight-driven roadmap to empower your business decisions.
        </h3>
      </div>

      <div className="dataStrategy-grid">
        <Link to='/researchinsight'>
          <div className="dataStrategy-card">
            <h4>Research Insights</h4>
            <ul>
              <li>Consumer & audience intelligence</li>
              <li>Market positioning & competitive mapping</li>
              <li>Behavioral analysis for business decisions</li>
            </ul>
            <p className="card-desc">
              We gather and analyze data from multiple sources to uncover trends and opportunities that guide smart business strategies.
            </p>
          </div>
        </Link>
        <Link to='/strategy'>

          <div className="dataStrategy-card">
            <h4>Strategy Planning</h4>
            <ul>
              <li>Goal-driven data frameworks</li>
              <li>KPIs & success measurement strategy</li>
              <li>Customer-first intelligence planning</li>
            </ul>
            <p className="card-desc">
              We define a measurable roadmap aligned with business goals to drive sustainable growth through data-backed decisions.
            </p>
          </div>
        </Link>

        <Link to='/auditanalytics'>
          <div className="dataStrategy-card">
            <h4>Audit & Analytics Config</h4>
            <ul>
              <li>End-to-end tracking audits</li>
              <li>Data accuracy implementation</li>
              <li>Config for KPIs, funnels & conversions</li>
            </ul>
            <p className="card-desc">
              Ensure your analytics is reliable, accurate and configured to capture the right events that matter for business outcomes.
            </p>
          </div>
        </Link>

        <Link to='/googletag'>
          <div className="dataStrategy-card">
            <h4>Google Tag Manager</h4>
            <ul>
              <li>Multi-event tracking setup</li>
              <li>Conversion & remarketing tags</li>
              <li>Custom triggers & data layers</li>
            </ul>
            <p className="card-desc">
              We implement advanced GTM setups using data layers to track user behavior, conversion funnels and remarketing audiences.
            </p>
          </div>
        </Link>

        <Link to='/centralisedmis'>

          <div className="dataStrategy-card">
            <h4>Centralised MIS</h4>
            <ul>
              <li>Multi-channel data intelligence</li>
              <li>Dashboard consolidation of KPIs</li>
              <li>Automated performance reporting</li>
            </ul>
            <p className="card-desc">
              We build a centralized data monitoring system that combines analytics, CRM, campaigns and business reports in one place.
            </p>
          </div>
        </Link>
        <Link to='/'>
          <div className="dataStrategy-card">
            <h4>Data Strategies</h4>
            <ul>
              <li>Data governance & compliance</li>
              <li>Segmentation & predictive models</li>
              <li>Complete data architecture planning</li>
            </ul>
            <p className="card-desc">
              From governance to forecasting, we build a scalable data ecosystem that supports privacy, analytics and AI-readiness.
            </p>
          </div>
        </Link>

      </div>

      <div className="dataStrategy-cta">
        <h3>Unlock Growth With Data-Driven Intelligence</h3>
        <button className="dataStrategy-btn">Talk to Our Data Consultants</button>
      </div>
      <Footer />
    </div>

  )
}
export default DataStrategy;