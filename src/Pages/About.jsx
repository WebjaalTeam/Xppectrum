import FormPopup from '../Components/Popup';
import Footer from '../Components/Footer';


import './About.css';
function About() {
  return (
    <div className="about-page">
      <h1>Robust Web Applications and Mobile Apps Built for the Future</h1>
      <div className="about-intro">
        <img src='/Xppectrum/logo.png' alt='About Xppectrum' />
        < div className="about-text">
          <h1>Who We Are</h1>
          <p>By understanding your most lucrative business lines, and operational provocations, we provide a more sophisticated, data-driven passage way Software, Website, and Application (iOS & Android) Development; UI/UX Design, Technology and Digital Marketing strategies.

            Our cutting edge solution is definitely attracting the customer and improves the business in a simple way. Our disciplined management techniques, domain knowledge and holistic approach constantly develop ways to enhance value to our clients. Focus on quality at every step coupled with skilled resource management ensures that development remains always on track. Our products are aimed at bringing the best practices in pedagogy together with the latest technology to achieve excellence and to provide "the best in class".</p>
          <FormPopup />
        </div>
      </div>
      <div className='our-journey'>
        <h1>Our Journey So Far</h1>
        <p>Xppectrum was founded in 2018 with a vision to help companies achieve remarkable growth in customers, sales, and revenue. Starting from a small bedroom, our humble beginnings quickly transformed into a remarkable success story. Today, Xppectrum stands as one of the top Software, Website, and Application (iOS & Android) Development; UI/UX Design, Technology and Digital Marketing company, recognized for our innovative and results-driven approach.

          Over 121 firms from 9 countries rely on our software , digital marketing, technology, consulting, design, cloud computing, and communication services, and we are recognized as the best digital marketing company in India and globally.

          This accolade highlights our excellence in delivering tailored UI/UX Design, Web & App Development, Technologies and innovative Digital Strategy solutions to clients worldwide.

          Design, proximity, agile, automation, and learning are some of the key aspects of these digital operating models. This web application development company has served its clients from various sectors including Aerospace & Defense, Agriculture, Automotive, Communication Services, Consumer Packaged Goods, Education, Engineering Procurement & Construction, Real Estate, Financial Services, Healthcare, High Technology, Industrial Manufacturing, Information Services & Publishing, Insurance, Life Sciences, Logistics & Distribution, Media and Entertainment, Mining, Oil and Gas, Professional Services, Public Sector, Retail, Travel and Hospitality, Utilities, and Waste Management.</p>
      </div>
      <div className='our-culture'>
        <h1>Our Culture</h1>
        <p>At Xppectrum, our day begins with a strategic mindset: <span>What can we do today to surpass expectations? </span> 
          We operate with a culture of innovation, operational excellence, and a relentless commitment to delivering meaningful, measurable results.</p>
      </div>
      <div className="purpose-bar-bg">
                      <h1>Looking for the Bset Robust Web Applications and Mobile Apps Built for the Future</h1>
                      <form>
                          <input type="text" placeholder="Name" />
                          <input type="email" placeholder="Email" />
                          <input type="tel" placeholder="Phone Number" />
                          <select>
                              <option value="" disabled selected>Purpose</option>
                              <option value="web-development">Web Development</option>
                              <option value="mobile-app-development">Mobile App Development</option>
                          </select>
                          <button type="submit">Submit</button>
                      </form>
                  </div>
      <Footer />
    </div>
  );
}
export default About;