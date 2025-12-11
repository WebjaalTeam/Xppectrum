import Footer from "../Components/Footer";
import './Content.css'
import { FaArrowDownLong } from "react-icons/fa6";

function Content() {
    return (
        <div className='content-container'>
            <h1> Content Marketing</h1>
            <p>Build trust, increase traffic, and grow your brand organically through powerful storytelling.</p>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div className='content-descrption'>
                <h1>What is Content Marketing?</h1>
                <p>Content marketing is a strategic approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and ultimately, to drive profitable customer action. Unlike traditional advertising, content marketing delivers information your customers are actually looking for, educating and engaging them while establishing your brand as an authority in your field.</p>
            </div>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div className="benifits-container">
                <h1>
                    Key Benefits of Content Marketing
                </h1>
                <div className="benifit-cards-container">
                    <div className="benifit-cards">
                        <h1>Boosts SEO</h1>
                        <p>High-quality content improves your visibility in search engines and increases organic traffic.</p>
                    </div>
                    <div className="benifit-cards">
                        <h1>Builds Trust
                        </h1>
                        <p>Consistent content positions your brand as an expert, building credibility and long-term customer relationships.

                        </p>
                    </div>
                    <div className="benifit-cards">
                        <h1>Generates Leads
                        </h1>
                        <p>Effective content guides visitors through the buyer journey and converts them into leads and sales.

                        </p>
                    </div>
                </div>
            </div>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div className="benifits-container">
                <h1>
Popular Types of Content
                </h1>
                <div className="benifit-cards-container">
                    <div className="benifit-cards">
                        <h1>Blog Articles
</h1>
                        <p>Engaging, informative posts that answer questions and drive SEO value.

</p>
                    </div>
                    <div className="benifit-cards">
                        <h1>Videos

                        </h1>
                        <p>Short explainer videos, testimonials, and tutorials to connect visually with audiences.


                        </p>
                    </div>
                    <div className="benifit-cards">
                        <h1>Infographics

                        </h1>
                        <p>Visually appealing graphics that simplify complex information for quick consumption.

</p>
                    </div>
                    <div className="benifit-cards">
                        <h1>Case Studies

                        </h1>
                        <p>Real-world examples showcasing how your product or service solves customer problems.

</p>
                    </div>
                    <div className="benifit-cards">
                        <h1>Social Media Posts

                        </h1>
                        <p>Micro-content that drives engagement, traffic, and brand visibility across platforms.

</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}
export default Content;