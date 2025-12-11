import Footer from "../Components/Footer";
import { FaArrowDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import './SearchEngineOptimization.css'

function SearchEngineOptimization() {
    const navigate=useNavigate();
    return (
        <div className="seo-container">
            <h1> Search Engine Optimization</h1>
            <p>Boost your website’s visibility, attract quality traffic, and grow your business organically with our expert SEO strategies.</p>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div >
                <h1>What We Do</h1>
                <p>Search Engine Optimization (SEO) is the practice of increasing your website’s visibility on search engines like Google, Bing, and Yahoo. It helps potential customers find your business when they search for services or products you offer.SEO is not a one-time setup — it’s an ongoing strategy involving technical optimization, content development, and building authority through quality links. Our tailored SEO campaigns focus on sustainable, long-term results.</p>
            </div>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div>
                <h1>On-Page SEO
                </h1>
                <p>
                    On-page SEO involves optimizing individual web pages to rank higher and earn more relevant traffic. We ensure your content is structured correctly with keyword-rich headings, meta titles, descriptions, and image alt text.

                    We also analyze your content’s readability, user intent alignment, internal linking, and content depth. This ensures that both users and search engines can understand and navigate your site efficiently.


                </p>
            </div>
               <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div>
                <h1>Technical SEO

                </h1>
                <p>
                    Technical SEO ensures your website is crawlable, indexable, and performs well from a structural and speed standpoint. We audit and optimize your website for site speed, mobile responsiveness, crawl errors, sitemap, robots.txt, and core web vitals.

We also fix broken links, duplicate content issues, and implement proper schema markup to enhance your visibility in rich search results. A technically sound website helps search engines rank your content more efficiently.



                </p>
            </div>
              <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div>
                <h1>Local SEO


                </h1>
                <p>
                   If you’re a local business, Local SEO is crucial to appear in location-based searches like “near me” or “in [city].” We optimize your Google Business Profile, local citations, reviews, and location-specific landing pages.

Our goal is to help you dominate the local map pack and drive foot traffic, calls, and local inquiries from nearby customers who are ready to take action.

We also monitor local rankings and competitor performance, continuously updating your local SEO presence to maintain top visibility in your service area.
                </p>
            </div>
             <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div>
                <h1>Why Choose Us?



                </h1>
                <p>We don’t believe in cookie-cutter SEO. Our team builds a custom strategy based on your goals, industry, and target audience. With transparent reporting, regular check-ins, and measurable results, we partner with you every step of the way.

Whether you want to rank locally, nationally, or globally, we combine creative content, technical expertise, and white-hat link-building to get your business the visibility it deserves.

</p>
            </div>
             <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div >
                <h1>Let’s Grow Your Search Visibility
                </h1>
                <p>Ready to increase traffic and dominate search rankings? Let’s talk strategy. Contact our SEO experts today!</p>
                
            </div>
            <button type='button'onClick={() => navigate("/contact")}>Book A Free Consultaion</button>
            <Footer />
        </div>
    )
}
export default SearchEngineOptimization;