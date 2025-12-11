import Contact from '../Pages/Contact';
import { useNavigate } from 'react-router-dom';

import './Ecommerce.css'
function Ecommerce() {
    const navigate=useNavigate()
    return (
        <div className='Ecommerce-container'>
            <div className='Ecommerce-bg-container'>
                <h1>Custom E-commerce Development Solutions</h1>
                <p>We build secure, scalable, and conversion-focused online stores tailored for your brand and audience.</p>
                <button type='button'onClick={() => navigate("/contact")}>Get Your Strategy</button>
            </div>
            <div className='Ecommerce-web'>
                <h1>About Our E-commerce Expertise
                </h1>
                <hr style={{ width: "35%", margin: "0 auto", border: "1px solid black" }} />

                <p>
                    Whether you're launching a new online store or upgrading your existing platform, our e-commerce development services are designed to deliver fast, responsive, and highly engaging shopping experiences. We specialize in both custom builds and platform-based solutions.

                    Our development team ensures seamless functionality across the buying journey — from product pages and payment integrations to inventory and customer management. We also help businesses improve their store performance with analytics, SEO, and optimized UI/UX.

                    <ul>
                        <li>✅ Custom E-commerce Website Development
                        </li>
                        <li>✅ Shopify, WooCommerce, Magento Integration
                        </li>
                        <li>✅ Secure Payment Gateways (Razorpay, Stripe, etc.)
                        </li>
                        <li>✅ Scalable Admin Dashboard & Inventory Control
                        </li>
                    </ul>

                </p>
            </div>
            <h1 className='Ecommerce-head'>What Our Clients Say
            </h1>
            <div className='Ecommerce-clients'>
                <div className='Ecommerce-clients-card'>
                    <h1>“Our Shopify store was launched in just 3 weeks and it’s fast, beautiful, and user-friendly. Highly satisfied.”
                    </h1>
                    <p>- Pooja S.

                    </p>
                </div>
                <div className='Ecommerce-clients-card'>
                    <h1>
                        “We moved from WooCommerce to a custom Laravel solution built by them. Smooth experience and sales increased.”
                    </h1>
                    <p>- Arjun M.
                    </p>
                </div>
                <div className='Ecommerce-clients-card'>
                    <h1>
                        “Their e-commerce expertise helped us add multi-vendor features and mobile responsiveness. Great team.”

                    </h1>
                    <p>- Rajeev K.
                    </p>
                </div>

            </div>
            <div className='Ecommerce-details-conatiner'>
                <h1>E-commerce Projects</h1>
                <div className='Ecommerce-details'>
                    <img src='https://www.webjaal.com/assets/content_imgs/E_commer_1.png' alt='porject-one' />
                    <div className='Ecommerce-content'>
                        <h1>StyleHut – Online Fashion Boutique
                        </h1>
                        <h4>Shopify Custom Theme + Razorpay

                        </h4>
                        <h6>
                            Fully responsive Shopify store with custom product filters, lookbook feature, and real-time shipping tracking.
                            and feel good.

                        </h6>
                        <button type='button' onClick={() => navigate("/contact")}>Launch Your Store</button>
                    </div>
                </div>
                <div className='Ecommerce-details'>
                    <img src='https://www.webjaal.com/assets/content_imgs/E_commer_2.png' alt='porject-one' />
                    <div className='Ecommerce-content'>
                        <h1>GreenBasket – Online Grocery Delivery
                        </h1>
                        <h4>Custom PHP + Admin Panel

                        </h4>
                        <h6>
                            Multi-vendor support, zone-wise delivery, inventory manager, and real-time order tracking on mobile and desktop.

                        </h6>
                        <button type='button' onClick={() => navigate("/contact")}>Launch Your Store</button>
                    </div>
                </div>
                <div className='Ecommerce-names'>
                    <h1>E-commerce Development Services
                    </h1>
                    <p>We cover the complete e-commerce development lifecycle and platform solutions for B2C, B2B, and multi-vendor models:

                    </p>
                    <div className='Ecommerce-service-cards'>
                        <h1>✔️  Custom Store Design & Development
                        </h1>
                        <h1>✔️  Shopify, WooCommerce, Magento, Laravel Integration
                        </h1>
                        <h1>✔️  Payment Gateway, Shipping, & Tax Configuration
                        </h1>
                        <h1>✔️  Product Management System
                        </h1>
                        <h1>✔️  Conversion Rate Optimization (CRO)
                        </h1>
                    </div>
                </div>
                <div className='Ecommerce-gallery'>
                    <h1>Store Screens Gallery
                    </h1>
                    <p>Explore some elegant, user-first storefront designs developed for various niches.

                    </p>
                    <div className='Ecommerce-img'>
                        <img src='https://www.webjaal.com/assets/content_imgs/E_commer_3.png' alt='project-one' />
                        <img src='https://www.webjaal.com/assets/content_imgs/E_commer_4.png' alt='project-one' />
                        <img src='https://www.webjaal.com/assets/content_imgs/E_commer_5.png' alt='project-one' />
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default Ecommerce;