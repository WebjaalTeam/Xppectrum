import React from "react";
import {
    FaFacebook,
    FaGoogle,
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaLinkedin,
    FaHome,
    FaEnvelope,
    FaPhone,
    FaGlobe
} from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
    return (
        <footer className="custom-footer">
            {/* Top Social Row */}
            <section className="footer-top">
                <div className="footer-left">
                    Get connected with us on social networks:
                </div>

                <div className="footer-social">
                    <div className="footer-social">
                        <a href="#"><FaFacebook size={20} color="#1877F2" /></a>
                        <a href="#"><FaInstagram size={20} color="#E1306C" /></a>
                        <a href="#"><FaGoogle size={20} color="#DB4437" /></a>
                        <a href="#"><FaYoutube size={20} color="#FF0000" /></a>
                        <a href="#"><FaTwitter size={20} color="#000000" /></a>
                        <a href="#"><FaLinkedin size={20} color="#0A66C2" /></a>
                    </div>

                </div>
            </section>

            {/* Middle Content */}
            <section className="footer-body">
                <div className="footer-col">
                    <h4>Xppectrum</h4>
                    <p>
                        We build websites, apps, and digital platforms that transform ideas
                        into business value. Design, development, branding—everything you
                        need in one place.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Products</h4>
                    <a href="#">Web Development</a>
                    <a href="#">Mobile Apps</a>
                    <a href="#">E-commerce</a>
                    <a href="#">UI/UX Design</a>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <a href="#">Pricing</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Documentation</a>
                    <a href="#">Support</a>
                </div>

                <div className="footer-col">
                    <h4>Contact</h4>
                    <p><FaHome /> Hyderabad, Telangana,500081</p>
                    <p><FaEnvelope /> query@Xppectrum.com</p>
                    <p><FaPhone /> +91 91214004470</p>
                    <p><FaGlobe /> www.company.com</p>
                </div>
            </section>

            {/* Bottom */}
            <div className="footer-bottom">
                © 2018 Copyright:
                <span className="footer-brand"> Xppectrum</span>
            </div>
        </footer>
    );
}
