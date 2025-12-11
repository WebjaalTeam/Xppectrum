import { MdContentPasteSearch } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { FaBullhorn } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { SiMarketo } from "react-icons/si";
import { RiPagesFill } from "react-icons/ri";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaPersonShelter } from "react-icons/fa6";
import Footer from "../Components/Footer";

import { Link } from 'react-router-dom';
import './Digital.css'

function Digital() {
    return (
        <div className='digital-container'>
            <div className='digital-bg-container'>
                <h1>Empower Your Business with Smart Digital Marketing</h1>
                <p>From content creation to SEO, SEM, and social media strategies — we provide powerful digital solutions that grow your brand, attract leads, and drive revenue.</p>
            </div>
            <h1 className="digital-head-one">Digital Marketing Services</h1>
            <div className='digital-cards-container'>
                    <Link to={'/content'}>
                    <div className='digital-card-web'>
                        <MdContentPasteSearch />
                        <div className="digital-card-content">
                            <h1> Content Marketing</h1>
                            <p>We craft valuable and relevant content that attracts, engages, and retains your audience.
                From blogs to videos and infographics, our storytelling builds trust and converts.</p>
                            <button type="button">View More</button>
                        </div>
                    </div>
                    </Link>
                    <Link to='/sem'>
                    <div className='digital-card-web'>
                        <SiCoinmarketcap />
                        <div className="digital-card-content">
                            <h1>Search Engine Marketing</h1>
                            <p>Reach the top of search engines instantly with targeted paid ads that boost visibility and ROI. Our SEM campaigns connect you with the right audience using smart bidding and compelling.</p>
                            <button type="button">View More</button>
                        </div>
                    </div>
                </Link>
                <Link to='/socialmedia'>
                    <div className='digital-card-web'>
                        <FaBullhorn />
                        <div className="digital-card-content">
                            <h1>Social Media Marketing</h1>
                            <p>Boost your organic rankings with on-page, off-page, and technical SEO supported by audits, keyword research, and competitor analysis. Our strategies strengthen visibility, increase target.</p>
                            <button type="button">View More</button>
                        </div>
                    </div>
                </Link>
                <Link to='/seo'>
                    <div className='digital-card-web'>
                        < TbSeo />
                        <div className="digital-card-content">
                            <h1>Search Engine Optimization</h1>
                            <p>Boost your organic rankings with on-page, off-page, and technical SEO. We conduct audits, keyword research, and competitor analysis.Our services deliver long-term traffic and results.    </p>
                            <button type="button">View More</button>
                        </div>
                    </div>
                </Link>
                <Link to='/digitalpr'>
                    <div className='digital-card-web'>
                        <SiMarketo />
                        <div className="digital-card-content">
                            <h1>Digital PR</h1>
                            <p>
                                Increase awareness and earn backlinks through media outreach, influencer engagement,and press coverage.Our digital PR strengthens online authority and ensures your brand.
                            </p>
                            <button type="button">View More</button>
                        </div>
                    </div>
                    </Link>
                    <Link to='/landingpage'>
                    <div className='digital-card-web'>
                        <RiPagesFill />
                        <div className="digital-card-content">
                            <h1>Landing Page Development</h1>
                            <p>We build high-converting landing pages focused on your business goals. From lead generation to sales, we optimize layout, speed, and content.
                                Strong CTAs and clean design deliver.
                            </p>
                            <button type="button">View More</button>
                        </div>
                    </div>
               </Link>
               <Link to='/revenue'>
                    <div className='digital-card-web'>
                        <FaMoneyCheckAlt />
                        <div className="digital-card-content">
                            <h1>Revenue Generation</h1>
                            <p>Our strategies focus on ROI. We align your marketing with your sales funnel and use analytics, A/B testing, and conversion tracking to drive results.

                                Get measurable growth from every campaign.
                            </p>
                            <button type="button">View More</button>
                        </div>
                    </div>
                </Link>
                <Link to='/consultancy'>
                    <div className='digital-card-web'>
                        <FaPersonShelter />
                        <div className="digital-card-content">
                            <h1>Consultancy Services</h1>
                            <p>We guide your digital strategy from start to scale. Our expert consultants offer audits, planning, and customized roadmaps for long-term success.

                                Let’s take your marketing to the next level, together.
                            </p>
                            <button type="button">View More</button>
                        </div>
                    </div>
                    </Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Digital;