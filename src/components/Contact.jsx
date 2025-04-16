import React from "react";
import { FaGithub, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8 text-lg">
          Feel free to reach out to me on any platform below:
        </p>
        
        {/* Icons Section */}
        <div className="flex justify-center gap-6 text-4xl">
          {/* GitHub */}
          <a 
            href="https://github.com/mu1147-legend" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500"
          >
            <FaGithub />
          </a>

          {/* Facebook */}
          <a 
            href="https://facebook.com/fb.mohammadullah" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500"
          >
            <FaFacebook />
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/+8801734906838" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-green-500"
          >
            <FaWhatsapp />
          </a>

          {/* Email */}
          <a 
            href="mailto:ullahmohammad314@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-red-500"
          >
            <FaEnvelope />
          </a>
        </div>
        
        {/* Form Section (Optional) */}
        <form className="max-w-lg mx-auto mt-12">
          <input type="text" placeholder="Your Name" className="w-full p-4 mb-4 bg-gray-800 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-4 mb-4 bg-gray-800 rounded" />
          <textarea placeholder="Your Message" className="w-full p-4 mb-4 bg-gray-800 rounded" rows="5"></textarea>
          <button type="submit" className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
