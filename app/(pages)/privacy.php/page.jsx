"use client";

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 py-16 px-6 md:px-20">

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Privacy Policy
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
        <p className="mb-3">We collect the following types of information:</p>

        <ul className="list-disc ml-6 space-y-1">
          <li>Full Name</li>
          <li>Phone Number</li>
          <li>Email Address</li>
          <li>Government-approved ID details</li>
          <li>Booking & stay details</li>
          <li>Payment information</li>
          <li>Device & browsing information</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul className="list-disc ml-6 space-y-1 mt-2">
          <li>Process bookings</li>
          <li>Verify identity during check-in</li>
          <li>Improve hotel services</li>
          <li>Provide customer support</li>
          <li>Communicate booking details or updates</li>
        </ul>

        {/* Cancellation */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">3. Cancellation Policy</h2>
        <p className="mb-2">
          • Free Cancellation (100% refund) if cancelled before <strong>13:59:59</strong> (destination time).
        </p>
        <p className="mb-2">
          • After <strong>14:00:00</strong>, cancellation incurs a <strong>100% charge</strong>.
        </p>
        <p>
          • Cancellations allowed only before check-in.
          • No-shows are fully chargeable.
        </p>

        {/* Child Policy */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">4. Child Policy</h2>
        <p className="mb-2">• Children up to <strong>5 years</strong> can stay free (no mattress or food).</p>
        <p>
          • Children above 5 years are considered extra persons (extra bed & food charges apply).
        </p>

        {/* Unmarried Policy */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">5. Unmarried / Unrelated Couples Policy</h2>
        <p className="mb-2">
          Unmarried or unrelated couples may be denied check-in as per hotel policy.
        </p>
        <p className="mb-2">
          If suitable government ID is not provided, the hotel reserves the right to deny stay.
        </p>
        <p><strong>No refund</strong> is provided in such cases.</p>

        {/* Terms & Conditions */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">6. Terms & Conditions</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Every guest above <strong>18 years</strong> must provide a valid Government Photo ID (DL, Passport, Voter ID, Ration Card).
          </li>
          <li>PAN Card is not accepted.</li>
          <li>Standard Check-in: <strong>2:00 PM</strong>, Check-out: <strong>12:00 PM</strong></li>
          <li>
            Early check-in/late check-out is subject to availability & additional charges.
          </li>
        </ul>

        {/* Security */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">7. Data Protection</h2>
        <p>
          We use encryption and secure systems to protect guest data. Access is limited to authorized hotel staff only.
        </p>

        {/* Third-party */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">8. Third-Party Sharing</h2>
        <p className="mb-2">We may share data only with:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Government authorities (if required by law)</li>
          <li>Payment gateways</li>
          <li>Trusted operational service partners</li>
        </ul>
        <p className="mt-2 font-semibold">We never sell guest data.</p>

        {/* Contact */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">9. Contact Us</h2>
        <p>For queries regarding this Privacy Policy, contact:</p>

        <div className="mt-4 bg-gray-100 p-4 rounded-xl">
          <p className="font-semibold">Hotel Inner Circle</p>
          <p>Hyderabad, Telangana</p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Email: info@hotelinnercircle.com</p>
        </div>

      </div>
    </div>
  );
}
