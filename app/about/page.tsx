import Image from "next/image";
import { Play } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-[#00418d] text-white overflow-hidden pt-20 md:pt-24">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6 leading-tight">
            ELEVATE YOUR BUSINESS
          </h1>
          <p className="text-center max-w-3xl mx-auto text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed px-4">
            Skill Assessments Done With The Utmost Knowledge, Integrity, Trust,
            Respect And Security. Our Objective Is To Provide You With Accurate
            Insights Into The Skill Levels Of Your Current And Prospective
            Workforce.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#f73e5d] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium hover:bg-opacity-90 transition-all text-sm sm:text-base">
              Sign Up
            </button>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-1/3 lg:w-1/2 opacity-20 hidden md:block z-[2]">
          <div className="relative h-full">
            <Image
              src="/images/homepage/home_globe.gif"
              alt="SkillKwiz assessment platform"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {/* Feature Card 1 */}
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-[250px] md:h-[300px] hover:h-[350px]">
            <Image
              src="/images/aboutpage/eye.gif"
              alt="Our Vision"
              width={150}
              height={150}
              className="w-auto h-auto max-h-28 md:max-h-32 object-contain mb-4"
            />
            <h3 className="text-[#272727] font-bold group-hover:text-white transition-colors duration-300 text-base md:text-lg">
              OUR VISION
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-opacity duration-500 text-xs md:text-sm text-[#272727] group-hover:text-white">
              We envision a future where skill assessments empower companies to
              grow confidently by hiring and developing talent based on data,
              not guesswork.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-[250px] md:h-[300px] hover:h-[350px]">
            <Image
              src="/images/aboutpage/mission.gif"
              alt="Our Mission"
              width={150}
              height={150}
              className="w-auto h-auto max-h-28 md:max-h-32 object-contain mb-4"
            />
            <h3 className="text-[#272727] font-bold group-hover:text-white transition-colors duration-300 text-base md:text-lg">
              OUR MISSION
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-opacity duration-500 text-xs md:text-sm text-[#272727] group-hover:text-white">
              We envision a future where skill assessments empower companies to
              grow confidently by hiring and developing talent based on data,
              not guesswork.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-[250px] md:h-[300px] hover:h-[350px]">
            <Image
              src="/images/aboutpage/purpose.gif"
              alt="Our Purpose"
              width={150}
              height={150}
              className="w-auto h-auto max-h-28 md:max-h-32 object-contain mb-4"
            />
            <h3 className="text-[#272727] font-bold group-hover:text-white transition-colors duration-300 text-base md:text-lg">
              OUR PURPOSE
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-opacity duration-500 text-xs md:text-sm text-[#272727] group-hover:text-white">
              We envision a future where skill assessments empower companies to
              grow confidently by hiring and developing talent based on data,
              not guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00418d] mb-4 md:mb-6">
                Who We Are ?
              </h2>
              <p className="text-[#272727] mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                We are your partner in skill assessment. Our expertise lies in assessing skill levels in people and quantifying them...
              </p>
              <p className="text-sm md:text-base text-[#272727] mb-3 md:mb-4 leading-relaxed italic">
                "SkillKwiz has a single purpose and that is to create
                stakeholder value..."
              </p>
              <p className="text-sm md:text-base text-[#272727] font-semibold leading-relaxed">
                -Venugopal B A <br />
                CEO, SkillKwiz
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center gap-4">
              {[
                "/images/aboutpage/about_who_we_are-0.png",
                "/images/aboutpage/about_who_we_are-1.png",
                "/images/aboutpage/about_who_we_are-2.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden max-h-[300px] w-[100px] sm:w-[130px] md:w-[160px] transition-transform duration-[2000ms] animate-float"
                  style={{
                    animationDelay: `${i * 450}ms`,
                  }}
                >
                  <Image
                    src={src}
                    alt={`Team collaboration ${i + 1}`}
                    width={160}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0% { transform: translateY(0); }
            100% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 2s ease-in-out infinite alternate;
          }
        `}</style>
      </section>

      {/* CEO Section */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="w-full md:w-1/3 mx-auto md:mx-0">
              <div className="relative max-w-sm mx-auto md:max-w-none">
                <div className="bg-[#f73e5d] p-4 md:p-6">
                  <Image
                    src="/images/aboutpage/Venugopal.png?height=300&width=300"
                    alt="CEO"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-[#f73e5d] text-white text-center py-3 font-bold text-lg md:text-xl">
                  CEO
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-[#272727] mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                Venugopal B A, a veteran leader in the IT industry with
                experience spanning 24 years in senior leadership roles, has
                chosen to take on the mantle of leading SkillKwiz. His
                understanding of one of the key challenges faced by the services
                sector gave birth to the vision that is SkillKwiz today.
              </p>
              <p className="text-[#272727] text-sm md:text-base leading-relaxed">
                With a rich background in the technology industry, he aims to
                establish SkillKwiz as an AI first and foremost company. He is
                poised to take SkillKwiz to its next level of growth by turning
                it into a company that is shaped entirely by the market it
                serves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-lg overflow-hidden">
            <video
              className="w-full h-auto"
              controls
              preload="none"
              poster="/images/aboutpage/about_video.png"
            >
              <source src="/images/aboutpage/about_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
