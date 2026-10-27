import { dockApps } from "#constants";
import { Tooltip } from "react-tooltip";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "#store/window";

const Dock = () => {
  const { windows, openWindow, closeWindow, focusWindow } = useWindowStore();
  const dockRef = useRef(null);

  useGSAP(
    () => {
      const dock = dockRef.current;
      if (!dock) return;

      const dockIcons = dock.querySelectorAll(".dock-icon");

      const animateIcons = (mouseX) => {
        dockIcons.forEach((dockIcon) => {
          const { left, width } = dockIcon.getBoundingClientRect();
          const center = left + width / 2;
          const distance = Math.abs(mouseX - center);
          const intensity = Math.exp(-(distance ** 3) / 20000);

          gsap.to(dockIcon, {
            scale: 1 + 0.25 * intensity,
            y: -15 * intensity,
            duration: 0.2,
            ease: "power1.out",
            overwrite: "auto",
          });
        });
      };

      const handleMouseMove = (event) => {
        animateIcons(event.clientX);
      };

      const resetIcons = () => {
        gsap.to(dockIcons, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
          overwrite: "auto",
        });
      };

      dock.addEventListener("mousemove", handleMouseMove);
      dock.addEventListener("mouseleave", resetIcons);

      return () => {
        dock.removeEventListener("mousemove", handleMouseMove);
        dock.removeEventListener("mouseleave", resetIcons);
        gsap.killTweensOf(dockIcons);
      };
    },
    { scope: dockRef },
  );

  const toggleApp = (app) => {
    if (!app.canOpen) return;

    const currentWindow = windows[app.id];

    if (!currentWindow) return;

    if (currentWindow.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  return (
    <section
      id="dock"
      className="absolute bottom-5 left-1/2 z-50
                 -translate-x-1/2 select-none max-sm:hidden"
    >
      <div
        ref={dockRef}
        className="flex items-end justify-between gap-1.5
                   rounded-2xl bg-white/20 p-1.5
                   backdrop-blur-md"
      >
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id ?? name} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon size-14 shrink-0
                         cursor-pointer disabled:cursor-not-allowed
                         3xl:size-20"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`public/images/${icon}`}
                alt=""
                loading="lazy"
                draggable={false}
                className={`size-full object-contain ${
                  canOpen ? "" : "opacity-60"
                }`}
              />
            </button>
          </div>
        ))}

        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
