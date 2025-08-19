// src/components/ContactPage/contactPage.js
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: null, msg: "" });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const f = form.current;
    const name = f["your_name"]?.value?.trim();
    const email = f["your_email"]?.value?.trim();
    const message = f["message"]?.value?.trim();
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || name.length < 2) return "Please enter your name.";
    if (!emailRx.test(email)) return "Please enter a valid email.";
    if (!message || message.length < 10)
      return "Message should be at least 10 characters.";
    return null;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: null, msg: "" });

    const err = validate();
    if (err) return setStatus({ type: "error", msg: err });

    setLoading(true);
    emailjs
      .sendForm(
        "service_8aeu0hk",
        "template_zwp4fas",
        form.current,
        "OR_Nxx_yVNj9udReW"
      )
      .then(() => {
        form.current.reset();
        setStatus({ type: "success", msg: "Your message has been sent." });
      })
      .catch((error) => {
        console.error(error);
        setStatus({
          type: "error",
          msg: "Sorry, something went wrong. Please try again.",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contactPage" className="bg-[#001f3f] text-cyan-300 py-16">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Contact Me
        </h2>

        {/* Top info line */}
        <div className="mt-4 text-center text-lg text-cyan-300">
          <div>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:rahman4n@uwindsor.ca"
              className="text-cyan-400 hover:underline"
            >
              rahman4n@uwindsor.ca
            </a>{" "}
            <span className="mx-2 text-cyan-600">||</span>
            <span className="font-semibold">Phone:</span>{" "}
            <a href="tel:12267590055" className="text-cyan-400 hover:underline">
              226-759-0055
            </a>
          </div>
        </div>

        {/* Status banner */}
        {status.type && (
          <div
            role="status"
            aria-live="polite"
            className={`mt-6 w-full rounded-md border px-4 py-3 text-center ${
              status.type === "success"
                ? "bg-cyan-900/60 border-cyan-500 text-cyan-200"
                : "bg-red-900/60 border-red-500 text-red-200"
            }`}
          >
            {status.msg}
          </div>
        )}

        {/* Form card */}
        <form
          ref={form}
          onSubmit={sendEmail}
          noValidate
          className="mt-8 grid grid-cols-1 gap-4 rounded-xl border border-cyan-700 bg-[#001f3f] p-6 shadow-lg md:grid-cols-2"
        >
          <div className="flex flex-col">
            <label htmlFor="your_name" className="mb-1 text-sm text-cyan-400">
              Name
            </label>
            <input
              id="your_name"
              name="your_name"
              type="text"
              placeholder="Your Name *"
              required
              className="rounded-lg border border-cyan-700 bg-[#001f3f] px-4 py-3 text-cyan-200 placeholder-cyan-600 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="your_email" className="mb-1 text-sm text-cyan-400">
              Email
            </label>
            <input
              id="your_email"
              name="your_email"
              type="email"
              placeholder="your@email.com *"
              required
              className="rounded-lg border border-cyan-700 bg-[#001f3f] px-4 py-3 text-cyan-200 placeholder-cyan-600 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Phone (optional) */}
          <div className="flex flex-col">
            <label htmlFor="your_phone" className="mb-1 text-sm text-cyan-400">
              Phone (optional)
            </label>
            <input
              id="your_phone"
              name="your_phone"
              type="tel"
              placeholder="Your Phone"
              className="rounded-lg border border-cyan-700 bg-[#001f3f] px-4 py-3 text-cyan-200 placeholder-cyan-600 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-1 md:row-span-3">
            <label htmlFor="message" className="mb-1 text-sm text-cyan-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Your message *"
              required
              className="h-full rounded-lg border border-cyan-700 bg-[#001f3f] px-4 py-3 text-cyan-200 placeholder-cyan-600 outline-none focus:ring-2 focus:ring-cyan-500 md:row-span-3"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-cyan-500 px-8 py-4 text-lg font-semibold text-black shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
