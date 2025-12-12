import './Education.css'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom';

function Education() {
    const navigate = useNavigate()
    return (
        <div className='education-container'>
            <div className='education-header'>
                <h1>E-Learning App Development</h1>
                <p>A reliable eLearning app development company transforming the educational journey for millions of learners and educators globally through cutting-edge eLearning app solutions."</p>
                <button onClick={() => navigate('/contact')}>Get Free Consultation</button>
            </div>
            <div className='education-evolution'>
                <p>
                    The evolution of digital learning has revolutionized how people gain knowledge, offering unmatched flexibility and convenience. <span>Xppectrum</span> empowers learners and educators to connect through advanced eLearning platforms, enabling access to courses anytime, anywhere. Our solutions include interactive videos, eBooks, gamified learning, and audio lectures. With emerging technologies like AI/ML, AR/VR, blockchain, cloud computing, IoT, and robotics, Webjaal is helping reshape the traditional education system into a smarter, more accessible experience.
                </p>
            </div>
            <div className="elearn-section">

                <div className="elearn-header">
                    <h1>Accelerate Your Digital Learning Journey with</h1>
                    <h2>Our Tailored eLearning App Solutions</h2>
                    <p>
                        At My Company, we deliver scalable and engaging eLearning app solutions designed to enhance your
                        digital learning initiatives and reach learners globally with a seamless experience.
                    </p>
                </div>

                <div className="elearn-card-container">

                    <div className="elearn-card">
                        <h3>Custom eLearning Solutions</h3>
                        <p>
                            We create innovative, user-friendly eLearning apps tailored to your business goals, ensuring engaging
                            and accessible learning for all users.
                        </p>
                    </div>

                    <div className="elearn-card">
                        <h3>Advanced Learning Portals</h3>
                        <p>
                            Deliver interactive training materials through secure, cloud-based portals that promote skill
                            development and professional growth.
                        </p>
                    </div>

                    <div className="elearn-card">
                        <h3>Interactive Virtual Classrooms</h3>
                        <p>
                            Create dynamic virtual classrooms with live chat, streaming, and collaborative tools for teachers
                            and students worldwide.
                        </p>
                    </div>

                    <div className="elearn-card">
                        <h3>Workforce Training Platforms</h3>
                        <p>
                            Empower corporate teams with personalized training for onboarding, upskilling, certification tracking,
                            and performance improvement.
                        </p>
                    </div>

                    <div className="elearn-card">
                        <h3>Real-Time Video Learning Tools</h3>
                        <p>
                            Host webinars, tutorials, and workshops using advanced video conferencing features to connect global
                            learners efficiently.
                        </p>
                    </div>

                    <div className="elearn-card">
                        <h3>Enterprise eLearning Systems</h3>
                        <p>
                            Support large-scale education initiatives with enterprise-grade systems designed for scalable content
                            delivery and certification.
                        </p>
                    </div>

                </div>

                <div className="elearn-cta">
                    <button onClick={() => navigate('/contact')}>LET’S GET IN TOUCH</button>
                </div>

            </div>
            <div className="elearn-features-section">

                <h2 className="section-title">Advanced Features You Get in Your Sophisticated<br />eLearning App</h2>

                <p className="section-subtitle">
                    As a top-tier education app development company, we integrate innovative tools and technologies to provide
                    a seamless and future-ready eLearning experience for learners worldwide.
                </p>

                <div className="elearn-feature-card-container">

                    <div className="feature-card">
                        <h3>User Registration</h3>
                        <p>Secure account creation with email/mobile login, OTP verification, and password recovery options.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Online/Offline Courses</h3>
                        <p>Allow users to download lessons and learn without internet interruptions.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Lecture Scheduling</h3>
                        <p>Provide real-time updates on class timings, instructors, and subjects.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Personalized Learning Path</h3>
                        <p>Offer custom-paced learning with progress tracking and interactive content.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Personalized Recommendations</h3>
                        <p>AI-based suggestions for courses and study material based on learner progress.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Diverse ePayment System</h3>
                        <p>Support payments via cards, wallets, UPI, and international gateways.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Virtual Classrooms</h3>
                        <p>Immersive learning with AR/VR, live streaming, and collaborative tools.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Gamification</h3>
                        <p>Boost motivation through quizzes, points, rewards, and competitions.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Communication Mediums</h3>
                        <p>Messaging, video calls, community boards, and announcements.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Multi-lingual Support</h3>
                        <p>Offer courses in multiple languages with easy selection toggles.</p>
                    </div>

                    <div className="feature-card">
                        <h3>AI-based Assistant</h3>
                        <p>Smart assistant for instant doubt support and personalized guidance.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Data Analytics</h3>
                        <p>Track engagement, completion rates, and performance metrics.</p>
                    </div>

                </div>
            </div>
            <div className="elearn-advantages-section">

                <h2 className="section-title">Key Advantages of Leveraging eLearning Mobile Applications</h2>

                <p className="section-subtitle">
                    Our custom eLearning app solutions help organizations enhance learner engagement,
                    build strong digital presence, and deliver uninterrupted learning anytime, anywhere.
                </p>

                <div className="elearn-adv-card-container">

                    <div className="feature-card">
                        <h3>24/7 Accessibility</h3>
                        <p>Students can access learning materials anytime from anywhere for uninterrupted learning.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Cost Effectiveness</h3>
                        <p>Reduce infrastructure costs while delivering high-quality global education.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Learning Flexibility</h3>
                        <p>Users can learn at their own pace with downloadable materials and video tutorials.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Interactive Learning</h3>
                        <p>Quizzes, animations, and videos turn learning into an engaging experience.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Global User Base</h3>
                        <p>Reach learners across the world with internet-enabled eLearning access.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Real-time Feedback</h3>
                        <p>Instant scoring and feedback help learners identify gaps and improve fast.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Skill Development</h3>
                        <p>Support continuous learning for students and working professionals.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Eco-friendly Solution</h3>
                        <p>Reduce paper usage and transportation needs through digital learning.</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Education;