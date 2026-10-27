import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const rendertext = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        fontVariationSettings: `'wght' ${baseWeight}`,
        display: "inline-block",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight) => {
    gsap.to(letter, {
      duration: 0.2,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
      overwrite: "auto",
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: letterLeft, width } = letter.getBoundingClientRect();

      const distance = Math.abs(mouseX - (letterLeft - left + width / 2));

      const intensity = Math.exp(-(distance ** 2) / 1000);
      const weight = min + (max - min) * intensity;

      animateLetter(letter, weight);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter(letter, base);
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  // Clean up listeners when the component unmounts.
  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const cleanupSubtitle = setupTextHover(subtitleRef.current, "subtitle");

    const cleanupTitle = setupTextHover(titleRef.current, "title");

    return () => {
      cleanupSubtitle?.();
      cleanupTitle?.();
    };
  });

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {rendertext(
          "Hey, I'm Faiz! Welcome to my",
          "text-3xl font-georama",
          100,
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {rendertext("Portfolio", "text-9xl italic font-georama", 400)}
      </h1>

      <div className="small-screen">
        <p>This portfolio is designed for desktop and tablet screens.</p>
      </div>
    </section>
  );
};

export default Welcome;
