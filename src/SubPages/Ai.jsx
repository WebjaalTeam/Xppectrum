import './Ai.css';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

function AI() {
    const navigate = useNavigate();
    return (
        <div className='ai-container'>
            <div className='ai-content'>
                <h1>Emerging Technology</h1>
            </div>
            <div className='ai-text'>
                <h1>Artificial Intelligence
                </h1>
                <p>
                    Emerging technologies are transforming the digital landscape at an unprecedented pace, unlocking new possibilities across every industry. From artificial intelligence and machine learning to IoT and blockchain, these innovations are reshaping how we connect, analyze data, and make decisions. Businesses that embrace these technologies early gain a competitive edge by improving efficiency, enhancing customer experiences, and driving smarter automation.

                    Our solutions are designed to help you harness the power of emerging tech to future-proof your organization. Whether it's deploying smart sensors, implementing AI-powered analytics, or creating immersive experiences with augmented reality, we provide strategic insights and scalable solutions that align with your digital goals. We don't just implement — we innovate alongside you.



                </p>

            </div>
            <div className='ai-conclusion'>
                <ul>
                    <h1>Artificial Intelligence
                    </h1>
                    <p>AI is transforming industries with capabilities like natural language processing, decision-making, and automation. It mimics human intelligence and learns from data over time.

                        Applications include fraud detection, medical diagnostics, predictive analytics, and personalized marketing — enhancing efficiency across sectors.

                    </p>
                    <button type="button" onClick={() => navigate('/artificialintelligence')}>Get A AI Solution</button>
                </ul>
                <img src='https://www.webjaal.com/assets/content_imgs/AI_imgage.jpg' alt='Ai' />
            </div>
            <div className='ai-conclusion'>
                <img src='https://www.webjaal.com/assets/content_imgs/chatboot_img1.webp' alt='chatbot' />
                <ul>
                    <h1>Chatbots</h1>
                    <p>Chatbots are virtual assistants that offer customer support, guidance, or automation through conversational interfaces, 24/7.

                        Powered by NLP and AI, they’re revolutionizing customer service by reducing workload and providing instant responses via websites, apps, and messaging platforms.

                    </p>
                    <button type="button" onClick={() => navigate('/chatbot')}>Get A Chatbot</button>

                </ul>

            </div>
            <div className='ai-conclusion'>
                <ul>
                    <h1>Machine Learning
                    </h1>
                    <p>ML allows systems to learn and improve from data without being explicitly programmed. It powers recommendation engines, fraud detection, and autonomous systems.

                        ML is used in diverse fields such as finance, healthcare, cybersecurity, and retail to make accurate, data-driven decisions.


                    </p>
                    <button type="button" onClick={() => navigate('/machinelearning')}>Get A ML Solution</button>
                </ul>
                <img src='https://www.webjaal.com/assets/content_imgs/machine_learn.webp' alt='Machine Learning' />
            </div>
            <div className='ai-conclusion'>
                <img src='https://www.webjaal.com/assets/content_imgs/Iot.jpg' alt='lOt' />
                <ul>
                    <h1>Internet of Things (IoT)
                    </h1>
                    <p>IoT connects devices like home appliances, sensors, and vehicles to the internet, enabling real-time monitoring and control.

                        This technology boosts automation in smart homes, industrial systems, and agriculture, leading to better data insights and operational efficiency.

                    </p>
                    <button type="button" onClick={() => navigate('/iot')}>Get A IoT Solution</button>
                </ul>

            </div>
            <div className='ai-conclusion'>
                <ul>
                    <h1>Augmented Reality (AR)
                    </h1>
                    <p>AR overlays digital content on the real world using smartphones, glasses, or headsets. It’s used in gaming, retail, education, and healthcare for immersive experiences.

                        From virtual try-ons to interactive learning, AR bridges the digital and physical worlds, enhancing engagement and learning.

                    </p>
                    <button type="button" onClick={() => navigate('/augmentedreality')}>Get A AR Solution</button>
                </ul>
                <img src='https://www.webjaal.com/assets/content_imgs/Augmented.jpg' alt='graphics' />
            </div>
            <div className='ai-cta'>
                <h1>Ready to Elevate Your Brand</h1>
                <p>Let’s create stunning visuals that tell your story, connect with your audience, and bring your ideas to life.</p>
                <button type="button" onClick={() => navigate('/contact')}>Get In Touch</button>
            </div>
            <Footer />
        </div>
    );
}
export default AI;