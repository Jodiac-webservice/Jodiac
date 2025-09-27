import React from 'react';
import { Shield, Eye, Lock, Users, Database, Settings, AlertTriangle, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-amber-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <Shield className="mx-auto w-16 h-16 mb-6 text-amber-300" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl font-light text-amber-200 max-w-2xl mx-auto">
              Your privacy is our sacred trust
            </p>
            <div className="w-24 h-0.5 bg-amber-300 mx-auto mt-6"></div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Policy Header */}
        <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-2xl p-12 mb-16 border border-amber-200">
          <div className="text-center mb-8">
            <p className="text-stone-600 font-light mb-4">
              <span className="font-semibold">Effective Date:</span> January 1, 2024 | 
              <span className="font-semibold ml-2">Last Updated:</span> January 1, 2024
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-stone-700 font-light leading-relaxed mb-6">
              <span className="font-semibold text-amber-800">JodiacxThreadora Fashion Pvt. Ltd.</span> ("we," "our," or "us") holds your privacy in the highest regard and is steadfastly committed to protecting your personal information with the utmost care and discretion.
            </p>
            <p className="text-lg text-stone-700 font-light leading-relaxed">
              This Privacy Policy outlines our practices regarding the collection, use, and safeguarding of your personal information when you engage with our distinguished services and exceptional products.
            </p>
          </div>
        </div>

        {/* Information Collection */}
        <div className="bg-white rounded-xl shadow-xl p-12 mb-12 border border-amber-200">
          <div className="flex items-center mb-8">
            <Database className="w-10 h-10 text-amber-700 mr-4" />
            <h2 className="text-3xl font-serif font-bold text-amber-900">Information We Collect</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Personal Info */}
            <div>
              <h3 className="text-xl font-serif font-semibold text-amber-800 mb-6">Personal Information</h3>
              <div className="space-y-4">
                {[
                  "Name, email address, and phone number",
                  "Shipping and billing addresses",
                  "Payment information (secured via RazorPay)",
                  "Account preferences and purchase history",
                  "Size preferences and style interests",
                  "Customer service communications"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-stone-700 font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Auto Info */}
            <div>
              <h3 className="text-xl font-serif font-semibold text-amber-800 mb-6">Automatic Information</h3>
              <div className="space-y-4">
                {[
                  "IP address, browser type, and device information",
                  "Website usage patterns and preferences",
                  "Cookies and similar tracking technologies",
                  "Geographic location data",
                  "Shopping behavior and product interactions",
                  "Social media engagement metrics"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-stone-700 font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        {/* ... (rest of your sections remain the same) ... */}

        {/* Updates & Contact */}
        <div className="bg-white rounded-xl shadow-2xl p-12 border border-amber-200">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">
              Policy Updates & Contact
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-serif font-semibold text-amber-800 mb-4">Policy Updates</h3>
                <p className="text-stone-700 font-light leading-relaxed mb-4">
                  We may periodically update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of any material changes through email or website notifications.
                </p>
                <p className="text-stone-600 font-light text-sm">
                  Continued use of our services after updates constitutes acceptance of the revised policy.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-serif font-semibold text-amber-800 mb-4">Contact Information</h3>
                <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-lg p-6 border border-amber-100">
                  <div className="space-y-3 text-left">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2.5 flex-shrink-0"></div>
                      <p className="text-stone-700 font-light"><span className="font-semibold">Privacy Email:</span> privacy@jodiacxthreadora.com</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2.5 flex-shrink-0"></div>
                      <p className="text-stone-700 font-light"><span className="font-semibold">Address:</span> 123 Fashion Street, Mumbai, Maharashtra - 400001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-amber-100 to-stone-100 rounded-lg p-8 border border-amber-200">
              <h3 className="text-xl font-serif font-semibold text-amber-900 mb-4">
                Children's Privacy Protection
              </h3>
              <p className="text-stone-700 font-light leading-relaxed">
                We do not knowingly collect personal information from children under 13 years of age. If you believe we have inadvertently collected such information, please contact us immediately for prompt removal.
              </p>
            </div>
            
            <div className="mt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-800 to-amber-900 text-amber-50 rounded-lg font-medium hover:from-amber-900 hover:to-amber-800 transition-all duration-300 shadow-lg">
                Contact Privacy Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
