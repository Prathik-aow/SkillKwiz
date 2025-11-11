import Link from "next/link";

export default function WhyChooseSection() {
  return (
    <section className="py-16 text-white relative overflow-hidden bg-gradient-to-b from-[#00418d] to-[#00275e]">
      {/* Background Image overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src="/images/homepage/why_choose_banner_2.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-extrabold text-center mb-6 tracking-tight">
          Why Choose{" "}
          <span className="text-white">
            Skill<span className="text-[#f73e5d]">Kwiz</span>
          </span>
          ?
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed font-light">
          Discover our unique value propositions designed to enhance your
          recruitment strategy. Experience the difference SkillKwiz can make in
          your organization by providing secure, reliable, and data-driven skill
          assessment solutions that empower hiring teams worldwide.
        </p>

        {/* Cards container: center cards on tablets and larger */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          {/* Skill Library Card */}
          <div className="bg-white rounded-lg p-6 text-black max-w-xs w-full md:w-64 md:h-[350px] shadow-lg hover:-translate-y-3 transition-transform duration-300 flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#c3dfff] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/homepage/books.gif"
                  alt="Skill Library"
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-xl font-semibold text-center mb-4 flex-grow">
              Skill Library
            </h3>
            <p className="text-gray-700 text-center text-sm md:text-base leading-relaxed">
              Access our extensive library of skill assessments covering technical,
              professional, and soft skills for comprehensive candidate evaluation.
              Stay ahead by tapping into an evolving repository tailored to today’s market needs.
            </p>
          </div>

          {/* Secure Testing Card */}
          <div className="bg-white rounded-lg p-6 text-black max-w-xs w-full md:w-64 md:h-[350px] shadow-lg hover:-translate-y-3 transition-transform duration-300 flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#c3dfff] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/homepage/guard.gif"
                  alt="Secure Testing"
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-xl font-semibold text-center mb-4 flex-grow">
              Secure Testing
            </h3>
            <p className="text-gray-700 text-center text-sm md:text-base leading-relaxed">
              Our testing is conducted in secure, content-aware environments.
              Candidates undergo multiple authentication layers including biometric
              verification and continuous validation throughout the test process.
            </p>
          </div>

          {/* Flexible Pricing Card */}
          <div className="bg-white rounded-lg p-6 text-black max-w-xs w-full md:w-64 md:h-[350px] shadow-lg hover:-translate-y-3 transition-transform duration-300 flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#c3dfff] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/homepage/dollar.gif"
                  alt="Flexible Pricing"
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-xl font-semibold text-center mb-4 flex-grow">
              Flexible Pricing
            </h3>
            <p className="text-gray-700 text-center text-sm md:text-base leading-relaxed">
              Our pricing model scales with your needs. Pay only for what you use
              via a credit-based system or opt for our Enterprise plan offering
              unlimited testing and custom features for large organizations.
            </p>
          </div>
        </div>

        <div className="text-center mt-20 md:mt-24 relative z-20">
          <h3 className="text-2xl font-semibold mb-4 tracking-wide">
            Join the Talent Revolution
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed px-4 md:px-0">
            Take the first step towards transforming your hiring process. Make selections in
            line with our tried and tested platform, trusted by industry leaders globally.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-[#f7d03e] text-black px-10 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all shadow-md"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
