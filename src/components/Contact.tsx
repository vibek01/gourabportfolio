import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "hello@gourab.dev",
      color: "from-accent to-primary",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 98765 43210",
      color: "from-primary to-accent",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Mumbai, India",
      color: "from-accent to-background",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      color: "from-accent to-primary",
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      label: "Twitter",
      color: "from-primary to-accent",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      color: "from-accent to-background",
    },
    {
      icon: <Youtube className="h-6 w-6" />,
      label: "YouTube",
      color: "from-background to-accent",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background via-accent/10 to-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-primary mb-8">
          Let's{" "}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent hover:from-primary hover:to-accent transition-all duration-500">
            Connect
          </span>
        </h2>

        <p className="text-center text-secondary text-xl mb-16 max-w-3xl mx-auto hover:text-primary transition-colors duration-500">
          Ready to create something amazing together? Let's discuss your project
          and bring your vision to life.
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-ui-panel backdrop-blur-lg rounded-2xl p-8 border border-ui-border hover:border-ui-borderHover hover:bg-ui-panelHover transition-all duration-500">
            <h3 className="text-2xl font-bold text-primary mb-8 hover:text-accent-light transition-colors duration-300">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-ui-border rounded-lg text-primary placeholder-tertiary focus:outline-none focus:border-accent-light focus:bg-accent/20 hover:border-ui-borderHover transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-ui-border rounded-lg text-primary placeholder-tertiary focus:outline-none focus:border-accent-light focus:bg-accent/20 hover:border-ui-borderHover transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background/50 border border-ui-border rounded-lg text-primary placeholder-tertiary focus:outline-none focus:border-accent-light focus:bg-accent/20 hover:border-ui-borderHover transition-all duration-300"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-background/50 border border-ui-border rounded-lg text-primary placeholder-tertiary focus:outline-none focus:border-accent-light focus:bg-accent/20 hover:border-ui-borderHover transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-accent to-background border-2 border-accent rounded-lg text-primary font-semibold hover:from-background hover:to-accent hover:border-primary hover:shadow-accent transition-all duration-500 transform hover:scale-105"
              >
                <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center justify-center">
                  <Send className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Send Message
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-ui-panel backdrop-blur-lg rounded-2xl p-8 border border-ui-border hover:border-ui-borderHover hover:bg-ui-panelHover transition-all duration-500">
              <h3 className="text-2xl font-bold text-primary mb-8 hover:text-accent-light transition-colors duration-300">
                Get in touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-125 hover:shadow-accent transition-all duration-300`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-tertiary text-sm group-hover:text-secondary transition-colors duration-300">
                        {info.label}
                      </p>
                      <p className="text-primary font-semibold group-hover:text-accent-light transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-ui-panel backdrop-blur-lg rounded-2xl p-8 border border-ui-border hover:border-ui-borderHover hover:bg-ui-panelHover transition-all duration-500">
              <h3 className="text-2xl font-bold text-primary mb-8 hover:text-accent-light transition-colors duration-300">
                Follow my journey
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className={`group relative p-4 bg-gradient-to-r ${social.color} rounded-lg hover:scale-110 hover:shadow-accent transition-all duration-300`}
                  >
                    <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center justify-center space-x-2 text-primary group-hover:text-background transition-colors duration-300">
                      {social.icon}
                      <span className="font-medium">{social.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-accent/20 to-background/50 backdrop-blur-lg rounded-2xl p-8 border border-accent/30 hover:border-accent/50 transition-all duration-500">
              <h4 className="text-xl font-bold text-primary mb-4 hover:text-accent-light transition-colors duration-300">
                Ready to go viral?
              </h4>
              <p className="text-secondary mb-6 hover:text-primary transition-colors duration-300">
                Let's create content that not only looks amazing but also drives
                real results for your brand or channel.
              </p>
              <div className="flex space-x-4">
                <span className="px-4 py-2 bg-accent/20 rounded-full text-accent-light text-sm font-medium hover:bg-accent/30 hover:text-primary transition-all duration-300">
                  Fast Turnaround
                </span>
                <span className="px-4 py-2 bg-primary/20 rounded-full text-secondary text-sm font-medium hover:bg-primary/30 hover:text-primary transition-all duration-300">
                  Unlimited Revisions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
