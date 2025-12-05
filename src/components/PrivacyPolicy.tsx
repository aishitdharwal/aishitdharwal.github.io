import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif', backgroundColor: '#050505' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Workshop</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-black text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: November 26, 2025</p>
          </div>

          <div className="space-y-6 text-gray-300">
            <section className="space-y-4">
              <p>
                This Privacy Policy sets out the privacy practices for all services operated and provided directly by Aishit Dharwal, an individual sole owner conducting workshops, consultations and online learning through video conferencing solutions and digital materials.
              </p>
              <p>
                This document is published in accordance with the Information Technology Act 2000, the Reasonable Security Practices and Procedures and Sensitive Personal Data or Information Rules 2011, and the Digital Personal Data Protection Act 2023.
              </p>
              <p className="font-black text-white">
                Use of any services or content provided by Aishit Dharwal signifies that you agree to this Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Introduction</h2>
              <p>For the purposes of this Privacy Policy:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The words <span className="font-black text-white">us</span>, <span className="font-black text-white">we</span>, and <span className="font-black text-white">our</span> refer to Aishit Dharwal</li>
                <li>The words <span className="font-black text-white">you</span> or <span className="font-black text-white">user</span> refer to any individual accessing or using our services</li>
                <li>Anyone below eighteen years of age is considered a <span className="font-black text-white">Child</span> and requires parental consent</li>
              </ul>
              <p className="mt-4">
                Your privacy and the security of your personal information are important to us. We take reasonable measures to protect your information and ensure responsible handling.
              </p>
              <p>
                By using our video conferencing workshops, consultations or related services, or by sharing your information with us, you consent to the collection, use and processing of your information as described in this Privacy Policy. If you do not agree, please discontinue use of our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Collection of Information</h2>
              <p>We collect and process personal information that you voluntarily provide or that is automatically collected when you use our services. This includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your name, email address, phone number and any information provided during registration</li>
                <li>Payment confirmation details from payment processors</li>
                <li>Data submitted by you during sessions including questions, messages, assignments and communications</li>
                <li>Device and technical data such as IP address, browser type, usage logs and access timestamps</li>
                <li>Any information shared during support requests</li>
              </ul>
              <p className="mt-4">
                If a Child is accessing services, parental consent is required. Parents or legal guardians are responsible for all information submitted by the Child, including personally identifiable information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Use of Information</h2>
              <p>Your information is used only for legitimate service related purposes including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing access to workshops, consultations and related materials</li>
                <li>Managing registrations and communication</li>
                <li>Improving session quality and enhancing user experience</li>
                <li>Internal quality checks, training and service development</li>
                <li>Authentication and identity verification</li>
                <li>Compliance with legal obligations</li>
                <li>Sending service related updates and administrative notices</li>
                <li>Preventing misuse, fraud or unauthorised access</li>
                <li>Maintaining security of our digital platforms</li>
              </ul>
              <p className="mt-4">
                We may use anonymous and aggregated data for analytics and service insights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Intellectual Property Protection and Prohibited Use</h2>
              <p>
                All workshop content, course material, recordings, assignments, solutions, templates, discussions, peer interactions, WhatsApp group content and any other resources provided in any form are the exclusive intellectual property of Aishit Dharwal.
              </p>
              <p className="font-black text-white">You strictly agree to the following:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You cannot copy, download, record, redistribute, resell, forward, publish or share any part of the content</li>
                <li>You cannot post the material on any website, online platform, channel, cloud drive or social media</li>
                <li>You cannot use the material to train any model, system, algorithm or dataset</li>
                <li>You cannot use the content for any personal commercial teaching or derivative work</li>
                <li>All access is for your personal viewing only and is non transferable</li>
                <li>Any attempt to replicate, imitate or reuse workshop content is strictly prohibited</li>
              </ul>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mt-4">
                <p className="font-black text-white">Important:</p>
                <p className="text-sm text-gray-400 mt-2">Violation of the above will lead to immediate removal from all services without refund. Legal action may be initiated for copyright infringement or unauthorised distribution under applicable laws.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Cookies</h2>
              <p>
                Our website or third party tools may use cookies for improving performance, remembering preferences or analysing usage. You may disable cookies through your browser settings, although this may affect certain features.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Data Retention</h2>
              <p>
                We retain personal information only for as long as required for service delivery, legal compliance, audit requirements, dispute resolution and security enforcement.
              </p>
              <p>
                If you wish to request deletion of your information, you may contact us by email. Certain information may still be retained where legally required.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Rights of Users</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Withdraw consent for data processing</li>
                <li>Request deletion, subject to legal requirements</li>
              </ul>
              <p className="mt-4">
                We will respond to requests within a reasonable timeframe.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Security of Information</h2>
              <p>
                We take reasonable security measures to protect personal data against unauthorised access, misuse, alteration or loss. However, transmission over the internet has inherent risks and we cannot guarantee absolute security.
              </p>
              <p>
                In case of a data breach, users will be notified as required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">International Data Transfer</h2>
              <p>
                Your data may be transferred or stored on servers located outside India. By using our services, you consent to such transfers to ensure smooth functioning of global tools like Zoom, Google Workspace or WhatsApp.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Third Party Links</h2>
              <p>
                Any external links accessed through our communications or sessions are governed by their respective privacy policies. We are not responsible for any third party practices.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Updates to this Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Continued use after changes implies acceptance of the updated version. Users are encouraged to review this page periodically.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Contact and Grievance</h2>
              <p>
                For privacy concerns, data requests or grievance submissions, you may contact:
              </p>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mt-4">
                <p className="font-black text-white">Grievance Officer</p>
                <p className="text-sm text-gray-400 mt-2">Name: Aishit Dharwal</p>
                <p className="text-sm text-gray-400">Email: aishit.dharwal@figuringoutaishit.com</p>
                <p className="text-sm text-gray-400 mt-2">We will make reasonable efforts to respond promptly.</p>
              </div>
            </section>

            <section className="space-y-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <p className="text-gray-300 text-center italic">
                  You have read this Privacy Policy and agree to all of the provisions contained above.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-gray-800" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Aishit Dharwal. All rights reserved
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/refund-policy" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Refund Policy
            </Link>
            <Link 
              to="/terms-and-conditions" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}