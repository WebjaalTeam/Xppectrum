import Footer from "../Components/Footer";
import './DigitalPr.css'
import { FaArrowDownLong } from "react-icons/fa6";

function DigitalPr() {
    return (
        <div className="digitalpr-container">
            <h1>Digital PR
            </h1>
            <p>Increase brand awareness, earn high-quality backlinks, and enhance your online reputation through strategic Digital PR campaigns.

                Leverage strategic media outreach and content placement to connect with audiences and gain trust across digital platforms.

            </p>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div className='digitalpr-descrption'>
                <h1>What is Digital PR?
                </h1>
                <p>Digital PR (Public Relations) is a modern marketing strategy that focuses on improving a brand’s online presence through targeted outreach, content creation, and media engagement. Unlike traditional PR, which focuses on print or TV media, Digital PR uses online publications, influencers, blogs, and social media to share stories, build authority, and generate high-authority backlinks that boost SEO performance.

                    It involves crafting compelling narratives, press releases, and data-driven content that capture the attention of journalists and editors, resulting in media coverage and brand mentions across reputable websites. This not only increases visibility but also strengthens trust and brand credibility in the digital space.

                </p>
            </div>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div className="digitalpr-cards-container">
                <h1>Why Digital PR Matters</h1>
                <div className="digitalpr-cards-boxes">
                    <div className="digitalpr-cards">
                        <h1>Improves SEO

                        </h1>
                        <p>Earn backlinks from authoritative websites to increase your search rankings and domain authority.
                        </p>
                    </div>
                    <div className="digitalpr-cards">
                        <h1>Builds Authority

                        </h1>
                        <p>Appear in major publications to position your brand as a thought leader in your industry.
                        </p>
                    </div>
                    <div className="digitalpr-cards">
                        <h1>Increases Brand Awareness
                        </h1>
                        <p>Reach wider audiences by getting your stories featured on popular online platforms.</p>
                    </div>

                </div>
            </div>
             <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div className="digitalpr-cards-container">
                <h1>Core Strategies of Digital PR</h1>
                <div className="digitalpr-cards-boxes">
                    <div className="digitalpr-cards">
                        <h1>Press Releases


                        </h1>
                        <p>Write and distribute newsworthy announcements to media contacts and journalists.</p>
                    </div>
                    <div className="digitalpr-cards">
                        <h1>Media Outreach
                        </h1>
                        <p>Pitch stories to online magazines, blogs, and industry portals for relevant exposure.
                        </p>
                    </div>
                    <div className="digitalpr-cards">
                        <h1>Data-Driven Content

                        </h1>
                        <p>Create surveys, reports, or research-based content that journalists want to reference.</p>
                    </div>
                     <div className="digitalpr-cards">
                        <h1>Influencer Collaboration


                        </h1>
                        <p>Partner with bloggers or influencers to amplify reach and share authentic endorsements.

</p>
                    </div>
                     <div className="digitalpr-cards">
                        <h1>Thought Leadership


                        </h1>
                        <p>Publish guest articles and opinion pieces on high-authority platforms to build trust.
</p>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default DigitalPr;