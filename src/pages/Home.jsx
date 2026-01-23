import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, User, MapPin, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import CoursesSection from '../components/CoursesSection';
import ServicesList from '../components/ServicesList';
import drive from "../assets/images/drive 2.png";

import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="flex flex-col">
            <SEO
                title="Best Driving School in Devichapada"
                description="Learn to drive in 20 days with Kiran Motor Training School. Expert instructors, flexible timings, and affordable rates in Devichapada since 2014."
                keywords="driving school, panvel, devichapada, learn driving, car training, license"
                canonical="/"
            />
            {/* Hero Section */}
            {/* <img height={200} width={200} src={driveGif} alt="" /> */}
            <section style={{ backgroundImage: `url(${drive})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                className="h-[600px] bg-brand-yellow py-16 px-4 text-center md:text-left relative overflow-hidden">
                <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
                        >
                            Learn to Drive in <span className="text-white bg-brand-black px-2 transform -skew-x-6 inline-block">20 Days</span>
                        </motion.h1>
                        <p className="text-lg md:text-xl text-white mb-8 font-medium">
                            Become a confident driver with our expert training. Safe, easy, and affordable.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-brand-black text-white text-lg font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-800 transition-transform transform hover:scale-105 min-h-[48px] flex items-center justify-center"
                        >
                            Book Trial Class
                        </Link>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <CoursesSection />

            {/* Services List (Why Choose Us) */}
            <ServicesList />

            {/* Trust Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-brand-black mb-10">
                        Why Choose Kiran Motor?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <TrustCard
                            icon={<User size={48} className="text-blue-600" />}
                            title="Friendly Instructor"
                            description="Learn at your own pace with patient, experienced training."
                        />

                        <TrustCard
                            icon={<Clock size={48} className="text-green-600" />}
                            title="Flexible Timings"
                            description="Morning and evening batches available for your convenience."
                        />

                        <TrustCard
                            icon={<ShieldCheck size={48} className="text-red-600" />}
                            title="Trusted"
                            description="Serving Devichapada and nearby areas since 2014."
                        />

                    </div>
                </div>
            </section>


            {/* Testimonials Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-brand-black mb-10">Student Success Stories</h2>
                    <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4 snap-x">
                        <TestimonialCard
                            name="Rahul Kumar"
                            text="I got my license in 1st attempt! The instructors are very patient."
                            rating={5}
                        />
                        <TestimonialCard
                            name="Priya Sharma"
                            text="Lady instructor was very helpful. I learned parking easily."
                            rating={5}
                        />
                        <TestimonialCard
                            name="Amit Patel"
                            text="Best driving school in the area. 15 days course is perfect."
                            rating={4}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const TrustCard = ({ icon, title, description }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center"
    >
        <div className="mb-4 bg-white p-4 rounded-full shadow-sm">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

const TestimonialCard = ({ name, text, rating }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-w-[300px] flex-1 snap-center">
        <div className="flex text-brand-yellow mb-2">
            {[...Array(rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <p className="text-gray-700 italic mb-4">"{text}"</p>
        <p className="font-bold text-gray-900">- {name}</p>
    </div>
);

export default Home;
