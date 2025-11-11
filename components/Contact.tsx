
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 sm:px-16">
        <div className="bg-gray-200 dark:bg-black-gradient p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2 text-gray-900 dark:text-white">Get in Touch</h2>
          <p className="text-lg text-center mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-secondary">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="mt-1 block w-full bg-white dark:bg-tertiary border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-3 px-4 text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-secondary">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="mt-1 block w-full bg-white dark:bg-tertiary border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-3 px-4 text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-secondary">Your Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="mt-1 block w-full bg-white dark:bg-tertiary border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-3 px-4 text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
   