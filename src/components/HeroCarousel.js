"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel({ items, onSelectVideo }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const carouselItems = items.slice(0, 5);

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      if (carouselItems.length > 0) {
        setActiveIndex((prev) => (prev + 1) % carouselItems.length);
      }
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, carouselItems.length]);

  const handlePrev = (e) => {
    e.preventDefault();
    if (carouselItems.length > 0) {
      setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (carouselItems.length > 0) {
      setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    }
  };

  if (carouselItems.length === 0) return null;

  return (
    <section
      className="carousel-wrapper"
      id="carousel-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-container" id="hero-carousel">
        <div
          className="carousel-slides"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {carouselItems.map((video) => (
            <div key={`${video.type}-${video.id}`} className="carousel-slide">
              <img
                src={video.backdrop || video.poster}
                alt={video.title}
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
              <div className="carousel-overlay">
                <div className="carousel-content">
                  <div className="carousel-meta">
                    {video.genres && video.genres.map((g) => (
                      <span key={g} className="carousel-genre-tag">{g}</span>
                    ))}
                    <span className="carousel-rating">⭐ {video.rating}</span>
                    <span className="carousel-year">{video.year}</span>
                  </div>
                  <h1 className="carousel-title">{video.title}</h1>
                  <p className="carousel-desc">{video.description}</p>
                  <button
                    className="btn btn-primary watch-now-btn"
                    onClick={() => onSelectVideo(video)}
                  >
                    <span>▶</span> Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control prev" onClick={handlePrev} aria-label="Previous Slide">
          <ChevronLeft />
        </button>
        <button className="carousel-control next" onClick={handleNext} aria-label="Next Slide">
          <ChevronRight />
        </button>

        <div className="carousel-dots">
          {carouselItems.map((_, idx) => (
            <div
              key={idx}
              className={`carousel-dot ${idx === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
