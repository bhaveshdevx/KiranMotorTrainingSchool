import React from 'react';
import { CheckCircle, MapPin, Calendar, FileText, UserCheck } from 'lucide-react';

const ServicesList = () => {
    const features = [
        {
            id: 1,
            text: 'Doorstep Pickup & Drop Service',
            icon: <MapPin className="text-brand-yellow flex-shrink-0" size={24} />,
        },
        {
            id: 2,
            text: 'Sunday & Weekend Batches Available',
            icon: <Calendar className="text-brand-yellow flex-shrink-0" size={24} />,
        },
        {
            id: 3,
            text: 'RTO License Paperwork Assistance',
            icon: <FileText className="text-brand-yellow flex-shrink-0" size={24} />,
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-brand-black mb-10">Why Choose Us?</h2>

                    <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                        <ul className="space-y-6">
                            {features.map((feature) => (
                                <li key={feature.id} className="flex items-start gap-4">
                                    <div className="mt-1">
                                        {feature.icon}
                                    </div>
                                    <span className="text-lg text-gray-800 font-medium leading-relaxed">
                                        {feature.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
