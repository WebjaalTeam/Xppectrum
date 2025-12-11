import { FaArrowDownLong } from "react-icons/fa6";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import './SearchEngine.css'

function SearchEngine() {
    const navigate=useNavigate()
    return (
        <div className='search-engine-container'>
            <div className='search-main-content'>
                <h1>Search Engine Marketing (SEM)</h1>
                <p>Search Engine Marketing (SEM) is a powerful strategy used to promote websites through paid advertisements on search engine results pages (SERPs). SEM helps businesses target users actively searching for their services, improve visibility, and increase website traffic through keyword-based ads.</p>
            </div>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div className='search-ads'>
                <h1>Search Ads</h1>
                <p>Search ads appear on Google search results when users enter queries. These are text-based ads triggered by specific keywords and help target users with high intent.</p>
            </div>
            <div className='seach-content'>
                <div className='search-cards'>
                    <h1>🔎 What Are Search Ads?</h1>
                    <p>Search Ads are displayed at the top or bottom of Google’s search results page when users look up relevant keywords. They are designed to capture immediate attention.</p>
                </div>
                <hr class="v-line" />
                <div className='search-cards'>
                    <h1>💡 Benefits of Search Ads</h1>
                    <p>Target high-intent users, get measurable results, and control your budget. These ads ensure your brand shows up exactly when users are looking for related products or services.</p>
                </div>
            </div>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div className='search-ads'>
                <h1>Display Advertisement</h1>
                <p>Display ads are visually engaging ads appearing across websites, apps, and videos. These ads use images, banners, or animations to increase brand awareness and reach broader audiences.</p>
            </div>
            <div className='seach-content'>
                <div className='search-cards'>
                    <h1>🖼️ What Are Display Ads?
                    </h1>
                    <p>Display Ads are shown on the Google Display Network and partner sites. They rely on visuals to attract attention and can be static images, animated banners, or interactive media.

                    </p>
                </div>
                <hr class="v-line" />
                <div className='search-cards'>
                    <h1>📣 Benefits of Display Ads
                    </h1>
                    <p>Great for brand awareness, retargeting, and visually representing your product or service. Reach people across millions of websites and apps beyond search engines.

                    </p>
                </div>
            </div>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div className='search-ads'>
                <h1>Shopping Ads
                </h1>
                <p>Shopping ads display product images, prices, and store names directly in search results. These are ideal for e-commerce businesses looking to boost product visibility and sales.

                </p>
            </div>
            <div className='seach-content'>
                <div className='search-cards'>
                    <h1>🛍️ What Are Shopping Ads?
                    </h1>
                    <p>Shopping Ads appear on Google when users search for a product. They show your product image, price, and name before a user even clicks, making them very effective.

                    </p>
                </div>
                <hr class="v-line" />
                <div className='search-cards'>
                    <h1>💰 Benefits of Shopping Ads
                    </h1>
                    <p>High conversion rates, better-qualified leads, and strong visibility for individual products. Especially useful for online retailers wanting to promote specific inventory.

                    </p>
                </div>
            </div>
            <span className="icon-size">
                <FaArrowDownLong />
            </span>
            <div className='search-ads'>
                <h1>Pay Per Click (PPC)
                </h1>
                <p>Search Engine Marketing (SEM) is a powerful strategy used to promote websites through paid advertisements on search engine results pages (SERPs). SEM helps businesses target users actively searching for their services, improve visibility, and increase website traffic through keyword-based ads.

                </p>
            </div>
            <div className='seach-content'>
                <div className='search-cards'>
                    <h1>📌 What is PPC?
                    </h1>
                    <p>PPC is a digital advertising model where advertisers pay a fee each time their ad is clicked. It allows businesses to buy visits to their website instead of earning them organically. Ads appear on search engines, social platforms, and websites based on targeted keywords or audiences.

                    </p>
                </div>
                <hr class="v-line" />
                <div className='search-cards'>
                    <h1>🎯 Why Use PPC?
                    </h1>
                    <p>PPC offers immediate visibility, precise targeting, and measurable ROI. It's ideal for promoting time-sensitive offers, launching new products, and driving high-intent traffic. Platforms like Google Ads and Bing Ads provide full control over budget and ad reach.

                    </p>
                </div>
            </div>
            <Footer />
        
        </div>
    )
}

export default SearchEngine;