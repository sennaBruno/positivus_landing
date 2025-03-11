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
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleContactTypeChange = (type: 'sayHi' | 'getQuote') => {
    setContactType(type);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    // Name validation (required if getting a quote)
    if (contactType === 'getQuote' && !formData.name.trim()) {
      newErrors.name = 'Name is required for quotes';
      valid = false;
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', { ...formData, contactType });

      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
      setSubmitSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`w-full ${colors.bgWhite} px-6 py-16 md:px-16 lg:px-20 overflow-hidden`} id="contact">
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
            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-6 p-4 rounded-lg bg-green text-dark font-medium">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {/* Contact Type Selection */}
            <div className="flex gap-6 mb-8">
              <button
                onClick={() => handleContactTypeChange('sayHi')}
                className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-black rounded-md cursor-pointer"
                tabIndex={0}
                aria-label="Say Hi option"
                type="button"
              >
                <div className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center ${contactType === 'sayHi' ? 'bg-white' : 'bg-transparent'}`}>
                  {contactType === 'sayHi' && <div className="w-3 h-3 rounded-full bg-black"></div>}
                </div>
                <span className={`${typography.p} ${colors.dark}`}>Say Hi</span>
              </button>

              <button
                onClick={() => handleContactTypeChange('getQuote')}
                className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-black rounded-md cursor-pointer"
                tabIndex={0}
                aria-label="Get a Quote option"
                type="button"
              >
                <div className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center ${contactType === 'getQuote' ? 'bg-white' : 'bg-transparent'}`}>
                  {contactType === 'getQuote' && <div className="w-3 h-3 rounded-full bg-black"></div>}
                </div>
                <span className={`${typography.p} ${colors.dark}`}>Get a Quote</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} aria-label="Contact form" suppressHydrationWarning>
              <div className="flex flex-col gap-6">
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className={`${typography.p} ${colors.dark} flex items-center`}>
                    Name {contactType === 'getQuote' && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className={`w-full p-4 rounded-[14px] border ${errors.name ? 'border-red-500' : 'border-black'} bg-white focus:outline-none focus:ring-1 focus:ring-gray-800`}
                    value={formData.name}
                    onChange={handleInputChange}
                    required={contactType === 'getQuote'}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    suppressHydrationWarning
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className={`${typography.p} ${colors.dark} flex items-center`}>
                    Email<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    required
                    className={`w-full p-4 rounded-[14px] border ${errors.email ? 'border-red-500' : 'border-black'} bg-white focus:outline-none focus:ring-1 focus:ring-gray-800`}
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    suppressHydrationWarning
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className={`${typography.p} ${colors.dark} flex items-center`}>
                    Message<span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    required
                    rows={4}
                    className={`w-full p-4 rounded-[14px] border ${errors.message ? 'border-red-500' : 'border-black'} bg-white focus:outline-none focus:ring-1 focus:ring-gray-800 resize-none`}
                    value={formData.message}
                    onChange={handleInputChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    suppressHydrationWarning
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  variant="primary"
                  fullWidth
                  className="mt-4"
                  type="submit"
                  disabled={isSubmitting}
                  suppressHydrationWarning
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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