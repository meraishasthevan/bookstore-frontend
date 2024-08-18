import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-about">
                    <h3>Bookstore</h3>
                    <p>Books are mirrors:"You only see in them what you already have inside you".</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>123 Book Street, Book World, India</p>
                    <p>Email: merai@yourbookstore.com</p>
                    <p>Phone: 789 3456 567</p> 
                </div>
            </div>
            <div className="footer-bottom">
                <p>@2024 Your Bookstore. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
