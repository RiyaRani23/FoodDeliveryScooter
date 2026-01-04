import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            <div className="bg-green-600 text-white py-16 px-6 text-center shadow-lg">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to Food Delivery Scooter</h1>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">Bringing your favorite meals and daily essentials to your doorstep.</p>
            </div>

            <div className="max-w-6xl mx-auto -mt-10 px-4">
                <img src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2021-09/Food%20delivery%20image.jpg" alt="Food Delivery" className="hero-image" />       
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white"
            </div>

            <div className="about-section neumorphic-card">
                <h2>Our Vision</h2>
                <p>
                    FoodScooter is more than just a delivery service; it's a commitment to convenience, quality, and community. We aim to connect you with the best local flavors and freshest groceries, all delivered with speed and a smile.
                </p>
                <p>
                    This project is a testament to mastering modern web development using React, focusing on performance, user experience, and robust data handling.
                </p>
            </div>

            <div className="stats-container">
                <div className="stat-card neumorphic-card">
                    <h2>15+</h2>
                    <p>City Branches</p>
                </div>
                <div className="stat-card neumorphic-card">
                    <h2>4.5 ⭐</h2>
                    <p>Average Partner Rating</p>
                </div>
                <div className="stat-card neumorphic-card">
                    <h2>5000+</h2>
                    <p>Grocery Items</p>
                </div>
                <div className="stat-card neumorphic-card">
                    <h2>1000+</h2>
                    <p>Happy Customers</p>
                </div>
            </div>

            <div className="services-section">
                <div className="service-box neumorphic-inset">
                    <h3>🍔 Food Delivery</h3>
                    <p>Partnered with 500+ top restaurants in Ranchi and Patna for diverse culinary experiences.</p>
                </div>
                <div className="service-box neumorphic-inset">
                    <h3>🛒 Grocery Store</h3>
                    <p>Get fresh produce, pantry staples, and daily essentials delivered in minutes.</p>
                </div>
                <div className="service-box neumorphic-inset">
                    <h3>📍 Local Branches</h3>
                    <p>Conveniently located branches in Kanka, Bariatu, Lalpur, and Doranda for faster service.</p>
                </div>
            </div>

            {/* 5. Hygiene & Safety Section */}
            <div className="about-section neumorphic-card">
                <h2>Our Commitment to Hygiene & Quality</h2>
                <p>
                    At FoodScooter, your health and safety are our top priorities. We adhere to the strictest hygiene protocols at every stage of the food preparation and delivery process.
                </p>
                <ul>
                    <li>✅  **Certified Kitchens:** We only partner with FSSAI-certified restaurants.</li>
                    <li>✅  **Temperature Control:** Food is stored and transported at optimal temperatures.</li>
                    <li>✅  **Regular Sanitization:** Delivery bags and equipment are sanitized daily.</li>
                    <li>✅  **Contactless Delivery:** Ensuring minimal physical interaction for your safety.</li>
                    <li>✅  **Daily Health Checks:** Our delivery partners undergo regular health screenings.</li>
                </ul>
        
                <div className="image-inline-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjcdyb2tvj-ux192VmgzlgIm1kC3nv9MCQQ&s" alt="Clean Kitchen" className="section-image" />      
                </div>
            </div>
            
            <div className="about-section neumorphic-card">
                <h2>Empowering Our Delivery Partners</h2>
                <p>
                    Our delivery partners are the backbone of FoodScooter. We believe in creating a supportive and respectful environment for every individual who works with us.
                </p>
                <ul>
                    <li>🤝  **Fair Wages:** Ensuring competitive earnings and transparent payment structures.</li>
                    <li>🛡️  **Insurance & Benefits:** Providing essential insurance coverage and support.</li>
                    <li>📈  **Growth Opportunities:** Training and development programs for career advancement.</li>
                    <li>🗣️  **Respect & Dignity:** Promoting a culture of respect for all our field executives.</li>
                </ul>
                <div className="image-inline-container">
                    <img src="https://static.vecteezy.com/system/resources/previews/059/289/716/large_2x/a-satisfied-customer-enjoys-food-delivery-interacting-with-a-delivery-person-on-their-smartphone-the-image-showcases-the-convenience-of-online-food-shopping-amidst-a-bright-background-photo.jpg" alt="Happy Delivery Partner" className="section-image" />      
                </div>
            </div>

            <div className="download-app-section neumorphic-card">
                <h2>Experience the Future of Delivery!</h2>
                <p>Download the FoodScooter app today for a seamless ordering experience.</p>
                <button className="download-button neumorphic-button">
                    <a href="https://play.google.com/store/apps/details?id=com.yourapp.package" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                        Download on Play Store
                    </a>
                </button>
                <div className="image-inline-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpedHVdEfLHk_KQKI59yY4IQdWHCZA96j7Bw&s" alt="App Screenshot" className="section-image app-screenshot" />
                     
                </div>
            </div>


            <div className="about-profile-section">
                <h2 className="team-title">Meet Our Lead Developer</h2>
                <UserClass />
            </div>
        </div>
    );
};

export default About;