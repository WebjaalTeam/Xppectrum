import './GraphicDesign.css';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

function GraphicDesign(){    
    const navigate=useNavigate();
    return(
        <div className='graphicdesign-container'>
            <div className='graphicdesign-content'>
                <h1>Creative Design Services</h1>
                <p>We bring your ideas to life with visually engaging and brand-driven designs that make your business unforgettable.</p>
            </div>
            <div className='graphicdesign-text'>
                <h1>Crafting Digital Experiences That Drive Business Growth</h1>
                <p>
                    A well-developed website has unlimited potential to attain the maximum reach of the
                    business. Xppectrum is a leading web development company in India that understands each
                    and every micro information about the website and business to provide the excellent services
                    out of best. The crucial part of designing any website is understanding the main motive of
                    the website and its user interface that acts like a magnet to the customers. Customer satisfaction is the backbone of our organization and we continuously work hard to maximize it and give the rich experience with one of the best website development company in India - Xppectrum.


                </p>

            </div>
            <div className='graphicdesign-conclusion'>
                <ul>
                    <h1>Logo Design</h1>
                    <p>A logo is the foundation of your brand. We create clean, timeless, and scalable logos that reflect your business identity with clarity and uniqueness.

From conceptual sketches to finalized marks, we ensure every logo communicates powerfully.
</p>
                        <li>♻️ Editorial and blog illustrations</li>
                        <li>♻️ Custom mascots and characters</li>
                        <li>♻️ Onboarding screens and UI icons</li>
                        <li>♻️ Vector or hand-drawn style options</li>
                        <li>♻️ Illustrations that match your brand theme</li>
                        <li>♻️ Story-driven and concept-based artwork</li>
                </ul>
                <img src='https://www.webjaal.com/assets/content_imgs/logos_design.jpg' alt='graphics' />
            </div>
            <div className='graphicdesign-conclusion'>
                 <img src='https://www.webjaal.com/assets/content_imgs/branding_1.jpg' alt='webdesign' />
                <ul>
                    <h1>Branding Design</h1>
                    <p>Your brand identity goes beyond just a logo. We design complete brand systems—colors, fonts, icons, layouts—that maintain consistency and recognition everywhere.</p>
                        <li>♻️ Brand discovery sessions and strategy mapping</li>
                        <li>♻️ Brand color palette and font pairing</li>
                        <li>♻️ Icon sets, graphic styles, and image guidelines</li>
                        <li>♻️ Social media branding kits and templates</li>
                        <li>♻️ Business card, letterhead, and envelope design</li>
                        <li>♻️ Consistent branding across digital & print media</li>
                </ul>
               
            </div>
             <div className='graphicdesign-conclusion'>
                <ul>
                    <h1>Illustration & Custom Design</h1>
                    <p>Custom illustrations bring a unique personality to your brand. Whether it’s editorial, web, app, or merchandise design—we provide high-quality artwork tailored to your style and message.
</p>
                        <li>♻️ Editorial and blog illustrations</li>
                        <li>♻️ Custom mascots and characters</li>
                        <li>♻️ Onboarding screens and UI icons</li>
                        <li>♻️ Vector or hand-drawn style options</li>
                        <li>♻️ Illustrations that match your brand theme</li>
                        <li>♻️ Story-driven and concept-based artwork</li>
                </ul>
                <img src='https://www.webjaal.com/assets/content_imgs/Illustration_Custom_Design.jpg' alt='graphics' />
            </div>
            <div className='graphicdesign-conclusion'>
                 <img src='https://www.webjaal.com/assets/content_imgs/Infographics_Design.jpg' alt='webdesign' />
                <ul>
                    <h1>Infographics  Design</h1>
                    <p>We turn complex data and statistics into beautiful, informative infographics. Designed for web, presentations, and print—they captivate your audience while delivering insight.</p>
                        <li>♻️ Custom infographics for reports, blogs & campaigns</li>
                        <li>♻️ Visual storytelling through icons, charts, and layout</li>
                        <li>♻️ Data visualizations with pie charts, bars, graphs, etc.</li>
                        <li>♻️ Designs optimized for print, web, or social platforms</li>
                        <li>♻️ Content structuring and flow mapping</li>
                        <li>♻️ Brand-matched colors and fonts</li>
                </ul>
               
            </div>
             <div className='graphicdesign-conclusion'>
                <ul>
                    <h1>Motion Graphics & Animation</h1>
                    <p>We create animated videos, logo reveals, and dynamic content that keeps your audience engaged. Motion graphics enhance storytelling with transitions, effects, and sound.

Ideal for social media, product demos, and branded intros — our animations communicate with clarity and style.
</p>
                        <li>♻️ Logo animation and reveal intros</li>
                        <li>♻️ Explainer videos with icons & narration</li>
                        <li>♻️ Animated infographics & text transitions</li>
                        <li>♻️ Instagram/Facebook story animations</li>
                        <li>♻️ Character animation and motion illustration</li>
                        <li>♻️ Custom animated assets for web & mobile</li>
                </ul>
                <img src='https://www.webjaal.com/assets/content_imgs/Motion_Graphics_Animation.jpg' alt='graphics' />
            </div>
            <div className='graphicdesign-cta'>
                <h1>Ready to Elevate Your Brand</h1>
                <p>Let’s create stunning visuals that tell your story, connect with your audience, and bring your ideas to life.</p>
                <button type="button" onClick={()=>navigate('/contact')}>Get In Touch</button>
            </div>
            <Footer />
            </div>
    );
}
export default GraphicDesign;