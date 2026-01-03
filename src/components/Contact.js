import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for reaching out, " + formData.name + "!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-container">
            <div className="contact-card">
                <h1 className="contact-heading">Get In Touch</h1>
                <p className="contact-sub-heading">We'd love to hear from you!</p>

                <div className="contact-layout">
                    {/* Neumorphic Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            className="neu-input"
                            placeholder="Name" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                        <input 
                            type="email" 
                            className="neu-input"
                            placeholder="Email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <textarea 
                            className="neu-input"
                            placeholder="Your Message" 
                            style={{ height: "120px", resize: "none" }}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                        <button className="neu-button">Send Message</button>
                    </form>

                    {/* Contact Info Sidebar */}
                    <div className="contact-sidebar">
                        <div className="info-box">
                            <span className="icon">📍</span>
                            <p className="info-text">Ranchi, Jharkhand</p>
                        </div>
                        <div className="info-box">
                            <span className="icon">📞</span>
                            <p className="info-text">+91 98765 43210</p>
                        </div>
                        <div className="info-box">
                            <span className="icon">✉️</span>
                            <p className="info-text">hello@foodscooter.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;