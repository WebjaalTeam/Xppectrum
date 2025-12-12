import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export default function NestedDropdown({ title, items }) {
    const [show, setShow] = useState(false);

    return (
        <Dropdown
            drop="end"
            show={show}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onToggle={(isOpen) => setShow(isOpen)}  // click support
            className="nested-wrapper"
        >
            {/* TEXT ONLY - no box */}
            <Dropdown.Toggle as="span" className="submenu-title">
                {title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {items.map((item, index) => (
                    <Link
                        key={index}
                        to={item.link}
                        className="submenu-link"
                    >
                        {item.label}
                    </Link>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}
