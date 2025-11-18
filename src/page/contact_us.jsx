// ContactUs.jsx
// Usage:
// - Place this file in a Vite + React project (src/components/ContactUs.jsx)
// - Ensure Tailwind CSS is installed and configured
// - Import and use <ContactUs /> in a route or page

import React, { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", honey: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message cannot be empty";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    setStatus(null);
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    // simple honeypot spam check
    if (form.honey) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      // Replace this with your API endpoint or service (Netlify forms, Formspree, Supabase, etc.)
      // Here we'll simulate a network request with a timeout
      await new Promise(r => setTimeout(r, 800));

      console.log("submit payload:", { name: form.name, email: form.email, subject: form.subject, message: form.message });
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", honey: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Contact info / map */}
        <aside className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Get in touch</h2>
            <p className="text-gray-600 mb-6">Have questions? We’re here to help — send us a message and we’ll get back within 24 hours.</p>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Email</h3>
                <a href="mailto:support@example.com" className="text-indigo-600">support@example.com</a>
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <a href="tel:+911234567890" className="text-indigo-600">+91 12345 67890</a>
              </div>

              <div>
                <h3 className="font-medium">Office</h3>
                <address className="not-italic text-gray-700">1 Example Lane, New Delhi, India</address>
              </div>
            </div>
          </div>

          {/* Small map — optional. You can replace the src with your Google Maps embed. */}
          <div className="mt-6">
            <iframe
              title="office-map"
              src="https://www.google.com/maps?q=delhi&output=embed"
              className="w-full h-48 rounded-lg border-0"
              loading="lazy"
            />
          </div>
        </aside>

        {/* Right: Form */}
        <main className="bg-white shadow-lg rounded-2xl p-8">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium">Full name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 ${errors.name ? 'ring-2 ring-red-200' : ''}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </label>

              <label className="block">
                <span className="text-sm font-medium">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 ${errors.email ? 'ring-2 ring-red-200' : ''}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </label>
            </div>

            <label className="block mt-4">
              <span className="text-sm font-medium">Subject</span>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                placeholder="Short summary"
              />
            </label>

            <label className="block mt-4">
              <span className="text-sm font-medium">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 ${errors.message ? 'ring-2 ring-red-200' : ''}`}
                placeholder="Tell us what's on your mind"
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </label>

            {/* Honeypot field for bots - hide from users */}
            <input
              name="honey"
              value={form.honey}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="mt-6 flex items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:opacity-60"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>

              {status === 'success' && <p className="text-green-600">Thanks — we received your message.</p>}
              {status === 'error' && <p className="text-red-600">Something went wrong. Try again later.</p>}
            </div>

            <p className="mt-4 text-sm text-gray-500">By sending, you agree to our terms. We respect your privacy.</p>
          </form>
        </main>
      </div>
    </div>
  );
}
