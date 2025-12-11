import Footer from '../Components/Footer';
import FAQ from './FAQ';
import { useNavigate } from 'react-router-dom';
import './Service.css';

function Service() {
    const navigate = useNavigate()
    return (
        <div className="service-container">
            <div className='service-container-img'>
                <div className='service-text'>
                    <h1>What We Do</h1>
                    <p>
                        We provide full-cycle IT solutions—from architecture and development to maintenance and optimization. Every project is tailored to achieve measurable outcomes and deliver sustainable value across your organization.
                    </p>
                </div>
            </div>
            <h1 className='heading'>Our Capabilities</h1>

            <div className='our-capabilities'>
                <div className='capabilities'>
                    <div>
                        <img src='/development.png' alt='development' />
                    </div>
                    <h1>Development</h1>
                    <p>Building scalable software solutions using modern technologies tailored to business needs.</p>
                    <button onClick={() => navigate('/development')}>Know More</button>
                </div>
                <div className='capabilities'>
                    <div>
                        <img src='/digital.png' alt='development' />
                    </div>
                    <h1>Digital Marketing
                    </h1>
                    <p>Enhancing brand visibility and engagement across digital channels through data-driven strategies.</p>
                    <button onClick={() => navigate('/digitaMarketing')}>Know More</button>
                </div>
                <div className='capabilities'>
                    <div>
                        <img src='/communication.png' alt='development' />
                    </div>
                    <h1>Communication & Design
                    </h1>
                    <p>Crafting compelling visual and verbal messages to enhance customer experience and trust.

                    </p>
                    <button onClick={() => navigate('/designCommunication')}>Know More</button>
                </div>
                <div className='capabilities'>
                    <div>
                        <img src='/data.png' alt='development' />
                    </div>
                    <h1>Data Strategy
                    </h1>
                    <p>Transforming raw data into actionable insights to drive smarter business decisions.

                    </p>
                    <button onClick={()=>navigate('/datastrategy')}>Know More</button>
                </div>
                <div className='capabilities'>
                    <div>
                        <img src='/cloud.png' alt='development' />
                    </div>
                    <h1>Cloud Solution
                    </h1>
                    <p>Enabling flexibility and scalability through secure and reliable cloud-based infrastructure.</p>

                    <button onClick={() => navigate('/cloudSolutions')}>Know More</button>
                </div>
                <div className='capabilities'>
                    <div>
                        <img src='/emerging.png' alt='development' />
                    </div>
                    <h1>Emerging Technology
                    </h1>
                    <p>Exploring AI, IoT, blockchain, and other disruptive innovations to future-proof your business.

                    </p>
                    <button onClick={() => navigate('/Ai')}>Know More</button>
                </div>
            </div>
            <FAQ />
            <div className="purpose-bar-bg">
                <h1>Let's build something impactful.</h1>
                <p>Whether you're launching, scaling, or reinventing</p>
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
export default Service;