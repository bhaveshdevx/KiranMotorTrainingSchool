import React from 'react';
import { Car, Bike, Clock, IndianRupee, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CoursesSection = () => {
    const courses = [
        {
            id: 1,
            title: 'Car Driving (Beginner)',
            icon: <Car size={40} className="text-brand-black" />,
            price: '3000 onwards',
            duration: '15 Days',
            description: 'Complete training for beginners including traffic rules and parking.',
        },
        {
            id: 2,
            title: 'Refresher Course',
            icon: <Car size={40} className="text-brand-yellow" />,
            price: '1500 onwards',
            duration: '7 Days',
            description: 'For license holders who need confidence building and practice.',
        },
        {
            id: 3,
            title: 'Two-Wheeler Training',
            icon: <Bike size={40} className="text-brand-black" />,
            price: '2000 onwards',
            duration: '10 Days',
            description: 'Learn to ride scooty or bike safely with balance training.',
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-brand-black mb-12">Our Driving Courses</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <motion.div
                            key={course.id}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col"
                        >
                            <div className="p-6 flex-grow">
                                <div className="mb-4 bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center">
                                    {course.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                                <div className="flex items-center gap-4 text-sm font-medium text-gray-700 mb-2">
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} className="text-brand-yellow" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <IndianRupee size={16} className="text-green-600" />
                                        <span>{course.price}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 border-t border-gray-100">
                                <button className="w-full bg-brand-black hover:bg-gray-800 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 min-h-[48px]">
                                    Book Now <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
