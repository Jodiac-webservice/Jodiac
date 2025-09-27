import React from 'react';
import { Crown, Star, Shield, Users } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-amber-50">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="text-center">
            <Crown className="mx-auto w-16 h-16 mb-6 text-amber-300" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-wide">
              JodiacxThreadora
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-widest mb-8 text-amber-200">
              Where Fashion Meets Legacy
            </p>
            <div className="w-32 h-0.5 bg-amber-300 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-amber-900 mb-8 text-center">
            Our Distinguished Heritage
          </h2>
          <div className="bg-white rounded-lg shadow-2xl p-12 border border-amber-200">
            <p className="text-lg text-stone-700 leading-relaxed mb-6 font-light">
              Welcome to <span className="font-semibold text-amber-800">JodiacxThreadora</span> – where fashion transcends mere clothing to become a statement of refined taste and enduring elegance.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6 font-light">
              Born from a heritage of exceptional craftsmanship and an unwavering commitment to sartorial excellence, JodiacxThreadora represents more than a fashion brand; we are custodians of timeless style and curators of distinction.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed font-light">
              Our journey began with a profound belief: that true luxury lies not in ostentation, but in the quiet confidence that comes from wearing pieces that speak to one's discerning taste and appreciation for the finer things in life.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-amber-50 to-stone-50 p-10 rounded-lg shadow-xl border border-amber-100">
            <Star className="w-12 h-12 text-amber-700 mb-6" />
            <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">Exclusive Designs</h3>
            <p className="text-stone-700 leading-relaxed font-light">
              Our collections feature meticulously crafted pieces that embody sophistication and exclusivity. Each design reflects our commitment to creating fashion that stands apart from the ephemeral trends of contemporary commerce.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-stone-50 p-10 rounded-lg shadow-xl border border-amber-100">
            <Shield className="w-12 h-12 text-amber-700 mb-6" />
            <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">Uncompromising Quality</h3>
            <p className="text-stone-700 leading-relaxed font-light">
              We source only the finest materials and partner with master artisans whose skills have been honed through generations. Every thread, every stitch, every detail reflects our unwavering standards of excellence.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-amber-50 rounded-xl p-12 mb-20 shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Our Noble Mission</h2>
            <p className="text-xl font-light leading-relaxed max-w-4xl mx-auto">
              To preserve and celebrate the art of distinguished dressing, making exceptional fashion accessible to those who understand that true style is eternal, not seasonal. We are committed to building a community of discerning individuals who appreciate the profound difference between fashion and style.
            </p>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-amber-900 mb-12">The JodiacxThreadora Distinction</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Crown className="w-8 h-8 text-amber-800" />
              </div>
              <h4 className="text-lg font-serif font-semibold text-amber-900 mb-3">Heritage Craftsmanship</h4>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                Traditional techniques passed down through generations of skilled artisans
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-amber-800" />
              </div>
              <h4 className="text-lg font-serif font-semibold text-amber-900 mb-3">Timeless Elegance</h4>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                Designs that transcend fleeting trends to embody enduring sophistication
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-amber-800" />
              </div>
              <h4 className="text-lg font-serif font-semibold text-amber-900 mb-3">Sustainable Luxury</h4>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                Responsible practices that honor both tradition and environmental stewardship
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-amber-800" />
              </div>
              <h4 className="text-lg font-serif font-semibold text-amber-900 mb-3">Exclusive Community</h4>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                A distinguished clientele who appreciate the finer aspects of refined living
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-stone-50 rounded-xl p-12 border border-amber-200">
          <h3 className="text-3xl font-serif font-bold text-amber-900 mb-6">
            Join Our Distinguished Legacy
          </h3>
          <p className="text-xl text-stone-700 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover fashion that speaks to your refined sensibilities. Become part of the JodiacxThreadora family and embrace a style that is as enduring as it is exceptional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-800 to-amber-900 text-amber-50 rounded-lg font-medium hover:from-amber-900 hover:to-amber-800 transition-all duration-300 shadow-lg">
              Explore Our Collections
            </button>
            <button className="px-8 py-4 border-2 border-amber-800 text-amber-800 rounded-lg font-medium hover:bg-amber-800 hover:text-amber-50 transition-all duration-300">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}