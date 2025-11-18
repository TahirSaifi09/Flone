// GetInTouch.jsx
// Clean, modern Get in Touch page for Vite + React + Tailwind

import React, { useState } from "react";

export default function GetInTouch() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", honey: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message required";
    return e;
  };

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    if (form.honey) return setStatus("error");

    setStatus("sending");
    await new Promise(r => setTimeout(r, 700));
    setStatus("success");
    setForm({ name: "", email: "", phone: "", message: "", honey: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 flex items-center justify-center py-16 px-6">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-3xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Have a question, feedback, or work inquiry? Send a message and we'll reply as soon as possible.
          </p>

          <div className="space-y-4 pt-4">
            <div>
              <p className="text-sm font-medium text-gray-700">Email</p>
              <p className="text-indigo-600 font-semibold">support@example.com</p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700">Phone</p>
              <p className="text-indigo-600 font-semibold">+91 98765 43210</p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700">Office</p>
              <p className="text-gray-700">New Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Right section (form) */}
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Full Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`mt-2 block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm shadow-sm focus:bg-white focus:ring-2 focus:ring-indigo-400 ${errors.name ? 'border-red-400 ring-2 ring-red-200' : ''}`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-2 block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm shadow-sm focus:bg-white focus:ring-2 focus:ring-indigo-400 ${errors.email ? 'border-red-400 ring-2 ring-red-200' : ''}`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Phone (optional)</span>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm shadow-sm focus:bg-white focus:ring-2 focus:ring-indigo-400"
              placeholder="Your phone number"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className={`mt-2 block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm shadow-sm focus:bg-white focus:ring-2 focus:ring-indigo-400 ${errors.message ? 'border-red-400 ring-2 ring-red-200' : ''}`}
              placeholder="Write your message here"
            />
            {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
          </label>

          <input name="honey" value={form.honey} onChange={handleChange} className="hidden" />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition disabled:opacity-60"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && <p className="text-green-600 text-sm font-medium text-center">Message sent successfully.</p>}
          {status === "error" && <p className="text-red-600 text-sm font-medium text-center">Something went wrong. Try again.</p>}
        </form>
      </div>
    </div>
  );
}
