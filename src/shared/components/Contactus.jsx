import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Contactus() {
    const [formData, setFormData] = useState({
        firstname: '',
        secondname: '',
        number: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleFileInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });
            const response = await fetch('https://icabcic.org/api/contactus.php', {
                method: 'POST',
                body: formDataToSend,
            });
            const result = await response.text();
            setStatus(result);
            if (response.ok) {
                toast.success("Message submitted successfully!");
                setFormData({
                    firstname: '',
                    secondname: '',
                    number: '',
                    email: '',
                    message: '',
                });
            } else {
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };
    return (
        <section className="bg-white text-[#1e1b4b] mt-10 py-20">
            <div className="container mx-auto px-4 md:px-12 lg:px-24">
                <div className="text-center mb-8 md:mb-16">
                    <div className="text-2xl md:text-3xl text-[#1e1b4b]  poppins-bold leading-tight mb-4">
                        Get In Touch
                    </div>
                    <p className="text-[#1e1b4b] text-lg  poppins-medium max-w-2xl mx-auto">
                        Have any questions or inquiries? Fill out the form below, and we'll get back to you as soon as possible.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-white p-8 border-2 border-[#1e1b4b] rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6" id="contactForm">
                            <div className="grid md:grid-cols-2 text-sm poppins-medium gap-6">
                                <div className="form-group  poppins-medium">
                                    <label htmlFor="firstname" className="block mb-2 text-lg ">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="firstname"
                                        required
                                        value={formData.firstname}
                                        onChange={handleFileInputChange}
                                        placeholder="Enter your first name"
                                        className="w-full p-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1b4b]"
                                        type="text"
                                        name="firstname"
                                    />
                                </div>
                                <div className="form-group  poppins-medium">
                                    <label htmlFor="secondname" className="block mb-2 text-lg ">
                                        Second Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="secondname"
                                        required
                                        value={formData.secondname}
                                        placeholder="Enter your last name"
                                        className="w-full p-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1b4b]"
                                        type="text"
                                        name="secondname"
                                        onChange={handleFileInputChange}

                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="form-group  poppins-medium">
                                    <label htmlFor="email" className="block mb-2 text-lg ">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        value={formData.email}
                                        placeholder="Enter Author's Email"
                                        className="w-full p-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1b4b]"
                                        type="text"
                                        name="email"
                                        onChange={handleFileInputChange}

                                    />
                                </div>
                                <div className=" text-sm poppins-medium ">
                                    <div className="form-group  poppins-medium">
                                        <label htmlFor="number" className="block mb-2 text-lg ">
                                            Phone <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="number"
                                            value={formData.number}
                                            required
                                            placeholder="Enter your phone number"
                                            className="w-full p-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1b4b]"
                                            type="tel"
                                            name="number"
                                            onChange={handleFileInputChange}

                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group  poppins-medium">
                                <label htmlFor="message" className="block mb-2 text-lg ">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    name="message"
                                    rows="4"
                                    placeholder="Type your message here..."
                                    onChange={handleFileInputChange}

                                    className="w-full p-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1b4b]"
                                ></textarea>
                            </div>
                            <div className="overflow-hidden w-fit rounded-lg">
                            <button
                                type="submit"
                                className="px-5 py-2 bg-[#1e1b4b] text-white leading-10 poppins-semibold cursor-pointer text-lg rounded-lg shadow-md hover:bg-yellow-500 transition-all transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                    {status === 'Sending...' ? 'Submitting...' : 'Send Message'}
                            </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white p-8 border-2 border-[#1e1b4b] rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl text-[#1e1b4b] poppins-bold mb-6">Contact Us</h3>
                        <p className="text-lg  poppins-medium text-[#1e1b4b] mb-4">
                            International Conference on Advances in Big Data, Cloud, and Intelligent Computing
                        </p>
                        <p className="text-lg  text-[#1e1b4b] poppins-medium mb-4">Venue: Benin, Nigeria</p>
                        {/* <p className="text-lg  text-[#1e1b4b] poppins-medium mb-4">
                            Mobile:{' '}
                            <a href="tel:+911234567890" className="text-blue-500 text-lg  hover:text-blue-400">
                                +91 10101 10101
                            </a>
                        </p> */}
                        <p className="text-lg  text-[#1e1b4b] poppins-medium mb-4">
                            Email:{' '}
                            <a href="mailto:conference@xyz.com" className="text-blue-500 hover:text-blue-400">
                                icabcic.org@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactus