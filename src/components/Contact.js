import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for reaching out, " + formData.name + "!");
        setFormData({ name: "", email: "", message: "" });
    };

    const inputStyles = "w-full p-4 mb-4 rounded-xl bg-gray-100 outline-none transition-all shadow-[inset_4px_4px_8px_#cbced1,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_2px_2px_4px_#cbced1,inset_-2px_-2px_4px_#ffffff]";

    return (
       <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6 font-sans">
           <div className="bg-gray-200 p-8 md:p-12 rounded-[40px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] max-w-4xl w-full">

            <header className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-700 mb-2">Get In Touch</h1>
                <p className="text-gray-500 italic">We'd love to hear from you!</p>
            </header>

                <div className="flex flex-col md:flex-row gap-12">
                    <form className="flex-1" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            className={inputStyles}
                            placeholder="Name" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                        <input 
                            type="email" 
                            className={inputStyles}
                            placeholder="Email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <textarea 
                            className={`${inputStyles} h-32 resize-none`}
                            placeholder="Your Message" 
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                        <button className="w-full mt-4 py-3 rounded-xl bg-gray-200 text-gray-700 font-bold uppercase tracking-wider transition-all
                         shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] active:scale-95"
                         >Send Message
                         </button>
                    </form>

                    {/* Contact Info Sidebar */}
                    <div className="flex flex-col justify-center space-y-6 md:w-1/3">
            {[
              { icon: "📍", text: "Ranchi, Jharkhand" },
              { icon: "📞", text: "+91 98765 43210" },
              { icon: "✉️", text: "hello@foodscooter.com" }
            ].map((item, index) => (
              <div key={index} className="flex items-center p-4 rounded-2xl bg-gray-200 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]">
                <span className="text-2xl mr-4">{item.icon}</span>
                <p className="text-gray-600 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Contact;