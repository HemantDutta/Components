'use client'

import { useState } from 'react'
import { motion } from 'framer-motion';

export default function PricingSection() {
    const [isAnnual, setIsAnnual] = useState(false)

    const plans = [
        {
            name: 'Basic',
            monthlyPrice: 9.99,
            annualPrice: 99.99,
            tagline: 'For individuals',
            features: ['1 User', '10 Projects', 'Basic Support', '1GB Storage']
        },
        {
            name: 'Pro',
            monthlyPrice: 19.99,
            annualPrice: 199.99,
            tagline: 'For small teams',
            features: ['5 Users', 'Unlimited Projects', 'Priority Support', '10GB Storage', 'Advanced Analytics']
        },
        {
            name: 'Enterprise',
            monthlyPrice: 49.99,
            annualPrice: 499.99,
            tagline: 'For large organizations',
            features: ['Unlimited Users', 'Unlimited Projects', '24/7 Support', '100GB Storage', 'Custom Integrations']
        }
    ]

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Choose Your Plan</h2>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-12">
                    <div className="bg-gray-800 p-1 rounded-full">
                        <button
                            className={`px-4 py-2 rounded-full ${!isAnnual ? 'bg-blue-500 text-white' : 'text-gray-300'}`}
                            onClick={() => setIsAnnual(false)}
                        >
                            Monthly
                        </button>
                        <button
                            className={`px-4 py-2 rounded-full ${isAnnual ? 'bg-blue-500 text-white' : 'text-gray-300'}`}
                            onClick={() => setIsAnnual(true)}
                        >
                            Annually
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="flex flex-wrap justify-center gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            className={`w-full md:w-80 rounded-lg overflow-hidden ${
                                index === 1 ? 'md:-mt-4' : ''
                            }`}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className={`p-8 ${
                                index === 1 ? 'bg-blue-400' : 'bg-blue-900'
                            }`}>
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold text-white mb-2">
                                    ${isAnnual ? plan.annualPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                                    <span className="text-lg font-normal">/{isAnnual ? 'year' : 'month'}</span>
                                </div>
                                <p className="text-blue-100">{plan.tagline}</p>
                            </div>
                            {index === 1 && <div className="h-1 bg-white"></div>}
                            <div className={`p-8 ${
                                index === 1 ? 'bg-blue-600' : 'bg-blue-900'
                            }`}>
                                <ul className="mb-8 space-y-2">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-blue-100">
                                            <svg className="w-5 h-5 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-neomorphic transition duration-300 hover:shadow-neomorphic-hover focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}