import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Linkedin,
  Youtube,
  PartyPopper,
} from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  // Your Formspree ID
  const [state, handleSubmit] = useForm("xvgqjzdq");

  const socialLinks = [
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      // --- UPDATED LINK ---
      url: "https://www.instagram.com/advibe.biz?igsh=MmFrb2Uwc3kxZXA4",
      color: "from-pink-500 to-yellow-500",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      // --- UPDATED LINK ---
      url: "https://www.linkedin.com/in/thisisgourab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Youtube className="h-6 w-6" />,
      label: "YouTube",
      // --- UPDATED LINK ---
      url: "http://www.youtube.com/@advibe.biz222",
      color: "from-red-500 to-rose-500",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "gourabedu04@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 60096 95970",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Tripura, India",
    },
  ];

  // --- SUCCESS STATE "THANK YOU" SCREEN ---
  if (state.succeeded) {
    return (
      <section
        className="py-20 px-6 bg-background flex items-center justify-center"
        style={{ minHeight: "80vh" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-ui-panel/50 backdrop-blur-lg rounded-2xl p-10 border border-accent text-center max-w-2xl mx-auto shadow-2xl shadow-accent/20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            className="flex justify-center mb-6"
          >
            <div className="bg-accent p-4 rounded-full">
              <PartyPopper className="h-10 w-10 text-background" />
            </div>
          </motion.div>
          <h2 className="text-4xl font-bold text-primary mb-4">Thank You!</h2>
          <p className="text-secondary text-lg mb-10">
            Your message has been sent successfully. I'll get back to you soon.
          </p>
          <h3 className="text-xl font-bold text-primary mb-6">
            While you wait, feel free to connect with me.
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className={`p-4 rounded-full bg-gradient-to-tr ${social.color} shadow-lg`}
                >
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    );
  }

  // --- MAIN CONTACT FORM ---
  return (
    <section className="relative py-20 px-6 bg-background text-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          Have a project in mind?
        </h2>
        <p className="text-center text-secondary text-lg mb-16 max-w-2xl mx-auto">
          Let's talk about it. I'm excited to hear your ideas.
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side: Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-ui-panel/50 backdrop-blur-lg p-8 rounded-2xl border border-ui-border transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/20">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="p-3 bg-ui-panel rounded-full border border-ui-border group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-secondary">{info.label}</p>
                      <p className="font-semibold text-primary">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-ui-panel/50 backdrop-blur-lg p-8 rounded-2xl border border-ui-border transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/20">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Follow Me
              </h3>
              <div className="flex justify-around">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div
                      className={`p-4 rounded-full bg-gradient-to-tr ${social.color} transition-all duration-300 transform group-hover:scale-125 group-hover:shadow-lg`}
                    >
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3 bg-ui-panel/50 backdrop-blur-lg p-8 rounded-2xl border border-ui-border transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-background/50 border border-ui-border rounded-lg focus:outline-none focus:border-accent transition-all duration-300 placeholder-tertiary"
                  required
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-background/50 border border-ui-border rounded-lg focus:outline-none focus:border-accent transition-all duration-300 placeholder-tertiary"
                  required
                />
              </div>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-background/50 border border-ui-border rounded-lg focus:outline-none focus:border-accent transition-all duration-300 placeholder-tertiary"
                required
              />
              <textarea
                id="message"
                name="message"
                placeholder="Your Message..."
                rows={5}
                className="w-full px-4 py-3 bg-background/50 border border-ui-border rounded-lg focus:outline-none focus:border-accent transition-all duration-300 resize-none placeholder-tertiary"
                required
              ></textarea>
              <ValidationError
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="group relative w-full flex justify-center items-center px-8 py-4 bg-accent rounded-lg text-background font-semibold overflow-hidden transition-all duration-300 hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center">
                  <Send className="mr-2 h-5 w-5" />
                  {state.submitting ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
