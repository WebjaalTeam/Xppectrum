import Footer from '../Components/Footer';
import './CentralisedMIS.css'

function CentralisedMIS(){
    return(
        <div className="mis-section">

  {/* TITLE */}
  <div>
    <h2>Centralised MIS</h2>
    <h3 className="mis-subtitle">
      Streamline decision-making, reporting, automation, and business efficiency with a centralized MIS framework.
    </h3>
  </div>

  {/* OVERVIEW */}
  <div className="mis-overview">
    <h3>Management Information System (MIS) Services</h3>
    <p>
      Our MIS services help you organize, evaluate, and manage all business departments effectively.
      With insights into the past, present, and future, MIS empowers better decision-making at every level
      of your organization.
    </p>
  </div>

  {/* MIS SERVICE CARDS */}
  <div className="mis-grid">

    <div className="mis-card">
      <h4>Centralisation</h4>
      <ul>
        <li>Clear communication flow</li>
        <li>Top-to-bottom execution</li>
        <li>Hierarchical decision mapping</li>
      </ul>
      <p className="card-desc">
        MIS creates a centralized flow of decisions from senior to operational levels for accurate execution.
      </p>
    </div>

    <div className="mis-card">
      <h4>Decision-Making Reports</h4>
      <ul>
        <li>Fact-based insights</li>
        <li>Real-time reporting</li>
        <li>Performance data for leadership</li>
      </ul>
      <p className="card-desc">
        Get scheduled & custom reports that help leadership make informed, strategic decisions.
      </p>
    </div>

    <div className="mis-card">
      <h4>Business Automation</h4>
      <ul>
        <li>Automated reporting</li>
        <li>Operational data systems</li>
        <li>Smart workflow automation</li>
      </ul>
      <p className="card-desc">
        Enable automated data collection and reporting to streamline operations across management levels.
      </p>
    </div>

    <div className="mis-card">
      <h4>Presentations & Planning</h4>
      <ul>
        <li>Budgeting assistance</li>
        <li>Strategic plan creation</li>
        <li>Management presentations</li>
      </ul>
      <p className="card-desc">
        MIS supports planning, budgeting, analysis, and executive presentations with clear visual insights.
      </p>
    </div>

    <div className="mis-card">
      <h4>Bird’s-Eye View Dashboard</h4>
      <ul>
        <li>Real-time analytics</li>
        <li>Department-level insights</li>
        <li>Performance overview</li>
      </ul>
      <p className="card-desc">
        Interactive dashboards give a high-level overview of key metrics and business activities.
      </p>
    </div>

    <div className="mis-card">
      <h4>Cloud Computing</h4>
      <ul>
        <li>Access from anywhere</li>
        <li>Hassle-free scaling</li>
        <li>Reduced infrastructure cost</li>
      </ul>
      <p className="card-desc">
        Use cloud resources instead of maintaining physical servers for better efficiency and lower costs.
      </p>
    </div>

    <div className="mis-card">
      <h4>Executive Information Systems</h4>
      <ul>
        <li>Internal & external data</li>
        <li>Communication enhancement</li>
        <li>Strategic awareness</li>
      </ul>
      <p className="card-desc">
        EIS provides senior management with holistic information for smarter decision-making.
      </p>
    </div>

    <div className="mis-card">
      <h4>Organizational Intelligence</h4>
      <ul>
        <li>Department collaboration</li>
        <li>Unified data visibility</li>
        <li>Operational clarity</li>
      </ul>
      <p className="card-desc">
        MIS ensures better data flow across teams, improving coordination & operational understanding.
      </p>
    </div>

  </div>

  {/* BENEFITS */}
  <div className="mis-benefits-box">
    <h3>Benefits of Management Information System (MIS)</h3>
    <ul>
      <li>Better decision-making based on real-time insights</li>
      <li>One-click detailed reporting</li>
      <li>Improved operational efficiency and process control</li>
      <li>Clear definition of business processes</li>
      <li>Reduced operational cost with optimized workflows</li>
      <li>Minimal resource wastage through effective monitoring</li>
      <li>Reduced employee workload with automation</li>
      <li>Higher productivity and faster communication</li>
      <li>Reduced time spent searching for data or files</li>
      <li>Supports planning, budgeting, and talent deployment</li>
    </ul>
  </div>

  {/* CTA */}
  <div className="mis-cta">
    <h3>Ready to Transform Your Business with MIS?</h3>
    <button className="mis-btn">Talk to Our MIS Experts</button>
  </div>
        <Footer />
</div>

    )
}
export default CentralisedMIS;