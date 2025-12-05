import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
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
            <h1 className="text-4xl font-black text-white mb-4">Terms and Conditions</h1>
            <p className="text-gray-400">Last updated: November 26, 2025</p>
          </div>

          <div className="space-y-6 text-gray-300">
            <section className="space-y-4">
              <p>
                These Terms and Conditions govern the use of all workshops, consultations, online sessions, digital materials, and related services operated by Aishit Dharwal under the trade name <span className="font-black text-white">AI Classroom</span>.
              </p>
              <p>
                AI Classroom is a trade name used to represent the educational services offered by Aishit Dharwal. AI Classroom is not a registered company or incorporated entity. All ownership rights, intellectual property rights and operational responsibilities for AI Classroom are solely held by Aishit Dharwal. All payments, communications, commitments and obligations under these Terms and Conditions are between the user and Aishit Dharwal.
              </p>
              <p>
                By accessing or using any services provided by Aishit Dharwal, you agree to be bound by these Terms and Conditions. If you do not agree, you must discontinue use of the services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Definitions</h2>
              <p>For the purpose of these Terms and Conditions:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The words <span className="font-black text-white">we</span>, <span className="font-black text-white">us</span>, and <span className="font-black text-white">our</span> refer to Aishit Dharwal.</li>
                <li>The words <span className="font-black text-white">you</span> or <span className="font-black text-white">user</span> refer to any individual accessing or using the services.</li>
                <li>Anyone below eighteen years of age is considered a <span className="font-black text-white">Child</span> and requires parental consent.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Eligibility and Access</h2>
              <p>By using our services, you confirm that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You are at least eighteen years of age, or you have parental or guardian consent if you are a Child.</li>
                <li>You will provide accurate and complete information during registration.</li>
                <li>You will not engage in misuse, fraud or unauthorised access.</li>
              </ul>
              <p className="mt-4">
                We reserve the right to refuse access to anyone who violates these Terms and Conditions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Nature of Services</h2>
              <p>
                Our services include workshops, consultations, online classes, mentoring sessions, digital materials, assignments, discussion groups and related educational content delivered through video conferencing platforms and communication channels.
              </p>
              <p>
                Service availability may vary based on scheduling, platform access and operational constraints.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Intellectual Property and Prohibited Use</h2>
              <p>
                All content and materials provided under AI Classroom are the exclusive intellectual property of Aishit Dharwal. This includes but is not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Session recordings</li>
                <li>Course modules</li>
                <li>Digital templates</li>
                <li>Assignments and solutions</li>
                <li>WhatsApp group content</li>
                <li>Slides, notes and reference materials</li>
                <li>Discussions and peer interactions</li>
                <li>Any resources provided through email, links or cloud storage</li>
              </ul>
              <p className="mt-4">You agree to the following conditions:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You cannot copy, download, save, record, reproduce, share, resell, forward or distribute any content.</li>
                <li>You cannot upload the content to any website, drive, cloud link or social media platform.</li>
                <li>You cannot use the material to train any model, dataset, algorithm, application or system.</li>
                <li>You cannot use any portion of the material for commercial teaching, coaching or derivative work.</li>
                <li>You cannot provide your access to another person. All access is personal and non transferable.</li>
              </ul>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mt-4">
                <p className="font-black text-white">Important:</p>
                <p className="text-sm text-gray-400 mt-2">Any violation will result in immediate removal from all services without refund. Legal action may be taken for copyright infringement and unauthorised distribution.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Payments and Pricing</h2>
              <p>
                All payments for workshops, consultations or digital services must be made in full at the time of registration.
              </p>
              <p>
                Pricing is subject to change based on service updates, program enhancements or market conditions. Any change will apply only to future purchases and not to past payments already completed.
              </p>
              <p>
                By making a payment, you confirm that you are the authorised owner of the payment method used.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Refunds</h2>
              <p>
                Refunds are governed by the Refund Policy published by Aishit Dharwal. By accepting these Terms and Conditions, you also acknowledge and accept the Refund Policy.
              </p>
              <p>
                Refund requests made after the forty eight hour window are not eligible for any kind of refund.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Code of Conduct</h2>
              <p>
                Users must behave respectfully and professionally during sessions and in all communication channels.
              </p>
              <p className="font-black text-white">The following is strictly prohibited:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Abusive or disrespectful communication</li>
                <li>Sharing misleading information or spamming</li>
                <li>Recording any part of the session</li>
                <li>Attempting to obtain other users personal information</li>
                <li>Engaging in harassment or inappropriate behaviour</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Consequences of Breach</h2>
              <p>
                Any user who violates the Code of Conduct will be removed from the live session without prior notice. In addition to this:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The user will be removed from all associated groups or communication channels</li>
                <li>The user will be barred from registering for any future workshops, cohorts or services offered under the trade name AI Classroom</li>
                <li>The user will be blacklisted indefinitely at the personal discretion of Aishit Dharwal if their actions are considered disruptive, harmful or carried out with malicious intent</li>
                <li>Such removal is final and the user is not entitled to any refund even within the forty eight hour refund period mentioned in the Refund Policy due to breach of conduct</li>
              </ul>
              <p className="mt-4">
                If any user publishes online posts or content that disrespects, defames or uses foul language towards the services offered by Aishit Dharwal or towards Aishit Dharwal personally whether directly or indirectly or makes statements that negatively affect the experience of the workshop or the associated business outcome:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We reserve the right to take appropriate legal action under applicable laws</li>
                <li>We reserve the right to immediately remove the user from all current sessions and communication channels</li>
                <li>We reserve the right to permanently deny the user access to all future workshops, cohorts or services offered under the trade name AI Classroom</li>
                <li>The user is not entitled to any refund under any circumstance including within the forty eight hour refund period if such behaviour occurs</li>
              </ul>
              <p className="mt-4">
                This includes behaviour during live sessions that disrupts, mocks, humiliates or intentionally interferes with the learning environment or the professional operations of the workshop. Any act that undermines the integrity, experience or outcome of the session for other participants will be treated as a violation of the Code of Conduct.
              </p>
              <p className="mt-4 font-black text-white">
                By registering for any workshop or service provided by Aishit Dharwal, the user confirms that they have read, understood and agreed to follow all conditions stated in this Code of Conduct without exception.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Limitation of Liability</h2>
              <p>
                All services are educational in nature and are not guaranteed to produce specific results or outcomes.
              </p>
              <p>Aishit Dharwal is not liable for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Loss of data</li>
                <li>Technical failure of platforms such as Zoom or WhatsApp</li>
                <li>Interruption due to internet issues or device issues on your side</li>
                <li>Any indirect or consequential loss</li>
                <li>Any decisions you make using the knowledge gained from the sessions</li>
              </ul>
              <p className="mt-4">
                All services are provided on an "as is" basis.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Privacy and Data Use</h2>
              <p>
                All data collection, storage and usage follows the Privacy Policy published by Aishit Dharwal.
              </p>
              <p>
                By using the services, you consent to the collection and processing of your information as described in the Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Communication Consent</h2>
              <p>You consent to receiving:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Service related updates</li>
                <li>Session links and reminders</li>
                <li>Educational notifications</li>
                <li>Administrative notices</li>
                <li>Payment confirmations</li>
                <li>Compliance messages</li>
              </ul>
              <p className="mt-4">
                You may opt out of non essential communication at any time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Termination of Access</h2>
              <p>We may suspend or terminate your access if:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You violate these Terms and Conditions</li>
                <li>You misuse or distribute intellectual property</li>
                <li>You engage in fraudulent behaviour</li>
                <li>You provide false information</li>
                <li>You disrupt the learning environment</li>
              </ul>
              <p className="mt-4">
                Termination may occur without prior notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Changes to Terms and Conditions</h2>
              <p>
                We may update these Terms and Conditions from time to time. Continued use after changes signifies acceptance of the revised version.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Governing Law</h2>
              <p>
                These Terms and Conditions are governed by the laws of India. Any dispute shall be subject to jurisdiction of courts located in India.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Contact and Grievance</h2>
              <p>
                For concerns, clarifications or grievances, contact:
              </p>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mt-4">
                <p className="font-black text-white">Contact Information</p>
                <p className="text-sm text-gray-400 mt-2">Name: Aishit Dharwal</p>
                <p className="text-sm text-gray-400">Email: aishit.dharwal@figuringoutaishit.com</p>
                <p className="text-sm text-gray-400 mt-2">We will make reasonable efforts to respond promptly.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Final Acceptance</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <p className="text-gray-300 text-center italic">
                  By using our services, you confirm that you have read, understood and agree to all provisions of these Terms and Conditions in full.
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