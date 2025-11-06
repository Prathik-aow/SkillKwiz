"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import TestimonialsSection from "@/components/testimonials-section";
import LoginSection from "@/components/login-section";

export default function HomePage() {
  const [scrollStage, setScrollStage] = useState(0);
  const [isCallCenterVisible, setIsCallCenterVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const callCenterRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const carouselIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Carousel images with labels
  const carouselImages = [
    {
      src: "/images/homepage/Carousel/Drivers License.jpg",
      label: "Skill Assessment",
    },
    {
      src: "/images/homepage/Carousel/Pick - Laptop.jpg",
      label: "Quiz Excellence",
    },
    {
      src: "/images/homepage/Carousel/Secure Center.jpg",
      label: "Hiring Simplified",
    },
    {
      src: "/images/homepage/Carousel/Skill Library.jpg",
      label: "Learning Journey",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 100) {
        setScrollStage(0);
      } else if (scrollY < 400) {
        setScrollStage(1);
      } else {
        setScrollStage(2);
      }
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.2,
      rootMargin: "-100px",
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.target === callCenterRef.current) {
          setIsCallCenterVisible(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (callCenterRef.current) {
      observer.observe(callCenterRef.current);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    carouselIntervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);

    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    };
  }, [carouselImages.length]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .gradient-text {
          background: linear-gradient(to right, #1e40af, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section with Carousel Background and Text Overlay */}
      <section ref={heroRef} className="relative w-full h-[100vh] overflow-hidden">
        {/* Carousel Images as Background */}
        <div ref={callCenterRef} className="absolute inset-0">
          {carouselImages.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </div>
          ))}

          {/* Carousel Controls - Left Button */}
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 text-black p-3 rounded-full z-20 transition-all"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Controls - Right Button */}
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 text-black p-3 rounded-full z-20 transition-all"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Indicators - Dots with Pink/Red Color */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`transition-all rounded-full ${
                  index === currentImageIndex
                    ? "bg-[#f73e5d] w-8 h-3"
                    : "bg-white bg-opacity-50 hover:bg-[#f73e5d] w-3 h-3"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content Overlay */}
        {currentImageIndex === 3 ? (
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 px-6">
            <h2 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg text-center">
              {carouselImages[currentImageIndex].label}
            </h2>
          </div>
        ) : (
          <div className="absolute top-1/4 left-0 transform -translate-y-1/2 px-6 md:px-20 lg:px-32 w-full max-w-7xl z-30">
            <h2 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg text-left">
              {carouselImages[currentImageIndex].label}
            </h2>
          </div>
        )}
      </section>

      {/* Rest of the content */}
      <div className="bg-white relative z-10">
        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}
