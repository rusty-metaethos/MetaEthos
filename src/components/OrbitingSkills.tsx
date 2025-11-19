"use client"
import { useEffect, useState, useRef, memo } from 'react';

// --- Type Definitions ---
type IconType = 'react' | 'typescript' | 'node' | 'python' | 'tailwind' | 'mongodb';

type GlowColor = 'purple' | 'purple-light';

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
  url: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
        </g>
      </svg>
    ),
    color: '#61DAFB'
  },
  typescript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" rx="5" fill="#3178C6"/>
        <path d="M13.5 16.5v3.75h2.25V16.5h3.75v-2.25h-3.75V10.5h-2.25v3.75H9.75v2.25h3.75z" fill="white"/>
        <path d="M7.5 9h9v1.5h-3v7.5h-3V10.5h-3V9z" fill="white"/>
      </svg>
    ),
    color: '#3178C6'
  },
  node: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247z" fill="#339933"/>
      </svg>
    ),
    color: '#339933'
  },
  python: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="#3776AB"/>
      </svg>
    ),
    color: '#3776AB'
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/>
      </svg>
    ),
    color: '#06B6D4'
  },
  mongodb: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.604-3.254 4.291-11.375zM12.26 20.94c-.083-.28-.184-.562-.297-.842l-.042-.14a7.738 7.738 0 01-.21-.724c-.248-.93-.383-1.89-.404-2.857-.02-.97.072-1.94.276-2.892.107-.502.24-.998.398-1.486.316-.978.74-1.917 1.272-2.798.528-.88 1.152-1.7 1.863-2.447.36-.378.738-.74 1.135-1.084-.122.31-.228.626-.318.945-.09.32-.164.645-.223.973a12.264 12.264 0 00-.21 2.012c-.012.676.024 1.352.108 2.022.084.67.216 1.333.396 1.983.18.65.408 1.286.684 1.902.138.308.29.61.456.906.166.296.346.585.54.866.194.28.402.552.624.814.222.262.458.514.708.754-.25.24-.486.492-.708.754-.222.262-.43.534-.624.814-.194.28-.374.57-.54.866-.166.296-.318.598-.456.906a12.264 12.264 0 01-.684 1.902 12.264 12.264 0 01-.396 1.983c-.084.67-.12 1.346-.108 2.022.012.676.078 1.35.21 2.012.06.328.134.653.223.973.09.32.196.635.318.945a12.264 12.264 0 01-1.135-1.084 12.264 12.264 0 01-1.863-2.447 12.264 12.264 0 01-1.272-2.798 12.264 12.264 0 01-.398-1.486 12.264 12.264 0 01-.276-2.892c.02-.97.156-1.927.404-2.857.07-.242.145-.482.21-.724l.042-.14c.113-.28.214-.562.297-.842z" fill="#47A248"/>
      </svg>
    ),
    color: '#47A248'
  }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit
  { 
    id: 'react',
    orbitRadius: 100, 
    size: 45, 
    speed: 1, 
    iconType: 'react', 
    phaseShift: 0, 
    glowColor: 'purple',
    label: 'React',
    url: 'https://react.dev'
  },
  { 
    id: 'typescript',
    orbitRadius: 100, 
    size: 45, 
    speed: 1, 
    iconType: 'typescript', 
    phaseShift: (2 * Math.PI) / 3, 
    glowColor: 'purple',
    label: 'TypeScript',
    url: 'https://www.typescriptlang.org'
  },
  { 
    id: 'tailwind',
    orbitRadius: 100, 
    size: 40, 
    speed: 1, 
    iconType: 'tailwind', 
    phaseShift: (4 * Math.PI) / 3, 
    glowColor: 'purple',
    label: 'Tailwind CSS',
    url: 'https://tailwindcss.com'
  },
  // Outer Orbit
  { 
    id: 'node',
    orbitRadius: 180, 
    size: 45, 
    speed: -0.6, 
    iconType: 'node', 
    phaseShift: 0, 
    glowColor: 'purple-light',
    label: 'Node.js',
    url: 'https://nodejs.org'
  },
  { 
    id: 'python',
    orbitRadius: 180, 
    size: 50, 
    speed: -0.6, 
    iconType: 'python', 
    phaseShift: (2 * Math.PI) / 3, 
    glowColor: 'purple-light',
    label: 'Python',
    url: 'https://www.python.org'
  },
  { 
    id: 'mongodb',
    orbitRadius: 180, 
    size: 40, 
    speed: -0.6, 
    iconType: 'mongodb', 
    phaseShift: (4 * Math.PI) / 3, 
    glowColor: 'purple-light',
    label: 'MongoDB',
    url: 'https://www.mongodb.com'
  },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const iconRef = useRef<HTMLAnchorElement>(null);
  const { orbitRadius, size, iconType, label, url } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      setTooltipPos({
        x: rect.left + rect.width / 2,
        y: rect.bottom + 10
      });
    }
  };

  return (
    <>
      <a
        ref={iconRef}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
          zIndex: isHovered ? 20 : 10,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`
            relative w-full h-full p-2 bg-navy/90 backdrop-blur-sm
            rounded-full flex items-center justify-center
            transition-all duration-300 cursor-pointer
            ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
          `}
          style={{
            boxShadow: isHovered
              ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20` 
              : undefined
          }}
        >
          <SkillIcon type={iconType} />
        </div>
      </a>
      {isHovered && (
        <div 
          className="fixed px-3 py-1.5 bg-navy/95 backdrop-blur-sm rounded-lg text-xs text-white whitespace-nowrap pointer-events-none border border-purple/30 shadow-lg"
          style={{
            zIndex: 9999,
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`,
            transform: 'translateX(-50%)',
          }}
        >
          {label}
        </div>
      )}
    </>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'purple', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    purple: {
      primary: 'rgba(168, 85, 247, 0.4)',
      secondary: 'rgba(168, 85, 247, 0.2)',
      border: 'rgba(168, 85, 247, 0.3)'
    },
    'purple-light': {
      primary: 'rgba(192, 132, 252, 0.4)',
      secondary: 'rgba(192, 132, 252, 0.2)',
      border: 'rgba(192, 132, 252, 0.3)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.purple;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 20px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 100, glowColor: 'purple', delay: 0 },
    { radius: 180, glowColor: 'purple-light', delay: 1.5 }
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div 
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[450px] md:h-[450px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Central "Code" Icon with enhanced glow */}
        <div className="w-20 h-20 bg-gradient-to-br from-navy to-midnight rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-purple/30 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-purple-light/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}
      </div>
    </div>
  );
}
