import React, { useState } from 'react';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactWithFrame from '../components/ContactWithFrame';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        vehicle: 'Car License',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("entry.1259226965", formData.name); // Full Name
        formDataToSend.append("entry.2098211916", formData.mobile); // Mobile
        formDataToSend.append("entry.1451852394", formData.vehicle); // Vehicle Type

        try {
            await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLSdsDq_q8OfNelPoWortcv4TzNh47BR43v-oP7Xo6twjOiSFTA/formResponse", // Replace FORM_ID with your Google Form ID
                {
                    method: "POST",
                    mode: "no-cors", // Important for Google Forms
                    body: formDataToSend,
                }
            );

            alert('Thank you! We will call you back shortly.');
            setFormData({ name: '', mobile: '', vehicle: 'Car License' });
        } catch (err) {
            console.error('Error submitting form:', err);
            alert('Something went wrong. Please try again.');
        }
    };


    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100"
            >
                <h1 className="text-3xl font-bold text-center text-brand-black mb-2">Get in Touch</h1>
                <p className="text-center text-gray-600 mb-8">Start your driving journey today!</p>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/917045638762"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xl font-bold py-4 rounded-xl shadow-md transition-transform transform hover:scale-[1.02] mb-8 min-h-[60px]"
                >
                    <MessageCircle size={28} />
                    Chat on WhatsApp
                </a>

                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">OR REQUEST A CALLBACK</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>

                {/* Inquiry Form */}
                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all min-h-[48px]"
                        />
                    </div>

                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">+91</span>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                required
                                pattern="[0-9]{10}"
                                maxLength="10"
                                value={formData.mobile}
                                onChange={(e) => {
                                    const val = e.target.value.replace(/\D/g, '');
                                    setFormData((prev) => ({ ...prev, mobile: val }));
                                }}
                                placeholder="Enter 10-digit number"
                                className="w-full pl-14 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all min-h-[48px]"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                        <div className="relative">
                            <select
                                id="vehicle"
                                name="vehicle"
                                value={formData.vehicle}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all appearance-none bg-white min-h-[48px]"
                            >
                                <option value="Car License">Car License</option>
                                <option value="Bike License">Bike License</option>
                                <option value="Truck License">Truck License</option>
                                <option value="Other">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-brand-black hover:bg-gray-800 text-white text-lg font-bold py-4 rounded-xl shadow-lg transition-transform transform hover:scale-[1.02] flex items-center justify-center gap-2 min-h-[60px]"
                    >
                        <Phone size={20} />
                        Call Me Back
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
