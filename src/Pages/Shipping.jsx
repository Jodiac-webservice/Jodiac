import React from 'react';
import { Truck, Clock, Shield, MapPin, Package, CheckCircle } from 'lucide-react';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-amber-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <Truck className="mx-auto w-16 h-16 mb-6 text-amber-300" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Shipping & Delivery
            </h1>
            <p className="text-xl font-light text-amber-200 max-w-2xl mx-auto">
              Your exquisite purchases, delivered with the care they deserve
            </p>
            <div className="w-24 h-0.5 bg-amber-300 mx-auto mt-6"></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-xl p-8 border border-amber-100">
            <Clock className="w-12 h-12 text-amber-700 mb-4" />
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">Swift Processing</h3>
            <p className="text-stone-600 font-light">Your orders are carefully prepared within 1-2 business days</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8 border border-amber-100">
            <Shield className="w-12 h-12 text-amber-700 mb-4" />
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">Secure Transit</h3>
            <p className="text-stone-600 font-light">Partnership with ShipRocket ensures safe, reliable delivery</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8 border border-amber-100">
            <MapPin className="w-12 h-12 text-amber-700 mb-4" />
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">Pan-India Reach</h3>
            <p className="text-stone-600 font-light">Serving distinguished clientele across the nation</p>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-2xl p-12 mb-16 border border-amber-200">
          <h2 className="text-3xl font-serif font-bold text-amber-900 mb-8 text-center">
            Delivery Information
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-serif font-semibold text-amber-800 mb-6 flex items-center">
                <Package className="w-6 h-6 mr-3" />
                Processing & Dispatch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-800 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Order Confirmation</h4>
                    <p className="text-stone-600 font-light text-sm">Immediate acknowledgment via email and SMS</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-800 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Quality Assurance</h4>
                    <p className="text-stone-600 font-light text-sm">Meticulous inspection and elegant packaging</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-800 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Dispatch</h4>
                    <p className="text-stone-600 font-light text-sm">Handover to ShipRocket within 1-2 business days</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-semibold text-amber-800 mb-6 flex items-center">
                <Truck className="w-6 h-6 mr-3" />
                Delivery Timeline
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-amber-100">
                  <h4 className="font-semibold text-stone-800 mb-2">Metropolitan Cities</h4>
                  <p className="text-amber-700 font-medium">3-5 Business Days</p>
                  <p className="text-stone-600 font-light text-sm">Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-amber-100">
                  <h4 className="font-semibold text-stone-800 mb-2">Tier II Cities</h4>
                  <p className="text-amber-700 font-medium">4-6 Business Days</p>
                  <p className="text-stone-600 font-light text-sm">Pune, Ahmedabad, Jaipur, Lucknow, Chandigarh</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-amber-100">
                  <h4 className="font-semibold text-stone-800 mb-2">Other Locations</h4>
                  <p className="text-amber-700 font-medium">5-7 Business Days</p>
                  <p className="text-stone-600 font-light text-sm">Tier III cities and selected rural areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Charges */}
        <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-amber-50 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Shipping Investment</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">FREE</div>
              <div className="text-amber-200 font-light mb-4">Orders above ₹999</div>
              <p className="text-sm font-light">Complimentary shipping for our valued patrons</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">₹99</div>
              <div className="text-amber-200 font-light mb-4">Standard Delivery</div>
              <p className="text-sm font-light">For orders below ₹999</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">₹199</div>
              <div className="text-amber-200 font-light mb-4">Express Service</div>
              <p className="text-sm font-light">Priority delivery in metro cities (1-3 days)</p>
            </div>
          </div>
        </div>

        {/* Tracking */}
        <div className="bg-white rounded-xl shadow-2xl p-12 mb-16 border border-amber-200">
          <h2 className="text-3xl font-serif font-bold text-amber-900 mb-8 text-center">
            Order Tracking Excellence
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-stone-700 font-light text-center mb-12">
              Stay informed throughout your order's journey with our comprehensive tracking system powered by ShipRocket.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: CheckCircle, title: "Order Confirmed", desc: "Immediate confirmation with order details" },
                { icon: Package, title: "Being Prepared", desc: "Quality check and elegant packaging in progress" },
                { icon: Truck, title: "In Transit", desc: "On its way via ShipRocket with live tracking" },
                { icon: MapPin, title: "Out for Delivery", desc: "Final mile delivery with delivery window notification" },
                { icon: CheckCircle, title: "Delivered", desc: "Confirmation of successful delivery to your address" }
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-6 p-4 rounded-lg hover:bg-amber-50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-amber-800" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-stone-800">{step.title}</h3>
                    <p className="text-stone-600 font-light text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Circumstances */}
        <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-xl p-12 border border-amber-200">
          <h2 className="text-3xl font-serif font-bold text-amber-900 mb-8 text-center">
            Important Considerations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border border-amber-100">
              <h3 className="text-xl font-serif font-semibold text-amber-800 mb-4">Peak Seasons</h3>
              <p className="text-stone-700 font-light leading-relaxed">
                During festive periods and exclusive sales, delivery may require an additional 1-2 business days to maintain our quality standards.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg border border-amber-100">
              <h3 className="text-xl font-serif font-semibold text-amber-800 mb-4">Remote Areas</h3>
              <p className="text-stone-700 font-light leading-relaxed">
                Deliveries to remote locations may require 2-3 additional days. We ensure your order reaches you regardless of location.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-stone-700 font-light mb-6">
              For any shipping inquiries, our dedicated customer service team is at your disposal.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-amber-800 to-amber-900 text-amber-50 rounded-lg font-medium hover:from-amber-900 hover:to-amber-800 transition-all duration-300 shadow-lg">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}