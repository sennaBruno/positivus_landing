'use client';

import { colors, typography } from '@/styles/typography';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const ContactUs = () => {
  const [contactType, setContactType] = useState<'sayHi' | 'getQuote'>('sayHi');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleContactTypeChange = (type: 'sayHi' | 'getQuote') => {
    setContactType(type);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className={`w-full ${colors.bgWhite} px-6 py-16 md:px-16 lg:px-20 overflow-hidden`}>
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <SectionTitle
          title="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
          className="mb-16"
        />

        {/* Contact Form and Illustration */}
        <div className={`rounded-3xl ${colors.bgGray} p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 relative overflow-hidden`}>
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            {/* Contact Type Selection */}
            <div className="flex gap-6 mb-8">
              <button
                onClick={() => handleContactTypeChange('sayHi')}
                className="flex items-center gap-3 focus:outline-none cursor-pointer"
                tabIndex={0}
                aria-label="Say Hi option"
              >
                <div className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center ${contactType === 'sayHi' ? 'bg-white' : 'bg-transparent'}`}>
                  {contactType === 'sayHi' && <div className="w-3 h-3 rounded-full bg-black"></div>}
                </div>
                <span className={`${typography.p} ${colors.dark}`}>Say Hi</span>
              </button>

              <button
                onClick={() => handleContactTypeChange('getQuote')}
                className="flex items-center gap-3 focus:outline-none cursor-pointer"
                tabIndex={0}
                aria-label="Get a Quote option"
              >
                <div className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center ${contactType === 'getQuote' ? 'bg-white' : 'bg-transparent'}`}>
                  {contactType === 'getQuote' && <div className="w-3 h-3 rounded-full bg-black"></div>}
                </div>
                <span className={`${typography.p} ${colors.dark}`}>Get a Quote</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className={`${typography.p} ${colors.dark}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full p-4 rounded-[14px] border border-black bg-white focus:outline-none focus:ring-1 focus:ring-gray-800"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className={`${typography.p} ${colors.dark}`}>
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full p-4 rounded-[14px] border border-black bg-white focus:outline-none focus:ring-1 focus:ring-gray-800"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className={`${typography.p} ${colors.dark}`}>
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required
                    rows={4}
                    className="w-full p-4 rounded-[14px] border border-black bg-white focus:outline-none focus:ring-1 focus:ring-gray-800 resize-none"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button variant="primary" fullWidth className="mt-4">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Illustration */}
          <div className="hidden lg:block lg:w-1/2 absolute right-0 top-0 h-full overflow-hidden">
            <div className="relative w-[691px] h-[648px] transform translate-x-2/6">
              <Image
                src="/Illustration (6).svg"
                alt="Contact illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 