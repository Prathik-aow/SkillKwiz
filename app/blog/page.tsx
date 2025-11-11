"use client";

import { useState } from "react";
import Image from "next/image";
import { jsPDF } from "jspdf";

const dummyArticles: { [subtitle: string]: string } = {
  "Why Upskilling Matters in 2025":
    "Upskilling is essential to remain competitive in the fast-evolving job market of 2025. Embracing lifelong learning ensures adaptability and growth.",
  "The Psychology Behind Gamification":
    "Gamification leverages psychological principles like motivation and reward to enhance learning and engagement.",
  "The Difference Between Soft and Hard Skills":
    "Soft skills emphasize interpersonal and communication abilities, while hard skills focus on technical expertise. Both are critical in today’s workplaces.",
  "Why Tech Skills Are Essential in 2025":
    "Technology is transforming every industry. Having strong tech skills is vital to secure high-paying and sustainable careers.",
  "Why Motivation Is Key to Skill Development":
    "Motivation drives consistent learning behavior and perseverance, which are required to master new skills.",
  "Trends to Watch in 2025":
    "The landscape of education and work is shaped by digital innovation, microlearning, AI integration, and flexible careers.",
};

type PdfLinks = {
  [subtitle: string]: string;
};

export default function BlogPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // PDF links for references (not used for download now)
  const pdfLinks: PdfLinks = {
    "Why Upskilling Matters in 2025": "/pdfs/upskilling_matters_2025.pdf",
    "The Psychology Behind Gamification": "/pdfs/psychology_gamification.pdf",
    "The Difference Between Soft and Hard Skills": "/pdfs/soft_vs_hard_skills.pdf",
    "Why Tech Skills Are Essential in 2025": "/pdfs/why_tech_skills_2025.pdf",
    "Why Motivation Is Key to Skill Development": "/pdfs/why_motivation_key.pdf",
    "Trends to Watch in 2025": "/pdfs/trends_to_watch_2025.pdf",
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

  // Generate and download dummy PDF dynamically
  const downloadPDF = (subtitle: string) => {
    const doc = new jsPDF();
    const margin = 15;
    const maxLineWidth = 180;

    // Title
    doc.setFontSize(20);
    doc.text(subtitle, margin, 25);

    // Content
    const text = dummyArticles[subtitle] || "Content not available.";
    doc.setFontSize(12);
    const splitText = doc.splitTextToSize(text, maxLineWidth);
    doc.text(splitText, margin, 40);

    doc.save(subtitle.replace(/\s+/g, "_").toLowerCase() + "_dummy_article.pdf");
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
              onDownload={() => downloadPDF("Why Tech Skills Are Essential in 2025")}
            />
            <SecondaryPost
              img="/images/blogpage/5.png"
              alt="Learning motivation"
              title="How to Stay Motivated While Learning New Skills"
              subtitle="Why Motivation Is Key to Skill Development"
              onDownload={() => downloadPDF("Why Motivation Is Key to Skill Development")}
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
              {[
                {
                  img: "/images/blogpage/6.png",
                  alt: "Online learning",
                  title: "The Future of Online Learning",
                  subtitle: "Trends to Watch in 2025",
                },
                {
                  img: "/images/blogpage/7.png",
                  alt: "Career skills",
                  title: "5 Essential Skills to Boost Your Career in 2025",
                  subtitle: "Trends to Watch in 2025",
                },
                {
                  img: "/images/blogpage/8.png",
                  alt: "Gamification",
                  title: "How Gamification Enhances Learning & Engagement",
                  subtitle: "Trends to Watch in 2025",
                },
                {
                  img: "/images/blogpage/1.png",
                  alt: "Career boost",
                  title: "5 Essential Skills to Boost Your Career in 2025",
                  subtitle: "Trends to Watch in 2025",
                },
                {
                  img: "/images/blogpage/4.png",
                  alt: "Microlearning",
                  title: "The Power of Microlearning",
                  subtitle: "Trends to Watch in 2025",
                },
                {
                  img: "/images/blogpage/2.png",
                  alt: "Learning revolution",
                  title: "Revolutionizing the Way We Learn",
                  subtitle: "Trends to Watch in 2025",
                },
              ].map(({ img, alt, title, subtitle }, index) => (
                <KnowledgeArticle
                  key={index}
                  img={img}
                  alt={alt}
                  title={title}
                  subtitle={subtitle}
                  onDownload={() => downloadPDF(subtitle)}
                />
              ))}
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
  onDownload,
}: {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  onDownload: () => void;
}) {
  return (
    <div className="flex flex-col h-full cursor-pointer">
      <div className="relative h-60 mb-4 rounded-lg shadow-md overflow-hidden">
        <Image src={img} alt={alt} width={580} height={240} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p
        className="text-sm text-gray-600 mb-4 underline cursor-pointer"
        onClick={onDownload}
      >
        {subtitle}
      </p>
    </div>
  );
}

function KnowledgeArticle({
  img,
  alt,
  title,
  subtitle,
  onDownload,
}: {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  onDownload: () => void;
}) {
  return (
    <div className="flex gap-4 mb-6 cursor-pointer">
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
        <Image src={img} alt={alt} width={96} height={96} className="w-full h-full object-cover" />
      </div>
      <div>
        <p
          className="text-sm text-gray-600 mb-1 underline"
          onClick={onDownload}
        >
          {subtitle}
        </p>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
}
