import Footer from '../Components/Footer';
import './Technology.css'
import { Link } from 'react-router-dom';
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={() => setOpen(!open)}>
                <span>{question}</span>
                <span>{open ? "<" : ">"}</span>
            </div>

            {open && <p className="faq-answer">{answer}</p>}
        </div>
    );
};

function Technology() {
    const faqs = [
        {
            question: "What Industries Specalize In?",
            answer: "We serve sectors including healthcare, finance, manufacturing, e-commerce, and education."
        },
        {
            question: "Do you provide ongoing support after deployment?",
            answer: "Web development is basically the process of building and maintaining a website, referred to as coding, designing, and ensuring it has optimal performance. Its elements include front-end (user interface) and back-end development (server-side)."
        },
        {
            question: "How long does a typical project take?",
            answer: "Most projects range from a few weeks to a few months, depending on complexity and scope."
        },
        {
            question: "What technologies do you use?",
            answer: "E-business development implies the setting of digital strategies required to support business operations carried out on the Internet. It encompasses the processes of creating an ecommerce platform, integrating digital tools, and optimising customer interactions through web and mobile technologies."
        },
        {
            question: "I don't have a complete idea about my app, can you help me?",
            answer: "We use modern stacks like React.js, Node.js, Python, AWS, Docker, and more."
        },
        {
            question: "How do I start a project with you?",
            answer: "Simply reach out via our contact form. We’ll schedule a discovery call and move forward with a proposal."
        }
    ];
    return (
        <div className='technology-container'>
            <h1>Our Core Technology Services</h1>
            <div className='cards-container'>
                <div className='tech-cards'>
                    <img src='/Xppectrum/ittech.png' alt='ittech' />
                    <div>
                        <h1>IT Consulting & Strategy</h1>
                        <p>➣ Custom architecture design</p>
                        <p>➣ Technology stack selection</p>
                        <p>➣ Integration of modern tools & systems</p>
                        <p>➣ Continuous optimization & monitoring</p>
                    </div>

                </div>
                <div className='tech-cards'>
                    <img src='/Xppectrum/erpcrm.png' alt='Erp&Crm' />
                    <div>
                        <h1>ERP & CRM Integration</h1>
                        <p>➣ Unified data flow</p>
                        <p>➣ Operational efficiency</p>
                        <p>➣ Consistent customer experience</p>
                        <p>➣ Scalable architecture</p>
                    </div>

                </div>
                <div className='tech-cards'>
                    <img src='/Xppectrum/software.png' alt='software' />
                    <div>
                        <h1>Software Development</h1>
                        <p>➣ Tailored functionality</p>
                        <p>➣ Cross-platform access</p>
                        <p>➣ Future-ready architecture</p>
                        <p>➣ End-to-end delivery <Link to='/development'>See More</Link></p>
                    </div>

                </div>
                <div className='tech-cards'>
                    <img src='/Xppectrum/cloud.png' alt='cloud' />
                    <div>
                        <h1>Cloud Solutions</h1>
                        <p>➣ Enterprise-grade security</p>
                        <p>➣ Scalable performance</p>
                        <p>➣ Smooth migration</p>
                        <p>➣ Flexible workforce support <Link to='/cloudSolutions'>See More</Link></p>
                    </div>

                </div>
                <div className='tech-cards'>
                    <img src='/Xppectrum/cybersecurity.png' alt='cyber security' />
                    <div>
                        <h1>Cybersecurity Services</h1>
                        <p>➣ Proactive risk assessment</p>
                        <p>➣ Continuous monitoring</p>
                        <p>➣ Advanced threat detection</p>
                        <p>➣ Comprehensive security posture</p>
                    </div>

                </div>
                <div className='tech-cards'>
                    <img src='/Xppectrum/devops.png' alt='devops' />
                    <div>
                        <h1>DevOps & Automation</h1>
                        <p>➣ Faster release cycles</p>
                        <p>➣ Higher code quality</p>
                        <p>➣ Consistent environments</p>
                        <p>➣ Operational agility <Link to='/devops'>See More</Link></p>
                    </div>

                </div>
                <div className='tech-cards'>
                    <img src='https://i.pinimg.com/736x/9e/ee/7c/9eee7c583132d04530960099728977b9.jpg' alt='App Development' />
                    <div>
                        <h1>Mobile App Development</h1>
                        <p>➣ Native & cross-platform builds</p>
                        <p>➣ Smooth user experience</p>
                        <p>➣ Optimized performance</p>
                        <p>➣ App lifecycle support <Link to='/mobile'>See More</Link> </p>
                    </div>

                </div>
                <div className='tech-cards'>
                    <img src='https://i.pinimg.com/736x/8d/37/99/8d3799e24be55bdfddb7a4fd8e4100d0.jpg' alt='AI/ML' />
                    <div>
                        <h1>AI & Machine Learning</h1>
                        <p>➣ Automated data processing</p>
                        <p>➣ Advanced analytics</p>
                        <p>➣ Predictive intelligence</p>
                        <p>➣ Actionable insights <Link to='/Ai'>See More</Link></p>
                    </div>
                </div>
                <div className='tech-cards'>
                    <img src='https://i.pinimg.com/736x/68/aa/61/68aa613db13accf414562a2ec1fd72d7.jpg' alt='UI/UX' />
                    <div>
                        <h1>UI/UX</h1>
                        <p>➣ Human-centered approach</p>
                        <p>➣ Seamless interactions</p>
                        <p>➣ Visual consistency</p>
                        <p>➣ Higher engagement & retention</p>
                    </div>

                </div>
            </div>
            <h1 className="frequently">Frequently Asked Questions</h1>
            <div className="faq-container">
                {faqs.map((item, i) => (
                    <FAQItem key={i} {...item} />
                ))}
            </div>
            <Footer />
        </div>
    )
}
export default Technology;