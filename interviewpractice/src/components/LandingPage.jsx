import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Crack Your MERN Interview with AI-Powered Mock Tests 🚀
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Personalized mock interviews based on your resume.
          Real feedback. Real improvement. Real confidence.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
          Book Your Mock Interview
        </button>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our AI Interview Prep?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Feature
            title="Resume-Based Questions"
            desc="AI generates personalized questions based on your resume and experience."
          />
          <Feature
            title="Adaptive Difficulty"
            desc="Questions adjust based on your performance just like real interviews."
          />
          <Feature
            title="Detailed Feedback Report"
            desc="Get a professional improvement roadmap after every session."
          />
          <Feature
            title="Live Coding Round"
            desc="Practice real-world MERN coding problems with evaluation."
          />
          <Feature
            title="HR + Behavioral Prep"
            desc="Prepare for salary negotiation and behavioral questions."
          />
          <Feature
            title="Confidence Booster"
            desc="Know exactly where you stand before your real interview."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
          <p>1️⃣ Upload your resume</p>
          <p>2️⃣ AI generates personalized interview questions</p>
          <p>3️⃣ Attend live mock interview session</p>
          <p>4️⃣ Get detailed performance report + 2 week roadmap</p>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Simple Pricing</h2>

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4">Pro Mock Session</h3>
          <p className="text-4xl font-bold mb-4">₹799</p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>✔ 60 Minute Mock Interview</li>
            <li>✔ Live Coding Round</li>
            <li>✔ Personalized Feedback Report</li>
            <li>✔ 2 Week Improvement Plan</li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Crack Your Next Interview?
        </h2>
        <p className="mb-6">
          Don’t walk into interviews unprepared. Practice smarter.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Start Now
        </button>
      </section>

    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}