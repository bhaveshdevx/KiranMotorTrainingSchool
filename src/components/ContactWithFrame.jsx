import React from 'react';
import { Phone } from 'lucide-react';

const ContactWithFrame = () => {
    // Placeholder Google Form URL - Replace with actual URL
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdsDq_q8OfNelPoWortcv4TzNh47BR43v-oP7Xo6twjOiSFTA/viewform?usp=header";

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8 max-w-2xl flex-grow flex flex-col">

                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-brand-black">
                        Send Inquiry / <span className="text-brand-black">विचारणा करा</span>
                    </h1>
                    <p className="text-gray-600 mt-2">Fill the form below to book your seat.</p>
                </div>

                {/* Responsive Iframe Container */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex-grow flex flex-col relative">
                    {/* 
            The iframe needs a container that handles height gracefully.
            On mobile, we want it to be scrollable if needed, but ideally fit.
            We use a tall min-height to accommodate the form.
          */}
                    <div className="w-full flex-grow min-h-[500px] md:min-h-[600px] relative">
                        <iframe
                            src={googleFormUrl}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            title="Inquiry Form"
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 'none' }}
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>

                {/* Footer Call Button */}
                <div className="mt-8 text-center">
                    <p className="text-gray-500 mb-3 text-sm">Facing issues with the form?</p>
                    <a
                        href="tel:+919876543210"
                        className="inline-flex items-center justify-center gap-3 bg-brand-black hover:bg-gray-800 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-[1.02] w-full md:w-auto min-h-[60px]"
                    >
                        <Phone size={24} className="text-brand-yellow" />
                        Call Owner: +91-9876543210
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ContactWithFrame;
