import React from "react";

export default function TermsConditions() {
  return (
    <div className="bg-black text-white min-h-screen px-6 sm:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-amber-500">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Please read our terms and conditions carefully before using our
            services or purchasing our products.
          </p>
        </div>

        {/* Terms Section */}
        <div className="space-y-12 text-gray-300 leading-relaxed">
          {/* 1. Company Information */}
          <div>
            <h2 className="text-2xl font-semibold text-amber-400">
              1. Company Information
            </h2>
            <p className="mt-4">
              Urban Culture is an independent lifestyle and fashion brand
              focused on delivering unique, high-quality apparel and creative
              designs. By accessing our services, you agree to the following
              terms.
            </p>
          </div>

          {/* 2. Acceptable Use */}
          <div>
            <h2 className="text-2xl font-semibold text-amber-400">
              2. Acceptable Use
            </h2>
            <p className="mt-4">
              You agree to use our website and services only for lawful purposes
              and not to engage in activities that could harm the company,
              website, or other users. Any fraudulent, abusive, or illegal
              activity may result in termination of your account.
            </p>
          </div>

          {/* 3. Product & Ordering */}
          <div>
            <h2 className="text-2xl font-semibold text-amber-400">
              3. Product & Ordering
            </h2>
            <ul className="list-disc list-inside mt-4 space-y-3">
              <li>
                <span className="font-medium text-white">Product Standards:</span>{" "}
                We ensure all products are crafted with attention to quality.
                Minor variations may occur due to screen resolution, printing
                process, or fabric differences.
              </li>
              <li>
                <span className="font-medium text-white">Pricing Policy:</span>{" "}
                Prices are subject to change without prior notice. Customers
                will always be charged the price displayed at the time of order.
              </li>
              <li>
                <span className="font-medium text-white">Colors:</span> Colors may
                vary slightly from what is displayed on the website due to
                screen differences.
              </li>
              <li>
                <span className="font-medium text-white">Sizes:</span> Size
                availability is subject to stock. Customers are responsible for
                choosing the correct size.
              </li>
              <li>
                <span className="font-medium text-white">Availability:</span>{" "}
                Products are subject to availability. If an item becomes
                unavailable, we will notify you and offer alternatives.
              </li>
              <li>
                <span className="font-medium text-white">Order Process:</span>{" "}
                Orders are confirmed only after successful payment. Customers
                will receive an order confirmation via email or SMS.
              </li>
            </ul>
          </div>

          {/* 4. Payment Terms */}
          <div>
            <h2 className="text-2xl font-semibold text-amber-400">
              4. Payment Terms
            </h2>
            <p className="mt-4">
              All transactions must be completed using our approved payment
              methods. We do not store payment details. In case of payment
              failure, the order will not be processed.
            </p>
          </div>

          {/* 5. Intellectual Property */}
          <div>
            <h2 className="text-2xl font-semibold text-amber-400">
              5. Intellectual Property
            </h2>
            <p className="mt-4">
              All designs, logos, and creative works featured by Urban Culture
              are protected by copyright and intellectual property laws.
              Unauthorized reproduction, resale, or distribution is strictly
              prohibited.
            </p>
          </div>

          {/* 6. Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-semibold text-amber-400">
              6. Limitation of Liability
            </h2>
            <p className="mt-4">
              Urban Culture shall not be held responsible for any indirect,
              incidental, or consequential damages arising from the use or
              misuse of our services or products.
            </p>
          </div>

          {/* 7. Dispute Resolution */}
          <div>
            <h2 className="text-2xl font-semibold text-amber-400">
              7. Dispute Resolution
            </h2>
            <p className="mt-4">
              Any disputes shall be resolved under the jurisdiction of Indian
              law. Customers agree to attempt amicable settlement before
              pursuing legal remedies.
            </p>
          </div>

          {/* 8. Account Management */}
          <div>
            <h2 className="text-2xl font-semibold text-amber-400">
              8. Account Management
            </h2>
            <p className="mt-4">
              Users are responsible for maintaining the confidentiality of their
              login credentials. Urban Culture will not be liable for
              unauthorized account access.
            </p>
          </div>

          {/* Final Section */}
          <div className="border-t border-gray-700 pt-6 mt-12 text-sm text-gray-500">
            <p>
              By continuing to use our services or purchase products, you
              acknowledge that you have read, understood, and agreed to our
              Terms & Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
