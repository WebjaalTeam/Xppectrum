import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Dropdown from "react-bootstrap/Dropdown";
import NestedDropdown from "./NestedDropdown";
import './Navbar.css';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false); // main Services dropdown

    // ✅ Services Data Array
    const servicesData = [
        {
            title: "Development",
            items: [
                { label: "Web Development", link: "/webdevelopment" },
                { label: "Mobile App Development", link: "/mobile" },
                { label: "E-commerce Development", link: "/e-commerce" },
                { label: "Applications Maintenance", link: "/applicationmaintance" },
                { label: "Infrastructure Maintenance", link: "/infrastrucure" },
                { label: "DevOps", link: "/devops" },
                { label: "Product Development", link: "/product-development" }
            ]
        },
        {
            title: "Digital Marketing",
            items: [
                { label: "Content Marketing", link: "/content" },
                { label: "Search Engine Marketing", link: "/sem" },
                { label: "Social Media Marketing", link: "/socialmedia" },
                { label: "SEO", link: "/seo" },
                { label: "Digital PR", link: "/digitalpr" },
                { label: "Landing Page Development", link: "/landingpage" },
                { label: "Revenue Generation", link: "/revenue" },
                { label: "Consultancy Services", link: "/consultancy" }
            ]
        },
        {
            title: "Design & Communication",
            items: [
                { label: "Website Design", link: "/webdesign" },
                { label: "Mobile App Design", link: "/mobile" },
                { label: "Graphic Design", link: "/graphicdesign" }
            ]
        },
        {
            title: "Data Strategy",
            items: [
                { label: "Research & Insight", link: "/researchinsight" },
                { label: "Strategy Planning", link: "/strategy" },
                { label: "Audit & Analytics Config", link: "/auditanalytics" },
                { label: "Google Tag Manager", link: "/googletag" },
                { label: "Centralised MIS", link: "/centralisedmis" },
            ]
        },
        {
            title: "Cloud Solution",
            items: [
                { label: "Azure Hosting", link: "/azure" },
                { label: "AWS Hosting", link: "/aws" },
                { label: "Business Email", link: "/businessemail" },
                { label: "WordPress Hosting", link: "/wordpress" },
                { label: "Dedicated Linux Hosting", link: "/linux" }
            ]
        },
        {
            title: "Emerging Technology",
            items: [
                { label: "Artificial Intelligence", link: "/artificialintelligence" },
                { label: "Augmented Reality", link: "/augmentedreality" },
                { label: "IoT", link: "/iot" },
                { label: "Blockchain", link: "/services/blockchain" },
                { label: "Chatbots", link: "/chatbot" },
                { label: "Machine Learning", link: "/machinelearning" }
            ]
        }
    ];

    return (
        <nav className="navbar">

            <Link to="/"><img src='/Xppectrum/logo.png' alt='Xppectrum' className='logo-img' /></Link>

            <div className='hamburger' onClick={() => setOpen(!open)}>
                <RxHamburgerMenu />
            </div>

            <div className={open ? "nav-links show" : "nav-links"}>

                <Link to="/about">About</Link>

                {/* ------------------ SERVICES DROPDOWN ------------------ */}
                <Dropdown
                    show={show}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    onToggle={(isOpen) => setShow(isOpen)}  // click support
                >
                    <Dropdown.Toggle as="span" className="nav-services-link">
                        Services
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {servicesData.map((service, index) => (
                            <NestedDropdown
                                key={index}
                                title={service.title}
                                items={service.items}
                            />
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                {/* --------------------------------------------------------- */}

                <Link to="/technology">Technology</Link>
                <Dropdown>
                    <Dropdown.Toggle as="span" className="nav-services-link">
                        Industry
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/political">Political</Dropdown.Item>

                        <Dropdown.Item href="#/realestate">Real Estate</Dropdown.Item>
                        <Dropdown.Item href="#/education">Educational</Dropdown.Item>
                        <Dropdown.Item href="#/insurence">Insurence</Dropdown.Item>
                        <Dropdown.Item href="#/healthcare">Healthcare</Dropdown.Item>
                        <Dropdown.Item href="#/technology">Information Technology</Dropdown.Item>
                        <Dropdown.Item href="#/logistics">Logistics & Supply Chain</Dropdown.Item>
                        <Dropdown.Item href="#/retail">Retail & E-commerce</Dropdown.Item>

                        <Dropdown.Item href="#/finace">Finace & Banking</Dropdown.Item>

                        <Dropdown.Item href="#/media">Media&Entertainment</Dropdown.Item>


                    </Dropdown.Menu>
                </Dropdown>
                <Link to="/carrers">Careers</Link>
                <Link to="/contact">Contact</Link>

            </div>

            <button className='contact-number'>+91 9121400470</button>

        </nav>
    );
}

export default Navbar;
