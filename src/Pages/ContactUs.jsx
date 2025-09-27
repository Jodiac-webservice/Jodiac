import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Users, Briefcase, Instagram, Facebook, Twitter } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-amber-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <MessageCircle className="mx-auto w-16 h-16 mb-6 text-amber-300" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Contact Our Concierge
            </h1>
            <p className="text-xl font-light text-amber-200 max-w-2xl mx-auto">
              Distinguished service awaits your inquiry
            </p>
            <div className="w-24 h-0.5 bg-amber-300 mx-auto mt-6"></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-xl p-8 border border-amber-100 hover:shadow-2xl transition-all duration-300">
            <Phone className="w-12 h-12 text-amber-700 mb-4" />
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">Direct Line</h3>
            <p className="text-stone-600 font-light mb-4">Speak with our specialists</p>
            <p className="text-amber-800 font-semibold">+91 9876543210</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8 border border-amber-100 hover:shadow-2xl transition-all duration-300">
            <Mail className="w-12 h-12 text-amber-700 mb-4" />
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">Email Concierge</h3>
            <p className="text-stone-600 font-light mb-4">Written correspondence</p>
            <p className="text-amber-800 font-semibold text-sm">support@jodiacxthreadora.com</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8 border border-amber-100 hover:shadow-2xl transition-all duration-300">
            <Clock className="w-12 h-12 text-amber-700 mb-4" />
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">Business Hours</h3>
            <p className="text-stone-600 font-light mb-4">Monday - Saturday</p>
            <p className="text-amber-800 font-semibold">10:00 AM - 7:00 PM IST</p>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-2xl p-12 border border-amber-200">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-8">
              Send Us a Message
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white"
                  placeholder="+91 9876543210"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white">
                  <option>Select a topic</option>
                  <option>Order Inquiry</option>
                  <option>Product Information</option>
                  <option>Returns & Exchanges</option>
                  <option>Partnership Opportunity</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white resize-none"
                  placeholder="Please share your message with us..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-amber-800 to-amber-900 text-amber-50 rounded-lg font-medium hover:from-amber-900 hover:to-amber-800 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Customer Support */}
            <div className="bg-white rounded-lg shadow-xl p-8 border border-amber-100">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-amber-700 mr-4" />
                <h3 className="text-2xl font-serif font-bold text-amber-900">Customer Support</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-medium text-stone-800">Email</p>
                    <p className="text-stone-600 font-light">support@jodiacxthreadora.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-medium text-stone-800">Phone</p>
                    <p className="text-stone-600 font-light">+91 9876543210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-medium text-stone-800">WhatsApp</p>
                    <p className="text-stone-600 font-light">+91 9876543210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Inquiries */}
            <div className="bg-white rounded-lg shadow-xl p-8 border border-amber-100">
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 text-amber-700 mr-4" />
                <h3 className="text-2xl font-serif font-bold text-amber-900">Business Inquiries</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-medium text-stone-800">General Business</p>
                    <p className="text-stone-600 font-light">business@jodiacxthreadora.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-medium text-stone-800">Partnerships</p>
                    <p className="text-stone-600 font-light">partnerships@jodiacxthreadora.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Head Office */}
            <div className="bg-white rounded-lg shadow-xl p-8 border border-amber-100">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-amber-700 mr-4" />
                <h3 className="text-2xl font-serif font-bold text-amber-900">Head Office</h3>
              </div>
              <div className="text-stone-700 font-light leading-relaxed">
                <p className="font-medium text-stone-800 mb-2">JodiacxThreadora Fashion Pvt. Ltd.</p>
                <p>123 Fashion Street</p>
                <p>Garment District</p>
                <p>Mumbai, Maharashtra - 400001</p>
                <p className="mt-2 text-amber-800 font-medium">India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Additional Info */}
        <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-amber-50 rounded-xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Connect With Our Community</h2>
            <p className="text-xl font-light text-amber-200 max-w-3xl mx-auto">
              Follow our journey and join our distinguished community across social platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Instagram className="w-12 h-12 mx-auto mb-4 text-amber-300" />
              <h4 className="font-serif font-semibold text-lg mb-2">Instagram</h4>
              <p className="text-amber-200 font-light">@jodiacxthreadora</p>
              <p className="text-sm text-amber-300 mt-2">Daily style inspiration & behind-the-scenes</p>
            </div>
            
            <div className="text-center">
              <Facebook className="w-12 h-12 mx-auto mb-4 text-amber-300" />
              <h4 className="font-serif font-semibold text-lg mb-2">Facebook</h4>
              <p className="text-amber-200 font-light">/jodiacxthreadora</p>
              <p className="text-sm text-amber-300 mt-2">Community updates & exclusive previews</p>
            </div>
            
            <div className="text-center">
              <Twitter className="w-12 h-12 mx-auto mb-4 text-amber-300" />
              <h4 className="font-serif font-semibold text-lg mb-2">Twitter</h4>
              <p className="text-amber-200 font-light">@jodiacxthreadora</p>
              <p className="text-sm text-amber-300 mt-2">Fashion insights & industry news</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-serif font-semibold mb-4">Response Commitment</h3>
            <p className="text-lg font-light text-amber-200 max-w-2xl mx-auto mb-8">
              We pledge to respond to all inquiries within 24 hours during business days. Your satisfaction is our utmost priority.
            </p>
            
            <div className="bg-amber-800 bg-opacity-50 rounded-lg p-8 max-w-4xl mx-auto">
              <h4 className="text-xl font-serif font-semibold mb-4">Frequently Asked Questions</h4>
              <p className="font-light leading-relaxed">
                Before reaching out, we encourage you to visit our comprehensive FAQ section for immediate answers to common inquiries about orders, sizing, returns, and more. This resource has been carefully curated to address the most frequent questions from our esteemed clientele.
              </p>
              <button className="mt-6 px-8 py-3 bg-amber-50 text-amber-900 rounded-lg font-medium hover:bg-white transition-all duration-300">
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}