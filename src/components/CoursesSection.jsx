import React from 'react';
import { Car, Bike, Clock, IndianRupee, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import CarIllustration from '../assets/illustrations/Car driving-pana.svg';
import DrivingSchoolIllustration from '../assets/illustrations/driving school-rafiki.svg';
import BikeIllustration from '../assets/illustrations/rockers-rafiki.svg';
import { Link } from 'react-router-dom';
const CoursesSection = () => {
    const courses = [
        {
            id: 1,
            title: 'Car Driving (Beginner)',
            icon: CarIllustration,
            price: '5000 onwards',
            duration: '20 Days',
            description: 'Complete training for beginners including traffic rules and parking.',
        },
        {
            id: 2,
            title: 'Refresher Course',
            icon: DrivingSchoolIllustration,
            price: '1500 onwards',
            duration: '7 Days',
            description: 'For license holders who need confidence building and practice.',
        },
        {
            id: 3,
            title: 'Two-Wheeler Training',
            icon: BikeIllustration,
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
                            <div className="p-2 flex-grow">
                                <div className="mb-4 bg-gray-100 w-full rounded-full flex items-center justify-center">
                                    <img
                                        src={course.icon}
                                        alt="Icon"
                                        className="w-48 h-48 object-contain"
                                    />

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


                            <Link
                                to="/contact#contact-form"
                                className="w-full bg-brand-black hover:bg-gray-800 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 min-h-[48px]"
                            >
                                Book Now <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
