import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'hello@gourab.dev',
      color: 'from-red-500 to-white'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '+91 98765 43210',
      color: 'from-white to-red-500'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Location',
      value: 'Mumbai, India',
      color: 'from-red-500 to-black'
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="h-6 w-6" />, label: 'Instagram', color: 'from-red-500 to-white' },
    { icon: <Twitter className="h-6 w-6" />, label: 'Twitter', color: 'from-white to-red-500' },
    { icon: <Linkedin className="h-6 w-6" />, label: 'LinkedIn', color: 'from-red-500 to-black' },
    { icon: <Youtube className="h-6 w-6" />, label: 'YouTube', color: 'from-black to-red-500' }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-red-900/10 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-8">
          Let's <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent hover:from-white hover:to-red-500 transition-all duration-500">Connect</span>
        </h2>
        
        <p className="text-center text-gray-300 text-xl mb-16 max-w-3xl mx-auto hover:text-white transition-colors duration-500">
          Ready to create something amazing together? Let's discuss your project and bring your vision to life.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-red-500/20 hover:border-red-400/50 hover:bg-red-900/10 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-8 hover:text-red-300 transition-colors duration-300">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:bg-red-900/20 hover:border-red-400/50 transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:bg-red-900/20 hover:border-red-400/50 transition-all duration-300"
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
                  className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:bg-red-900/20 hover:border-red-400/50 transition-all duration-300"
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
                  className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:bg-red-900/20 hover:border-red-400/50 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="group w-full px-8 py-4 bg-gradient-to-r from-red-500 to-black border-2 border-red-500 rounded-lg text-white font-semibold hover:from-black hover:to-red-500 hover:border-white hover:shadow-lg hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-105"
              >
                <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
            <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-red-500/20 hover:border-red-400/50 hover:bg-red-900/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-8 hover:text-red-300 transition-colors duration-300">Get in touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-125 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{info.label}</p>
                      <p className="text-white font-semibold group-hover:text-red-300 transition-colors duration-300">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-red-500/20 hover:border-red-400/50 hover:bg-red-900/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-8 hover:text-red-300 transition-colors duration-300">Follow my journey</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className={`group p-4 bg-gradient-to-r ${social.color} rounded-lg hover:scale-110 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300`}
                  >
                    <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center justify-center space-x-2 text-white group-hover:text-black transition-colors duration-300">
                      {social.icon}
                      <span className="font-medium">{social.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-r from-red-500/20 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-red-400/30 hover:border-red-400/50 transition-all duration-500">
              <h4 className="text-xl font-bold text-white mb-4 hover:text-red-300 transition-colors duration-300">Ready to go viral?</h4>
              <p className="text-gray-300 mb-6 hover:text-white transition-colors duration-300">
                Let's create content that not only looks amazing but also drives real results for your brand or channel.
              </p>
              <div className="flex space-x-4">
                <span className="px-4 py-2 bg-red-400/20 rounded-full text-red-300 text-sm font-medium hover:bg-red-400/30 hover:text-white transition-all duration-300">
                  Fast Turnaround
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-gray-300 text-sm font-medium hover:bg-white/30 hover:text-white transition-all duration-300">
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