import Contact from '../Pages/Contact';
import { useNavigate } from 'react-router-dom';

import './Mobile.css'
function Mobile() {
    const navigate=useNavigate();
    return (
        <div className='mobile-container'>
            <div className='mobile-bg-container'>
                <h1>Powerful Mobile App Development</h1>
                <p>We craft high-performing, user-friendly mobile applications for Android & iOS — designed to scale and deliver real business impact.</p>
                <button type='button'onClick={() => navigate("/contact")}>Get A Free Consultation</button>
            </div>
            <div className='mobile-web'>
                <h1>About Our Mobile App Services</h1>
                <hr style={{ width: "35%", margin: "0 auto", border: "1px solid black" }} />

                <p>
                    Our expert mobile app developers turn ideas into engaging, feature-rich mobile applications. We combine sleek UI/UX design with strong backend architecture to deliver apps that your users will love. From startups to enterprise-level solutions — we’ve got the mobile stack covered.

                    We build native Android & iOS apps, cross-platform apps using Flutter or React Native, and integrate seamlessly with APIs, databases, and cloud infrastructure. Whether it’s an MVP or a full production launch, we deliver mobile experiences that perform.


                    <ul>
                        <li>✅ Native Android & iOS App Development</li>
                        <li>✅ Cross-Platform Apps (Flutter / React Native)</li>
                        <li>✅ UI/UX Design, Prototyping & Animations</li>
                        <li>✅ App Store Deployment & Ongoing Support</li>
                    </ul>

                </p>
            </div>
            <h1 className='mobile-head'>Client Feedback</h1>
            <div className='mobile-clients'>
                <div className='mobile-clients-card'>
                    <h1>“They delivered our mobile app on time with all the features we needed — and it looks amazing!”</h1>
                    <p>- Neha R.
                    </p>
                </div>
                <div className='mobile-clients-card'>
                    <h1>
                        “Our React Native app runs flawlessly on both Android and iOS. Smooth experience from start to finish.”
                    </h1>
                    <p>- Alex M.</p>
                </div>
                <div className='mobile-clients-card'>
                    <h1>
                        “We came to them with just a concept and they brought it to life. Highly recommended for app startups.”

                    </h1>
                    <p>- Tushar P.</p>
                </div>
                <div className='mobile-clients-card'>
                    <h1>
                        “We only had an idea, and they transformed it into something we could launch. They’re amazing for young app startups.”
                    </h1>
                    <p>- Anurug S.</p>
                </div>
            </div>
            <div className='mobile-details-conatiner'>
                <h1>Mobile App Projects</h1>
                <div className='mobile-details'>
                    <img src='https://www.webjaal.com/assets/content_imgs/mobile_9.png' alt='porject-one' />
                    <div className='mobile-content'>
                        <h1>FitZone – Personal Fitness Tracker</h1>
                        <h4>Flutter App for Android & iOS</h4>
                        <h6>
                            Users can track workouts, set goals, and monitor health metrics. Integrated with Firebase & push notifications. Work With Us

                        </h6>
                        <button type='button' onClick={() => navigate("/contact")}>Start Your App With Us</button>
                    </div>
                </div>
                <div className='mobile-details'>
                    <img src='https://www.webjaal.com/assets/content_imgs/mobile_8.png' alt='porject-one' />
                    <div className='project-content'>
                        <h1>ShopEasy – Mobile Commerce Platform</h1>
                        <h4>React Native + Stripe Payments</h4>
                        <h6>
                            Fully functional shopping app with product listing, cart, secure checkout, and order tracking. Admin dashboard included.
                        </h6>
                        <button type='button'onClick={() => navigate("/contact")}>Let's Build Yours</button>
                    </div>
                </div>
                <div className='mobile-names'>
                    <h1>Mobile Development Services</h1>
                    <p>From first-time founders to enterprise IT, our services cover every phase of mobile app development:</p>
                    <div className='mobile-service-cards'>
                    <h1>✔️ Custom Android/iOS App Development</h1>
                    <h1>✔️  Cross-Platform Apps (Flutter / React Native)</h1>
                    <h1>✔️  UI/UX Design & App Prototyping</h1>
                    <h1>✔️  Firebase, AWS, and Backend Integration</h1>
                    <h1>✔️  Post-launch Support & App Store Optimization</h1>
                    </div>
                </div>
                <div className='mobile-gallery'>
                    <h1>App Screens Gallery</h1>
                    <p>A look at some of the clean and functional UI designs we've created for mobile.</p>
                    <div className='mobile-img'>
                        <img src='https://www.webjaal.com/assets/content_imgs/mobile_3.png' alt='project-one' />
                        <img src='https://www.webjaal.com/assets/content_imgs/mobile_2.png' alt='project-one' />
                        <img src='https://www.webjaal.com/assets/content_imgs/mobile_4.png' alt='project-one' />
                        </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default Mobile;