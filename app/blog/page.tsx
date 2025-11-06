"use client";

import { useState } from "react";
import Image from "next/image";

type PdfLinks = {
  "Why Upskilling Matters in 2025": string;
  "The Psychology Behind Gamification": string;
  "The Difference Between Soft and Hard Skills": string;
};

export default function BlogPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // PDF links corresponding to blog subtitles
  const pdfLinks: PdfLinks = {
    "Why Upskilling Matters in 2025": "/pdfs/upskilling_matters_2025.pdf",
    "The Psychology Behind Gamification": "/pdfs/psychology_gamification.pdf",
    "The Difference Between Soft and Hard Skills": "/pdfs/soft_vs_hard_skills.pdf",
  };

  const indicatorClasses = (index: number) =>
    `h-1.5 rounded-full transition-all duration-300 ${
      hoveredIndex === index ? "w-64 bg-[#00418d]" : "w-24 bg-[#c3dfff]"
    }`;

  const blogPosts = [
    {
      img: "/images/blogpage/1.png",
      title: "The Importance of Upskilling in Today's Job Market",
      subtitle: "Why Upskilling Matters in 2025",
    },
    {
      img: "/images/blogpage/2.png",
      title: "How Gamified Learning Enhances Skill Retention",
      subtitle: "The Psychology Behind Gamification",
    },
    {
      img: "/images/blogpage/3.png",
      title: "Soft Skills vs. Hard Skills: What Matters More?",
      subtitle: "The Difference Between Soft and Hard Skills",
    },
  ];

  // Download PDF by subtitle key with type assertion
  const downloadPDF = (subtitle: string) => {
    // Assert that subtitle is a key of pdfLinks
    if (!(subtitle in pdfLinks)) return;
    const url = pdfLinks[subtitle as keyof PdfLinks];
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.download = subtitle.replace(/\s+/g, "_").toLowerCase() + ".pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Add padding-top to container to prevent overlap from fixed navbar */}
      <section className="w-full bg-white pt-[120px] pb-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-6">
              Mastering Knowledge & Growth
            </h2>
            <p className="text-center max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 mb-8">
              In a world of constant change, continuous learning is the key to success...
            </p>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mb-10">
              {blogPosts.map((_, index) => (
                <div
                  key={index}
                  className={indicatorClasses(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>

            {/* Featured Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={380}
                      height={240}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                      priority={index === 0}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                  <button
                    type="button"
                    onClick={() => downloadPDF(post.subtitle)}
                    className="text-sm text-[#00418d] font-medium underline hover:no-underline self-start p-0"
                  >
                    {post.subtitle}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <SecondaryPost
              img="/images/blogpage/4.png"
              alt="Tech skills"
              title="Top 10 Tech Skills That Can Land You a High-Paying Job"
              subtitle="Why Tech Skills Are Essential in 2025"
            />
            <SecondaryPost
              img="/images/blogpage/5.png"
              alt="Learning motivation"
              title="How to Stay Motivated While Learning New Skills"
              subtitle="Why Motivation Is Key to Skill Development"
            />
          </div>

          {/* Knowledge Articles */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
              Mastering Knowledge & Growth
            </h2>
            <p className="max-w-4xl mb-12 mx-auto md:mx-0 text-center md:text-left leading-relaxed text-gray-700 px-4 sm:px-0">
              Knowledge is the foundation of growth. Embrace new ideas, sharpen
              your skills, and stay inspired with insights that empower you to
              achieve more in both your personal and professional journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <KnowledgeArticle
                img="/images/blogpage/6.png"
                alt="Online learning"
                title="The Future of Online Learning"
                subtitle="Trends to Watch in 2025"
              />
              <KnowledgeArticle
                img="/images/blogpage/7.png"
                alt="Career skills"
                title="5 Essential Skills to Boost Your Career in 2025"
                subtitle="Trends to Watch in 2025"
              />
              <KnowledgeArticle
                img="/images/blogpage/8.png"
                alt="Gamification"
                title="How Gamification Enhances Learning & Engagement"
                subtitle="Trends to Watch in 2025"
              />
              <KnowledgeArticle
                img="/images/blogpage/1.png"
                alt="Career boost"
                title="5 Essential Skills to Boost Your Career in 2025"
                subtitle="Trends to Watch in 2025"
              />
              <KnowledgeArticle
                img="/images/blogpage/4.png"
                alt="Microlearning"
                title="The Power of Microlearning"
                subtitle="Trends to Watch in 2025"
              />
              <KnowledgeArticle
                img="/images/blogpage/2.png"
                alt="Learning revolution"
                title="Revolutionizing the Way We Learn"
                subtitle="Trends to Watch in 2025"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SecondaryPost({
  img,
  alt,
  title,
  subtitle,
}: {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="relative h-60 mb-4 rounded-lg shadow-md overflow-hidden">
        <Image
          src={img}
          alt={alt}
          width={580}
          height={240}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
    </div>
  );
}

function KnowledgeArticle({
  img,
  alt,
  title,
  subtitle,
}: {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
        <Image
          src={img}
          alt={alt}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-1">{subtitle}</p>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
}
