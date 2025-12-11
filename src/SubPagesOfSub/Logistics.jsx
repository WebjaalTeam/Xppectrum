import React from "react";
import Footer from "../Components/Footer";
import './Logistics.css';
export default function LogisticsSection() {
  return (
    <div className="logistics-section">
      <div className="logistics-header">
        <h2>Logistics &amp; Supply Chain Software Solutions</h2>
        <h3 className="logistics-subtitle">
          Delivering end-to-end logistics technology including real-time tracking,
          automated warehouse systems, and inventory management tools—designed to
          streamline and scale your operations.
        </h3>
      </div>

      <div className="logistics-grid">
        <div className="logistics-card">
          <h4>Logistics &amp; Supply Chain</h4>
          <ul>
            <li>Real-time shipment tracking</li>
            <li>GPS-enabled fleet tracking</li>
            <li>Route optimization and planning</li>
            <li>ETA predictions with alerts</li>
            <li>Mobile access for drivers &amp; dispatch</li>
            <li>Live updates for customers and partners</li>
          </ul>
          <p className="card-desc">
            Gain full visibility across your fleet with smart tracking systems
            that reduce delays, optimize routes, and improve customer satisfaction
            through transparent delivery updates.
          </p>
        </div>

        <div className="logistics-card">
          <h4>Inventory &amp; Warehouse Management</h4>
          <ul>
            <li>Stock level monitoring and alerts</li>
            <li>Warehouse zone &amp; bin management</li>
            <li>Barcode scanning &amp; automation</li>
            <li>Pick-pack-ship workflows</li>
            <li>Real-time inventory synchronization</li>
          </ul>
          <p className="card-desc">
            Streamline warehouse operations with efficient, accurate inventory
            systems that prevent overstock, reduce losses, and support smart
            fulfillment strategies.
          </p>
        </div>

        <div className="logistics-card">
          <h4>Automation &amp; Optimization Tools</h4>
          <ul>
            <li>Automated order processing</li>
            <li>Workflow customization &amp; rules</li>
            <li>Performance dashboards</li>
            <li>Load &amp; space optimization</li>
            <li>Predictive demand forecasting</li>
          </ul>
          <p className="card-desc">
            Leverage AI-driven logic and automation tools to eliminate
            bottlenecks, reduce costs, and continuously improve logistics
            performance and service levels.
          </p>
        </div>

        <div className="logistics-card">
          <h4>Integration &amp; Connectivity</h4>
          <ul>
            <li>API integration with ERP/CRM</li>
            <li>Cloud-based deployment</li>
            <li>Multichannel order syncing</li>
            <li>eCommerce &amp; shipping integrations</li>
            <li>Secure access and user control</li>
          </ul>
          <p className="card-desc">
            Our tools seamlessly connect to your existing platforms, enabling
            real-time data flow between departments, partners, and customers—
            ensuring operational harmony.
          </p>
        </div>
      </div>

      <div className="logistics-cta">
        <h3>Let’s Transform Your Logistics Operations</h3>
        <p>
          Talk to our logistics software experts and discover how we can
          modernize your supply chain with scalable, intelligent solutions.
        </p>
        <button className="logistics-btn">Get in Touch</button>
      </div>
      <Footer/>
    </div>
  );
}
