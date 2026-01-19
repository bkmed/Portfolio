"use client";

import dynamic from "next/dynamic";

export const InfoBar = dynamic(() => import("@layouts/info-bar/Index"), { ssr: false });
export const TestimonialSlider = dynamic(() => import("@components/sliders/Testimonial"), { ssr: false });
export const LatestPostsSlider = dynamic(() => import("@components/sliders/LatestPosts"), { ssr: false });
export const ProjectsMasonry = dynamic(() => import("@components/ProjectsMasonry"), { ssr: false });
