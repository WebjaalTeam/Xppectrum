import Footer from "../Components/Footer";
import { FaArrowDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import './Consultancy.css'

function Consultancy() {
    const navigate = useNavigate()
    return (
        <div className="consultancy-container">
            <h1> Professional Consultancy Services

            </h1>
            <p>Empowering businesses with strategic solutions, expert insights, and transformative growth. Your success is our focus.


            </p>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div >
                <h1>About Our Consultancy
                </h1>
                <p>
                    Our consultancy firm specializes in delivering high-impact business strategies and solutions tailored to your unique challenges. We bring a wealth of experience across industries and combine analytical thinking with innovative problem-solving to help organizations unlock new levels of performance.

                    Whether you’re a startup aiming for market entry or an enterprise optimizing operations, our team partners with you to assess, strategize, and implement systems that create measurable outcomes. We believe in collaboration, transparency, and long-term value creation.



                </p>
            </div>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div>
                <h1>Business Strategy Consulting


                </h1>
                <p>Improve every stage of your funnel, from lead generation to closing deals, using data-driven tactics and automated workflows.



                </p>
            </div>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div>
                <h1>Digital Transformation



                </h1>
                <p>
                    Stay competitive in the digital age. Our consultants guide your organization through tech integration, process automation, cloud adoption, and data strategy — aligning digital investments with business goals.




                </p>
            </div>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div>
                <h1>Operations & Process Improvement



                </h1>
                <p>
                    Eliminate inefficiencies and reduce operational costs. We analyze workflows, identify bottlenecks, and help you implement streamlined systems using Lean, Agile, or Six Sigma frameworks.



                </p>
            </div>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div>
                <h1>Talent & HR Consulting





                </h1>
                <p>We support organizations in building the right teams, designing hiring strategies, and improving retention. From HR audits to leadership development, we align your people strategy with company vision.



                </p>
            </div>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div >
                <h1>Why Choose Us?


                </h1>
                <p>We bring a client-first mindset with a commitment to delivering outcomes, not just reports. Our team combines strategic insight with operational know-how and backs recommendations with data and action plans. Every engagement is tailored, measurable, and value-driven.

                    With clear communication, proven frameworks, and hands-on implementation support, we become a trusted partner in your growth journey — not just external advisors.


                </p>

            </div>

            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div >
                <h1>Let’s Transform Your Business Together




                </h1>
                <p>Ready to solve your toughest business challenges and accelerate growth? Reach out for a free discovery session with our consultants.




                </p>

            </div>
            <button type='button'onClick={() => navigate("/contact")}>Book A Free Consultaion</button>
            <Footer />
        </div>
    )
}
export default Consultancy;