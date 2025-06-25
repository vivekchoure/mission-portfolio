import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_84s9y4f",      // ✅ Your service ID
        "template_s2esavn",     // ✅ Your template ID
        formRef.current,
        "3SXpeuAsqAev1jlPP"     // ✅ Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={sendEmail}
      className="bg-card p-8 rounded-xl shadow-lg space-y-6 text-sm md:text-base"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <label htmlFor="from_name" className="block text-light mb-2">
          Name
        </label>
        <input
          type="text"
          name="from_name"
          required
          className="w-full px-4 py-2 rounded-lg bg-background border border-light text-light focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>

      <div>
        <label htmlFor="reply_to" className="block text-light mb-2">
          Email
        </label>
        <input
          type="email"
          name="reply_to"
          required
          className="w-full px-4 py-2 rounded-lg bg-background border border-light text-light focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-light mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full px-4 py-2 rounded-lg bg-background border border-light text-light resize-none focus:outline-none focus:ring-2 focus:ring-secondary"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-primary transition duration-300"
      >
        Send Message
      </button>

      {success && (
        <p className="text-green-400 mt-3 text-sm">
          ✅ Message sent successfully!
        </p>
      )}
    </motion.form>
  );
};

export default ContactForm;
