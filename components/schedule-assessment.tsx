"use client";

import { useState } from "react";
import { Info, Calendar, Clock } from "lucide-react";

export default function ScheduleAssessment() {
  const [selectedCompany, setSelectedCompany] = useState<string>("microsoft");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  const closeModal = () => {
    setShowThankYou(false);
  };

  return (
    <div className="text-white px-4 md:px-0 max-w-4xl mx-auto relative">
      <h1 className="text-3xl font-semibold text-center mb-2">Schedule Assessment</h1>
      <p className="text-center text-gray-200 mb-6">
        Register for your preferred skill assessment slot
      </p>

      <div className="space-y-8">
        {/* Message */}
        <p className="text-center text-lg">
          Great! Multiple employers have authorized you to take a skill assessment with SkillKwiz. Choose one. You can revisit this page to schedule for others.
        </p>

        {/* Company Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: "microsoft", name: "Microsoft" },
            { id: "google", name: "Google" },
            { id: "amazon", name: "Amazon" },
          ].map((company) => (
            <button
              key={company.id}
              className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] transition ${
                selectedCompany === company.id ? "border-2 border-green-500" : ""
              }`}
              onClick={() => setSelectedCompany(company.id)}
              type="button"
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  selectedCompany === company.id ? "bg-green-500" : "bg-gray-500"
                }`}
              />
              {company.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: "facebook1", name: "Facebook" },
            { id: "facebook2", name: "Facebook" },
          ].map((company) => (
            <button
              key={company.id}
              className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] transition ${
                selectedCompany === company.id ? "border-2 border-green-500" : ""
              }`}
              onClick={() => setSelectedCompany(company.id)}
              type="button"
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  selectedCompany === company.id ? "bg-green-500" : "bg-gray-500"
                }`}
              />
              {company.name}
            </button>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-[#2d5184]/80 rounded-lg p-4 flex items-start gap-3">
          <Info className="w-6 h-6 text-white mt-1" />
          <p className="text-white">
            {selectedCompany === "microsoft"
              ? "Microsoft has authorized you to take an assessment for C#, SQL Server, Web2.0, and React."
              : `You have selected ${selectedCompany.charAt(0).toUpperCase() + selectedCompany.slice(1)}.`}
          </p>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="country" className="block mb-2 text-white font-medium">
              Select Country
            </label>
            <div className="relative">
              <select
                id="country"
                className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none"
                required
              >
                <option value="" disabled selected>
                  Select country
                </option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="zip" className="block mb-2 text-white font-medium">
              Select Zip Code
            </label>
            <div className="relative">
              <select
                id="zip"
                className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none"
                required
              >
                <option value="" disabled selected>
                  Enter your area's Zip code
                </option>
                <option>110001</option>
                <option>110002</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="centre" className="block mb-2 text-white font-medium">
              Select Testing Centre
            </label>
            <div className="relative">
              <select
                id="centre"
                className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none"
                required
              >
                <option value="" disabled selected>
                  Enter your Centre
                </option>
                <option>Centre 1</option>
                <option>Centre 2</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-white font-medium">Select a Date</label>
              <div className="flex items-center bg-[#333333] rounded px-4 py-3 text-white space-x-2">
                <input
                  type="text"
                  placeholder="MM"
                  className="w-12 bg-transparent focus:outline-none text-center rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="DD"
                  className="w-12 bg-transparent focus:outline-none text-center rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="YYYY"
                  className="w-16 bg-transparent focus:outline-none text-center rounded"
                  required
                />
                <Calendar className="ml-auto w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-white font-medium">Select Time</label>
              <div className="flex items-center bg-[#333333] rounded px-4 py-3 text-white space-x-2">
                <input
                  type="text"
                  placeholder="HH"
                  className="w-12 bg-transparent focus:outline-none text-center rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="MM"
                  className="w-12 bg-transparent focus:outline-none text-center rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="AM"
                  className="w-12 bg-transparent focus:outline-none text-center rounded"
                  required
                />
                <Clock className="ml-auto w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-20 py-2 rounded bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white hover:opacity-90 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4 text-[#00418d]">Thank You!</h2>
            <p className="mb-6 text-gray-700">
              Your employee account has been created successfully. You can now proceed to schedule your assessment.
            </p>
            <button
              onClick={closeModal}
              className="bg-[#00418d] text-white px-6 py-2 rounded hover:bg-[#003366] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
