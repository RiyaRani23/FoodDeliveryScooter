import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            <div className="bg-green-600 text-white py-16 px-6 text-center shadow-lg">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Welcome to Food Delivery Scooter
                    </h1>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto"> 
                  Bringing your favorite meals and daily essentials to your doorstep.
                  </p>
            </div>

            <div className="max-w-6xl mx-auto -mt-10 px-4">
                <img src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2021-09/Food%20delivery%20image.jpg" 
                alt="Food Delivery"  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white" />       
            </div>

            <div className="max-w-6xl mx-auto px-4 mt-12 space-y-12">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                   <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-4 border-green-500 inline-block">Our Vision</h2>
                   <div className="text-gray-600 space-y-4 mt-4 leading-relaxed"></div>
                     <p>
                        FoodScooter is more than just a delivery service; it's a commitment to convenience, quality, and community. We aim to connect you with the best local flavors and freshest groceries, all delivered with speed and a smile.
                    </p>
                    <p className="font-medium italic text-green-700">
                       This project is a testament to mastering modern web development using React, focusing on performance, user experience, and robust data handling.
                    </p>
                  </div>
                </div>
        

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {[
                        { val: "15+", label: "City Branches" },
                        { val: "4.5 ⭐", label: "Partner Rating" },
                        { val: "5000+", label: "Grocery Items" },
                        { val: "1000+", label: "Happy Customers" }
                    ].map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-3xl font-bold text-green-600">{stat.val}</h2>
                            <p className="text-gray-500 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

            <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: "🍔", title: "Food Delivery", desc: "Partnered with 500+ top restaurants in Ranchi and Patna." },
                        { icon: "🛒", title: "Grocery Store", desc: "Fresh produce and daily essentials delivered in minutes." },
                        { icon: "📍", title: "Local Branches", desc: "Serving Kanka, Bariatu, Lalpur, and Doranda." }
                    ].map((service, index) => (
                        <div key={index} className="bg-green-50 p-8 rounded-3xl border border-green-100 hover:bg-green-100 transition-colors">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.desc}</p>
                        </div>
                    ))}
                </div>

           <div className="max-w-6xl mx-auto px-4 my-16">
    <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 shadow-sm border border-emerald-100">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

            <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Our Commitment to <span className="text-emerald-600">Hygiene & Quality</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    At FoodScooter, your health and safety are our top priorities. We adhere to the strictest hygiene protocols at every stage of the food preparation and delivery process.
                </p>
                
                <ul className="space-y-5">
                    {[
                        { title: "Certified Kitchens", desc: "We only partner with FSSAI-certified restaurants." },
                        { title: "Temperature Control", desc: "Food is stored and transported at optimal temperatures." },
                        { title: "Regular Sanitization", desc: "Delivery bags and equipment are sanitized daily." },
                        { title: "Contactless Delivery", desc: "Ensuring minimal physical interaction for your safety." },
                        { title: "Daily Health Checks", desc: "Our delivery partners undergo regular health screenings." }
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1 w-5 h-5 border-2 border-emerald-500 rounded-md flex items-center justify-center">
                                <div className="w-2 h-3 border-r-2 border-b-2 border-emerald-500 rotate-45 mb-1"></div>
                            </div>
                            
                            <div>
                                <span className="font-bold text-gray-900 block md:inline">{item.title}:</span>
                                <span className="text-gray-600 md:ml-1 leading-snug">{item.desc}</span>
                            </div>
                        </li>
                        
                    ))}
                </ul>
            </div>

            <div className="lg:w-1/2 relative">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjcdyb2tvj-ux192VmgzlgIm1kC3nv9MCQQ&s" 
                    alt="Clean Kitchen" 
                    className="rounded-2xl shadow-xl w-full object-cover h-80 border-4 border-white"
                />
                
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                    Verified Safe
                </div>
            </div>

        </div>
    </div>
</div>
            
            <div className="max-w-6xl mx-auto px-4 my-16">
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="p-8 md:p-12 md:w-3/5">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="bg-orange-100 p-2 rounded-lg">🚀</span> 
                Empowering Our Delivery Partners
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our delivery partners are the backbone of <span className="text-green-600 font-bold">FoodScooter</span>. 
                We believe in creating a supportive and respectful environment for every individual who works with us.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <li className="flex flex-col gap-1">
                    <span className="text-2xl">🤝</span>
                    <h4 className="font-bold text-gray-800">Fair Wages</h4>
                    <p className="text-sm text-gray-500">Competitive earnings and transparent payment structures.</p>
                </li>
                <li className="flex flex-col gap-1">
                    <span className="text-2xl">🛡️</span>
                    <h4 className="font-bold text-gray-800">Insurance & Benefits</h4>
                    <p className="text-sm text-gray-500">Providing essential insurance coverage and support.</p>
                </li>
                <li className="flex flex-col gap-1">
                    <span className="text-2xl">📈</span>
                    <h4 className="font-bold text-gray-800">Growth Opportunities</h4>
                    <p className="text-sm text-gray-500">Training and development for career advancement.</p>
                </li>
                <li className="flex flex-col gap-1">
                    <span className="text-2xl">🗣️</span>
                    <h4 className="font-bold text-gray-800">Respect & Dignity</h4>
                    <p className="text-sm text-gray-500">Promoting a culture of respect for all field executives.</p>
                </li>
            </ul>
        </div>

        {/* Image Content */}
        <div className="md:w-2/5 w-full h-full min-h-[400px]">
            <img 
                src="https://static.vecteezy.com/system/resources/previews/059/289/716/large_2x/a-satisfied-customer-enjoys-food-delivery-interacting-with-a-delivery-person-on-their-smartphone-the-image-showcases-the-convenience-of-online-food-shopping-amidst-a-bright-background-photo.jpg" 
                alt="Happy Delivery Partner" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
        </div>
    </div>
</div>z

            <div className="bg-gray-900 rounded-3xl p-10 text-center text-white relative overflow-hidden flex justify-around">
                <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpedHVdEfLHk_KQKI59yY4IQdWHCZA96j7Bw&s" alt="App Screenshot" />          
                </div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-4">Experience the Future of Delivery!</h2>
                    <p className="mb-8 opacity-80">Download the FoodScooter app today for a seamless ordering experience.</p>
                    <button className="bg-green-500 hover:bg-orange-400 text-white font-bold py-4 px-10 rounded-full transition-transform active:scale-95 shadow-xl">
                        Download on Play Store
                   </button>
                    </div>
            </div>


            <div className="pt-12 text-center">
                <h2 className=" text-3xl font-bold text-gray-800 mb-8 underline decoration-green-500 -underline-offset-8 ">Meet Our Lead Developer</h2>
                <div className="bg-white p-6 rounded-3xl shadow-lg inline-block w-full max-w-md hover:bg-orange-200">
                    <UserClass />
                </div>
                
            </div>
        </div>
    );
};

export default About;