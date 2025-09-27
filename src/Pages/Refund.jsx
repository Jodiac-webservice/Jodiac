import React from 'react';
import { RotateCcw, Shield, Clock, CheckCircle, XCircle, Truck, CreditCard } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-amber-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <RotateCcw className="mx-auto w-16 h-16 mb-6 text-amber-300" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Returns & Refunds
            </h1>
            <p className="text-xl font-light text-amber-200 max-w-2xl mx-auto">
              Your satisfaction guaranteed with our distinguished service promise
            </p>
            <div className="w-24 h-0.5 bg-amber-300 mx-auto mt-6"></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Satisfaction Guarantee */}
        <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-2xl p-12 mb-16 border border-amber-200">
          <div className="text-center mb-12">
            <Shield className="mx-auto w-16 h-16 mb-6 text-amber-700" />
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-4">
              Our Satisfaction Promise
            </h2>
            <p className="text-lg text-stone-700 font-light max-w-3xl mx-auto leading-relaxed">
              At JodiacxThreadora, your complete satisfaction is our foremost commitment. We understand that exceptional fashion requires exceptional service, which is why we've crafted a comprehensive return and refund policy that reflects our dedication to your contentment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg border border-amber-100">
              <Clock className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Generous Return Window</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p className="text-stone-700 font-light"><span className="font-semibold">30 Days</span> for returns and exchanges</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p className="text-stone-700 font-light"><span className="font-semibold">7 Days</span> for refund requests</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p className="text-stone-700 font-light">Calculated from delivery date</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg border border-amber-100">
              <Shield className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Quality Assurance</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p className="text-stone-700 font-light">Hassle-free return process</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p className="text-stone-700 font-light">Free pickup via ShipRocket</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p className="text-stone-700 font-light">Swift processing guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Can Be Returned */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Eligible Items */}
          <div className="bg-white rounded-xl shadow-xl p-10 border border-green-200">
            <div className="flex items-center mb-8">
              <CheckCircle className="w-10 h-10 text-green-600 mr-4" />
              <h3 className="text-2xl font-serif font-bold text-green-800">Eligible for Return</h3>
            </div>
            
            <div className="space-y-6">
              {[
                "Items with original tags attached",
                "Products in original packaging",
                "Unworn and unused garments",
                "Items without damage, stains, or odor",
                "Pieces that don't fit as expected",
                "Products received in error",
                "Items with manufacturing defects"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-stone-700 font-light">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Non-Eligible Items */}
          <div className="bg-white rounded-xl shadow-xl p-10 border border-red-200">
            <div className="flex items-center mb-8">
              <XCircle className="w-10 h-10 text-red-600 mr-4" />
              <h3 className="text-2xl font-serif font-bold text-red-800">Not Eligible for Return</h3>
            </div>
            
            <div className="space-y-6">
              {[
                "Undergarments and intimate wear",
                "Customized or personalized items",
                "Items that have been worn or washed",
                "Products without original tags",
                "Garments with perfume or makeup stains",
                "Items damaged by customer negligence",
                "Products returned after 30 days"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-stone-700 font-light">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Return Process */}
        <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-2xl p-12 mb-16 border border-amber-200">
          <h2 className="text-3xl font-serif font-bold text-amber-900 mb-12 text-center">
            Seamless Return Process
          </h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: 1, title: "Initiate Return", desc: "Contact our concierge or use online portal", icon: "📞" },
              { step: 2, title: "Authorization", desc: "Receive return approval number", icon: "✅" },
              { step: 3, title: "Packaging", desc: "Use original packaging when possible", icon: "📦" },
              { step: 4, title: "Pickup", desc: "Free collection via ShipRocket", icon: "🚚" },
              { step: 5, title: "Processing", desc: "Quality check and refund within 5-7 days", icon: "💳" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  {item.icon}
                </div>
                <div className="w-8 h-8 bg-amber-800 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3 mx-auto">
                  {item.step}
                </div>
                <h4 className="font-serif font-semibold text-stone-800 mb-2">{item.title}</h4>
                <p className="text-stone-600 font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Refund Methods */}
        <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-amber-50 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Refund Processing</h2>
          <p className="text-center text-xl font-light text-amber-200 mb-12 max-w-3xl mx-auto">
            All refunds are processed securely through RazorPay, ensuring swift and reliable transactions
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { method: "Credit/Debit Cards", time: "5-7 Business Days", icon: CreditCard },
              { method: "Net Banking", time: "3-5 Business Days", icon: CreditCard },
              { method: "UPI/Wallets", time: "1-3 Business Days", icon: CreditCard },
              { method: "Cash on Delivery", time: "Bank Transfer", icon: CreditCard }
            ].map((refund, index) => (
              <div key={index} className="bg-amber-800 bg-opacity-50 rounded-lg p-6 text-center">
                <refund.icon className="w-12 h-12 mx-auto mb-4 text-amber-300" />
                <h4 className="font-serif font-semibold text-lg mb-2">{refund.method}</h4>
                <p className="text-amber-200 font-light">{refund.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Exchange Policy */}
        <div className="bg-white rounded-xl shadow-2xl p-12 mb-16 border border-amber-200">
          <h2 className="text-3xl font-serif font-bold text-amber-900 mb-8 text-center">Exchange Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-stone-50 rounded-lg border border-amber-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-amber-900 mb-3">Size Exchange</h3>
              <p className="text-stone-700 font-light">Complimentary once per order for perfect fit</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-stone-50 rounded-lg border border-amber-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-amber-900 mb-3">Style Exchange</h3>
              <p className="text-stone-700 font-light">Subject to price difference and availability</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-stone-50 rounded-lg border border-amber-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-amber-900 mb-3">Color Exchange</h3>
              <p className="text-stone-700 font-light">Based on current stock availability</p>
            </div>
          </div>
        </div>

        {/* Damaged Items */}
        <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl p-12 mb-16 border border-red-200">
          <h2 className="text-3xl font-serif font-bold text-red-900 mb-8 text-center">
            Damaged or Defective Items
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-stone-700 font-light text-center mb-8 leading-relaxed">
              We take great pride in our quality control. However, should you receive a damaged or defective item, we are committed to making it right immediately.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-red-100">
                <h3 className="text-xl font-serif font-semibold text-red-800 mb-4">Immediate Actions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-stone-700 font-light">Report within 48 hours of delivery</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-stone-700 font-light">Provide clear photos of the damage</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-stone-700 font-light">No return shipping charges apply</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg border border-red-100">
                <h3 className="text-xl font-serif font-semibold text-red-800 mb-4">Our Resolution</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <RotateCcw className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-stone-700 font-light">Immediate replacement when possible</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-stone-700 font-light">Full refund if replacement unavailable</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Truck className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-stone-700 font-light">Express processing priority</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Returns */}
        <div className="bg-gradient-to-br from-stone-100 to-amber-100 rounded-xl p-12 text-center border border-amber-200">
          <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">
            Return Support
          </h2>
          <p className="text-lg text-stone-700 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Our dedicated returns team is here to assist you throughout the process. Contact us for personalized support.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-amber-100">
              <h4 className="font-serif font-semibold text-amber-900 mb-2">Returns Email</h4>
              <p className="text-stone-700 font-light">returns@jodiacxthreadora.com</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg border border-amber-100">
              <h4 className="font-serif font-semibold text-amber-900 mb-2">Support Phone</h4>
              <p className="text-stone-700 font-light">+91 9876543210</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg border border-amber-100">
              <h4 className="font-serif font-semibold text-amber-900 mb-2">Online Portal</h4>
              <p className="text-stone-700 font-light">Available in your account dashboard</p>
            </div>
          </div>
          
          <button className="px-8 py-4 bg-gradient-to-r from-amber-800 to-amber-900 text-amber-50 rounded-lg font-medium hover:from-amber-900 hover:to-amber-800 transition-all duration-300 shadow-lg">
            Initiate Return
          </button>
        </div>
      </div>
    </div>
  );
}