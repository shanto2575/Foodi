import React from "react";

export const metadata = {
    title: 'Contact Us',
    description: '...',
}
const ContactForm = () => {
    return (
        <div className="container mx-auto px-6 md:px-20 py-16">

            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">
                    Contact <span className="text-orange-500">Us</span>
                </h1>
                <p className="text-gray-600 mt-2">
                    Feel free to send us a message anytime 🚀
                </p>
            </div>

            <form className="max-w-2xl mx-auto  shadow-lg rounded-2xl p-8 space-y-5">

                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:border-orange-500"
                />


                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:border-orange-500"
                />

                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:border-orange-500"
                />

                <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:border-orange-500"
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition"
                >
                    Send Message
                </button>

            </form>
        </div>
    );
};

export default ContactForm;