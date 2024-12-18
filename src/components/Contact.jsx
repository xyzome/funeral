import React, { useState } from 'react';
import { Mail, Home } from 'lucide-react';
import Common from './Common';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        captcha: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen">
            <Common title="Contact" route="contact" />

            {/* Contact Form Section */}
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {/* Form */}
                    <div>
                        <h2 className="mb-8 text-2xl font-bold text-blue-900">Get in Touch</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                            aria-labelledby="contact-form-heading"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full rounded border border-gray-300 bg-white p-3"
                                onChange={handleChange}
                                value={formData.name}
                                required
                                aria-label="Enter your name"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    className="w-full rounded border border-gray-300 bg-white p-3"
                                    onChange={handleChange}
                                    value={formData.email}
                                    required
                                    aria-label="Enter your email address"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter Mobile Number"
                                    className="w-full rounded border border-gray-300 bg-white p-3"
                                    onChange={handleChange}
                                    value={formData.phone}
                                    required
                                    aria-label="Enter your mobile number"
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Enter Message"
                                rows={4}
                                className="w-full rounded border border-gray-300 bg-white p-3"
                                onChange={handleChange}
                                value={formData.message}
                                required
                                aria-label="Enter your message"
                            />
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    name="captcha"
                                    placeholder="Captcha"
                                    className="w-full rounded border border-gray-300 bg-white p-3"
                                    onChange={handleChange}
                                    value={formData.captcha}
                                    required
                                    aria-label="Enter captcha"
                                />
                                <div
                                    className="flex h-12 w-24 items-center justify-center rounded bg-gray-200"
                                    aria-hidden="true"
                                >
                                    <span className="text-gray-600">964591</span>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="rounded bg-orange-500 px-8 py-3 font-semibold text-blue-900 hover:bg-orange-600"
                                aria-label="Submit the form"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="mb-8 text-2xl font-bold text-blue-900">
                            Contact Us To Get Better Information
                        </h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="rounded-lg bg-orange-500 p-3" aria-hidden="true">
                                    <Mail className="h-6 w-6 text-blue-900" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-900">Let’s Talk</h3>
                                    <p className="text-black" aria-label="Phone number">
                                        +91 96195 00600
                                    </p>
                                    <p className="text-black" aria-label="Phone number">
                                        +91 96194 00500
                                    </p>
                                    <p className="text-black" aria-label="Email address">
                                        shahambulanceservice24x7@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="rounded-lg bg-orange-500 p-3" aria-hidden="true">
                                    <Home className="h-6 w-6 text-blue-900" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-900">Address</h3>
                                    <p
                                        className="text-black"
                                        aria-label="Company address"
                                    >
                                        Near Jaslok Hospital 15, Pedder Rd, IT Colony,
                                        <br />
                                        Tardeo Mumbai, Maharashtra 400026
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
