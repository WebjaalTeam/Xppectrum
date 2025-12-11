import Footer from "../Components/Footer";
import './LandingPage.css'
import { FaArrowDownLong } from "react-icons/fa6";

function LandingPage() {
    return (
        <div className="landing-page-container">
            <h1>Landing Page Development

            </h1>
            <p>Turn visitors into customers with high-converting, fast-loading, and beautifully designed landing pages.


            </p>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div className='landing-page-descrption'>
                <h1>What is Landing Page?
                </h1>
                <p>A landing page is a standalone web page designed specifically for a marketing or advertising campaign. It’s where a visitor “lands” after they click on a link in an email, ad, or social media post. The goal of a landing page is focused and clear: to convert visitors into leads or customers by guiding them toward a specific action—like signing up, booking, or purchasing.

Unlike a homepage, landing pages are designed with a single purpose and zero distractions, ensuring maximum impact and better conversion rates.


                </p>
            </div>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div className="landing-page-cards-container">
                <h1>Why Landing Pages Matter
</h1>
                <div className="landing-page-cards-boxes">
                    <div className="landing-page-cards">
                        <h1>High Conversions


                        </h1>
                        <p>Landing pages are optimized to turn visitors into leads and paying customers efficiently.


                        </p>
                    </div>
                    <div className="landing-page-cards">
                        <h1>Better Ad ROI


                        </h1>
                        <p>Pair your ads with focused landing pages to increase your return on investment (ROI).


                        </p>
                    </div>
                    <div className="landing-page-cards">
                        <h1>Targeted Messaging

                        </h1>
                        <p>Create multiple pages for different audiences, offers, or campaigns for laser-focused engagement.</p>
                    </div>

                </div>
            </div>
             <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div className="landing-page-cards-container">
                <h1>Essential Elements of a Landing Page
</h1>
                <div className="landing-page-cards-boxes">
                    <div className="landing-page-cards">
                        <h1>Clear Headline



                        </h1>
                        <p>A powerful and attention-grabbing title that conveys your main message instantly.</p>
                    </div>
                    <div className="landing-page-cards">
                        <h1>Strong Call to Action (CTA)

                        </h1>
                        <p>Bold buttons or forms that drive the visitor toward taking the desired action.


                        </p>
                    </div>
                    <div className="landing-page-cards">
                        <h1>Social Proof


                        </h1>
                        <p>Showcase testimonials, reviews, or case studies to build trust and credibility.

</p>
                    </div>
                     
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default LandingPage;