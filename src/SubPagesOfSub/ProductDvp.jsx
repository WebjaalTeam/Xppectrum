import Contact from '../Pages/Contact';
import { useNavigate } from 'react-router-dom';
import './ProductDvp.css'
function ProductDevelopment() {
    const navigate=useNavigate();
    return (
        <div className='product-container'>
            <div className='product-bg-container'>
                <h1>Innovative Digital Product Development
</h1>
                <p>We help you turn your ideas into successful, scalable products — from MVP to full-featured platforms.

</p>
                <button type='button' onClick={() => navigate("/contact")}>Start Your Prodcut</button>
            </div>
            <div className='product-web'>
                <h1>About Our Product Development Services
</h1>
                <hr style={{ width: "35%", margin: "0 auto", border: "1px solid black" }} />

                <p>
                    Whether you're a startup founder or an enterprise innovator, our product development team helps you bring digital ideas to life. We build full-cycle solutions — from product strategy and wireframes to development, launch, and iteration.

Our agile approach ensures your product evolves with real user feedback, scaling efficiently with technologies like React, Node.js, Flutter, and cloud platforms.
                    <ul>
                        <li>✅ MVP Design & Launch</li>
                        <li>✅ Agile Development Sprints</li>
                        <li>✅ UI/UX Prototyping & Testing</li>
                        <li>✅ SaaS & Scalable Architecture</li>
                    </ul>

                </p>
            </div>
            <h1 className='product-head'>Client Feedback</h1>
            <div className='product-clients'>
                <div className='product-clients-card'>
                    <h1>“They helped us take our MVP to market in under 10 weeks. Couldn’t ask for a more dedicated team.”
</h1>
                    <p>- Neha D.
                    </p>
                </div>
                <div className='product-clients-card'>
                    <h1>
“Their product roadmap clarity saved us from costly feature creep. Great agile execution.”
                    </h1>
                    <p>- Ramesh  K.</p>
                </div>
                <div className='product-clients-card'>
                    <h1>
“From UI design to backend scaling, their work helped us onboard 5k+ users smoothly.”

                    </h1>
                    <p>- Anjali  V.</p>
                </div>
               
            </div>
            <div className='product-details-conatiner'>
                <h1>Recent Product Launches
</h1>
                <div className='product-details'>
                    <img src='https://www.webjaal.com/assets/content_imgs/product_2.avif' alt='porject-one' />
                    <div className='mobile-content'>
                        <h1>Healthcare Booking MVP
</h1>
                        <h4>React + Node.js + MongoDB

</h4>
                        <h6>
Developed an MVP for doctor-patient bookings with user roles, live chat, and mobile responsivenes, and many more you want.


                        </h6>
                        <button type='button' onClick={() => navigate("/contact")}>Launch Your's</button>
                    </div>
                </div>
                <div className='product-details'>
                    <img src='https://www.webjaal.com/assets/content_imgs/product_3.jpg' alt='porject-one' />
                    <div className='product-content'>
                        <h1>SaaS Platform for Task Automation
</h1>
                        <h4>Laravel + Vue.js + AWS

</h4>
                        <h6>
Built a robust SaaS with tiered subscriptions, admin dashboards, and integrations with 3rd-party APIs, and More You Want.

                        </h6>
                        <button type='button' onClick={() => navigate("/contact")}>Request Demo</button>
                    </div>
                </div>
                <div className='product-names'>
                    <h1>Product Development Offerings
</h1>
                    <p>We partner across the full product lifecycle to ensure success:

</p>
                    <div className='product-service-cards'>
                    <h1>✔️ Product Discovery & Planning</h1>
                    <h1>✔️ UI/UX Wireframes & Prototypes</h1>
                    <h1>✔️ Frontend & Backend Engineering</h1>
                    <h1>✔️  Product Testing & QA</h1>
                    <h1>✔️  DevOps, Hosting & CI/CD Pipelines</h1>
                    </div>
                </div>
                <div className='product-gallery'>
                    <h1>Snapshots from Our Builds
</h1>
                    <p>Prototypes, dashboard panels, MVP workflows, and UI demos we've developed recently.

</p>
                    <div className='product-img'>
                        <img src='https://www.webjaal.com/assets/content_imgs/product_4.jpeg' alt='project-one' />
                        <img src='https://www.webjaal.com/assets/content_imgs/product_5.jpeg' alt='project-one' />
                        <img src='https://www.webjaal.com/assets/content_imgs/product_6.jpeg' alt='project-one' />
                        <img src='https://www.webjaal.com/assets/content_imgs/product_7.jpeg' alt='project-one'/>
                        <img src='https://www.webjaal.com/assets/content_imgs/product_8.jpeg' alt='project-one'/>
                        <img src='https://www.webjaal.com/assets/content_imgs/product_9.jpeg' alt='project-one'/>
                        </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default ProductDevelopment;