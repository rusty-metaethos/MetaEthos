"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

const techLogos = [
  { src: "https://cdn.worldvectorlogo.com/logos/react-2.svg", alt: "React", url: "https://react.dev" },
  { src: "https://cdn.worldvectorlogo.com/logos/typescript.svg", alt: "TypeScript", url: "https://www.typescriptlang.org" },
  { src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", alt: "Node.js", url: "https://nodejs.org" },
  { src: "https://cdn.worldvectorlogo.com/logos/python-5.svg", alt: "Python", url: "https://www.python.org" },
  { src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", alt: "Tailwind CSS", url: "https://tailwindcss.com" },
  { src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", alt: "MongoDB", url: "https://www.mongodb.com" },
  { src: "https://cdn.worldvectorlogo.com/logos/html-1.svg", alt: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { src: "https://cdn.worldvectorlogo.com/logos/css-3.svg", alt: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { src: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg", alt: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { src: "https://cdn.worldvectorlogo.com/logos/next-js.svg", alt: "Next.js", url: "https://nextjs.org" },
];

export default function TechStackCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <section id="tech-stack" className="relative py-32 bg-gradient-to-b from-midnight via-navy to-midnight overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-light rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-white">Our </span>
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-2xl text-white/70 max-w-3xl font-light mx-auto">
            Leveraging cutting-edge technologies to build exceptional solutions
          </p>
        </div>

        <div className="w-full py-4 relative">
          <div style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}>
            <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
              <CarouselContent className="py-2">
              {techLogos.map((logo, index) => (
                <CarouselItem className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6" key={index}>
                  <a 
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block"
                    title={logo.alt}
                  >
                    <div className="flex rounded-2xl w-full h-32 items-center justify-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <img 
                        src={logo.src}
                        alt={logo.alt}
                        className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-navy/95 backdrop-blur-sm rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-purple/30 shadow-lg z-50">
                      {logo.alt}
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
