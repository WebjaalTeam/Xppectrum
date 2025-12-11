import './GoogleTag.css'
import Footer from '../Components/Footer';


function GoogleTag(){
    return(
        <div className="gtm-section">

  {/* TITLE */}
  <div>
    <h2>Google Tag Management</h2>
    <h3 className="gtm-subtitle">
      Implement efficient tracking, measurement, and marketing performance insights with centralized GTM.
    </h3>
  </div>

  {/* OVERVIEW */}
  <div className="gtm-overview">
    <h3>Google Tag Management Services</h3>
    <p>
      Manage all tracking, marketing, and analytics tags in one place. GTM helps streamline measurement
      for websites, apps, and third-party marketing tools — enabling better optimization and performance visibility.
    </p>
  </div>

  {/* WHAT WE DO */}
  <div className="gtm-overview">
    <h3>What We Do in Google Tag Management</h3>
    <p>
      Managing tags can be complicated and time-consuming — so we handle it for you! Get a clean,
      optimized, and fully configured GTM environment to ensure accurate tracking and faster insights.
    </p>
  </div>

  {/* GTM SERVICE CARDS */}
  <div className="gtm-grid">

    <div className="gtm-card">
      <h4>Account Setup</h4>
      <ul>
        <li>GTM account creation</li>
        <li>Website / App integration</li>
        <li>Third-party script mapping</li>
      </ul>
      <p className="card-desc">
        Complete setup + smooth integration into your platforms for accurate tracking.
      </p>
    </div>

    <div className="gtm-card">
      <h4>Goal Setup</h4>
      <ul>
        <li>Conversion goal definitions</li>
        <li>Monetary value assignment</li>
        <li>Funnel tracking setup</li>
      </ul>
      <p className="card-desc">
        Track meaningful actions and assign values to measure business outcomes.
      </p>
    </div>

    <div className="gtm-card">
      <h4>Campaign Tracking</h4>
      <ul>
        <li>Scroll-depth tracking</li>
        <li>Pageview & behavior events</li>
        <li>Campaign tagging & mapping</li>
      </ul>
      <p className="card-desc">
        Understand user interactions across your pages and campaigns.
      </p>
    </div>

    <div className="gtm-card">
      <h4>Phone Call Tracking</h4>
      <ul>
        <li>Click-to-call tracking</li>
        <li>Caller insights mapping</li>
        <li>User intent evaluation</li>
      </ul>
      <p className="card-desc">
        Track phone call clicks and measure user engagement effectively.
      </p>
    </div>

    <div className="gtm-card">
      <h4>Event Tracking</h4>
      <ul>
        <li>Click events</li>
        <li>CTA interaction mapping</li>
        <li>Behavior monitoring</li>
      </ul>
      <p className="card-desc">
        Track clicks, actions, and behavior using advanced GTM event configurations.
      </p>
    </div>

    <div className="gtm-card">
      <h4>Google Ads Tracking</h4>
      <ul>
        <li>Conversion tracking setup</li>
        <li>Impression tracking</li>
        <li>Ad performance measurement</li>
      </ul>
      <p className="card-desc">
        Connect Google Ads with GTM for precise conversion data.
      </p>
    </div>

    <div className="gtm-card">
      <h4>Facebook Pixel Tracking</h4>
      <ul>
        <li>Pixel installation</li>
        <li>Conversion events setup</li>
        <li>Remarketing audience mapping</li>
      </ul>
      <p className="card-desc">
        Track Meta Ads performance with GTM-based pixel integration.
      </p>
    </div>

    <div className="gtm-card">
      <h4>Third-Party URL Tracking</h4>
      <ul>
        <li>Cross-domain tracking</li>
        <li>External link tracking</li>
        <li>Partner script integration</li>
      </ul>
      <p className="card-desc">
        Manage external data integrations to get full performance visibility.
      </p>
    </div>

  </div>

  {/* BENEFITS */}
  <div className="gtm-benefits-box">
    <h3>Benefits of Google Tag Manager Services</h3>
    <ul>
      <li>Real-time tracking & faster updates</li>
      <li>Easy planning for marketing strategies</li>
      <li>Identify best-performing channels</li>
      <li>Centralized reporting & unified tracking</li>
      <li>Debug tools for safer tag deployment</li>
      <li>Role-based permissions management</li>
      <li>Scroll-depth insights</li>
      <li>Enhanced user behavior understanding</li>
      <li>Update tags anytime without developers</li>
      <li>Quick troubleshooting & faster fixes</li>
      <li>Manage everything from one platform</li>
      <li>Free for SMBs (GTM Standard)</li>
    </ul>
  </div>

  {/* CTA */}
  <div className="gtm-cta">
    <h3>Ready To Optimize Your Tracking & Analytics?</h3>
    <button className="gtm-btn">Talk To Our GTM Experts</button>
  </div>
        <Footer />
</div>

    )
}
export default GoogleTag;