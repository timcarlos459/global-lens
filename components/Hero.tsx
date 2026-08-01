"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import HeroCards from "./HeroCards";
import HeroStats from "./HeroStats";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    let imageTimer: NodeJS.Timeout;

    const playVideo = async () => {
      if (!videoRef.current) return;

      videoRef.current.currentTime = 0;

      try {
        await videoRef.current.play();
      } catch {
        // Browser paused or blocked autoplay
      }
    };

    const startCycle = () => {
      // Show image first
      setShowVideo(false);

      imageTimer = setTimeout(async () => {
        setShowVideo(true);
        await playVideo();
      }, 5000); // Image visible for 5 seconds
    };

    startCycle();

    const video = videoRef.current;

    const handleEnded = () => {
      startCycle();
    };

    video?.addEventListener("ended", handleEnded);

    return () => {
      clearTimeout(imageTimer);
      video?.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* IMAGE BACKGROUND */}

      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1500 ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: "url('/images/hero/hero1.jpg')",
        }}
      />

      {/* VIDEO BACKGROUND */}

      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1500 ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/65" />

      {/* CONTENT */}

      <div className="relative z-20 mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 pb-38 pt-28 lg:grid-cols-2">
        {/* LEFT */}

        <div>
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-white backdrop-blur-xl">
            Luxury African Experiences
          </span>

          <h1 className="mt-6 font-black leading-tight">
            <span className="block text-5xl text-white lg:text-6xl">
              Explore
            </span>

            <span className="block text-5xl text-[#64D98B] lg:text-6xl">
              Africa
            </span>

            <span className="mt-2 block text-4xl text-white lg:text-5xl">
              Through A Different Lens
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-200">
            Discover luxury safaris, tropical beaches, mountain adventures,
            gorilla trekking, cultural journeys and unforgettable African
            experiences curated by Global Lens Tours.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/tours"
              className="rounded-full bg-[#64D98B] px-7 py-3 font-semibold text-[#081B29] transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              Explore Tours
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#081B29]"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* RIGHT */}

        <HeroCards />
      </div>

      {/* STATS */}

      <HeroStats />
    </section>
  );
}
