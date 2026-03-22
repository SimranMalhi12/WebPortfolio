import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call/email sending
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Left Side: Form */}
          <div className="w-full md:w-1/2 bg-[#f4f5f4] dark:bg-gray-800 p-8 md:p-10 rounded-3xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:border-[#5c7750] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:border-[#5c7750] transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:border-[#5c7750] transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:border-[#5c7750] transition-colors resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-[#5c7750] hover:bg-[#4a6340] dark:bg-[#6f8f61] dark:hover:bg-[#5c7750] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info */}
          <div className="w-full md:w-1/2 bg-[#f4f5f4] dark:bg-gray-800 p-8 md:p-10 rounded-3xl flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Contact Information
            </h3>

            <div className="space-y-4 flex-grow">
              {/* Email */}
              <div className="flex items-center gap-5 p-5 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center bg-[#e5e7e5] dark:bg-gray-700 rounded-2xl text-gray-600 dark:text-gray-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-0.5">Email</p>
                  <p className="text-base font-semibold text-gray-800 dark:text-gray-200">simranmalhi1612@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 p-5 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center bg-[#e5e7e5] dark:bg-gray-700 rounded-2xl text-gray-600 dark:text-gray-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-0.5">Phone</p>
                  <p className="text-base font-semibold text-gray-800 dark:text-gray-200">+91 7037025321</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 p-5 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center bg-[#e5e7e5] dark:bg-gray-700 rounded-2xl text-gray-600 dark:text-gray-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-0.5">Location</p>
                  <p className="text-base font-semibold text-gray-800 dark:text-gray-200">Phagwara, Punjab, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/SimranMalhi12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow-sm text-gray-700 dark:text-gray-300"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/simranjeet-kaur-6b1377289/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow-sm text-gray-700 dark:text-gray-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
