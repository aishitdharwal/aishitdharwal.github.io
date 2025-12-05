import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicy() {
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
            <h1 className="text-4xl font-black text-white mb-4">Refund Policy</h1>
            <p className="text-gray-400">Last updated: November 26, 2025</p>
          </div>

          <div className="space-y-6 text-gray-300">
            <section className="space-y-4">
              <p>
                Thank you for choosing to learn with Aishit Dharwal. This Refund Policy explains the terms that apply when you purchase access to any workshop or program offered by me as an independent consultant.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Refund Eligibility</h2>
              <p>
                A full refund is available when the request is made within 48 hours from the scheduled commencement date and time of the workshop. Refund requests made after the completion of this 48 hour window are not eligible for any kind of refund.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">How to Request a Refund</h2>
              <p>To request a refund, you must send an email to <span className="text-white font-black">aishit.dharwal@figuringoutaishit.com</span> with the following details:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your full name</li>
                <li>Your registered email used during purchase</li>
                <li>Your registered mobile number</li>
                <li>Proof of identity such as Aadhaar card</li>
                <li>Payment reference ID or a payment screenshot</li>
                <li>Reason for requesting the refund</li>
              </ul>
              <p>
                Your request will be reviewed and processed within 5-7 working days.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Situations Where Refunds Are Not Provided</h2>
              <p>Refunds will not be provided in the following situations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>If the refund request is made after 48 hours from the scheduled commencement date and time</li>
                <li>If you have attended the workshop, even partially</li>
                <li>If you have accessed or downloaded workshop materials</li>
                <li>If the workshop link or materials have been shared with others</li>
              </ul>
              <p className="mt-4">
                These rules ensure fairness to all participants and prevent misuse of the workshop pricing structure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Mode of Refund</h2>
              <p>
                If approved, refunds will be processed to the original mode of payment.
              </p>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mt-4">
                <p className="font-black text-white">Important Note:</p>
                <p className="text-sm text-gray-400 mt-2">Payment gateway fees are not refundable. The cost of payment gateway transactions is solely borne by the purchaser of the workshop or program.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Modification or Cancellation of the Workshop</h2>
              <p>
                You acknowledge that we are under no obligation to refund any fees and applicable charges paid by you, in full or partially, under any circumstances including modifying or extending the duration of the service, change in the commencement date of the service, your failure to attend or participate in the service, or modification of the structure or content of the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white">Acceptance of This Policy</h2>
              <p>
                By purchasing any workshop or program offered by Aishit Dharwal, you acknowledge that you have read and understood this Refund Policy and agree to follow it.
              </p>
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
