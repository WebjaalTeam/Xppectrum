import './Media.css'
import Footer from '../Components/Footer'

function Media(){
    return(
        <div>
            <div className='media-content'>
                <h1>Powering the Future of Media & Entertainment</h1>
                <p>Immersive. Interactive. Impactful. Crafted to Captivate and Perform.</p>
            </div>
            <div className="me-section">

  {/* Intro Section */}
  <div className="me-intro">
    <p>
      With years of experience in the Media & Entertainment industry, we specialize in crafting 
      top-tier M&E solutions. Our team of experts consistently leverages the latest technologies 
      and strategic insights to ensure you unlock the full potential of your unique business idea.
    </p>

    <p>
      From consulting and development to ongoing maintenance, we offer end-to-end, high-impact 
      solutions that empower businesses to build a strong and distinctive presence. No matter 
      how niche or unique your requirements are, we deliver tailored solutions that align 
      perfectly with your M&E goals. Whether it's production, distribution, broadcasting, 
      platform development, or reinventing entertainment experiences — we’re your trusted 
      technology partner every step of the way.
    </p>
  </div>

  {/* How We Empower Section */}
  <h2 className="me-title">How We Empower Media & Entertainment Ventures</h2>

  <p className="me-subtitle">
    We help media and entertainment businesses achieve digital excellence through modern, 
    scalable solutions tailored to evolving industry trends. Our innovative approach ensures 
    greater visibility, enhanced performance, and long-term value for your creative ideas.
  </p>

  {/* Feature Cards */}
  <div className="me-cards-container">

    <div className="me-card">
      <h3>Optimized Workflows</h3>
      <p>
        We bring process agility with tools and methods that reduce time-to-market, improve 
        efficiency, and optimize operational costs for both new and existing platforms.
      </p>
    </div>

    <div className="me-card">
      <h3>Robust & Safe Infrastructure</h3>
      <p>
        Security-first development with high-performing backend systems that safeguard your 
        content and ensure seamless experiences across Android, iOS, and web platforms.
      </p>
    </div>

    <div className="me-card">
      <h3>Cross-Channel Delivery</h3>
      <p>
        We build responsive apps, dynamic portals, and marketing automation systems to maximize 
        your reach across multiple audience touchpoints.
      </p>
    </div>

  </div>

  {/* Key Offerings */}
  <h2 className="me-title offerings-title">Key Offerings Tailored for M&E Success</h2>

  <ul className="offerings-list">
    <li>1. Digital Distribution Platforms</li>
    <li>2. Media Workflow Automation</li>
    <li>3. Mobile & Tablet Apps</li>
    <li>4. Interactive Web Portals</li>
    <li>5. Sales Process Digitization</li>
    <li>6. Custom ERP/CRM Development</li>
    <li>7. Smart Inventory Systems</li>
    <li>8. Next-Gen SCM Solutions</li>
    <li>9. Legacy System Modernization</li>
  </ul>

</div>

            <Footer />
        </div>
    )
}
export default Media