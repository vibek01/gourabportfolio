import React from "react";
import { useForm, ValidationError } from "@formspree/react";
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
  // --- UPDATED HERE ---
  // Using your friend's new Formspree ID
  const [state, handleSubmit] = useForm("xvgqjzdq");

  // Muted colors for the social link buttons
  const socialLinks = [
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      color: "from-accent/30 to-primary/40",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      color: "from-accent/30 to-background/70",
    },
    {
      icon: <Youtube className="h-6 w-6" />,
      label: "YouTube",
      color: "from-background/70 to-accent/40",
    },
  ];

  // If the form was submitted successfully, show the enhanced thank you message
  if (state.succeeded) {
    return (
      <section
        className="py-20 px-6 bg-gradient-to-b from-background via-accent/10 to-background flex items-center justify-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="bg-ui-panel backdrop-blur-lg rounded-2xl p-8 border border-ui-border text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-4">Thank You!</h2>
          <p className="text-secondary text-lg mb-8">
            Your message has been sent successfully. I'll get back to you soon.
          </p>

          <h3 className="text-xl font-bold text-primary mb-6">
            While you wait, explore my profiles
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </section>
    );
  }

  // --- UPDATED HERE ---
  // Updated contact details and applied muted colors for the icons
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "gourabedu04@gmail.com",
      color: "from-accent/30 to-primary/40",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 60096 95970", // Updated Phone Number
      color: "from-primary/30 to-accent/40",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Tripura, India", // Updated Location
      color: "from-accent/30 to-background/70",
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
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-background/50 border border-ui-border rounded-lg text-primary placeholder-tertiary focus:outline-none focus:border-accent-light focus:bg-accent/20 hover:border-ui-borderHover transition-all duration-300"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-background/50 border border-ui-border rounded-lg text-primary placeholder-tertiary focus:outline-none focus:border-accent-light focus:bg-accent/20 hover:border-ui-borderHover transition-all duration-300"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <div>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-background/50 border border-ui-border rounded-lg text-primary placeholder-tertiary focus:outline-none focus:border-accent-light focus:bg-accent/20 hover:border-ui-borderHover transition-all duration-300"
                  required
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-4 py-3 bg-background/50 border border-ui-border rounded-lg text-primary placeholder-tertiary focus:outline-none focus:border-accent-light focus:bg-accent/20 hover:border-ui-borderHover transition-all duration-300 resize-none"
                  required
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-accent to-background border-2 border-accent rounded-lg text-primary font-semibold hover:from-background hover:to-accent hover:border-primary hover:shadow-accent transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center justify-center">
                  <Send className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  {state.submitting ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
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
