import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable, useGSAP);

const RESIZABLE_WINDOWS = ["imgfile", "txtfile"];

const MIN_WIDTH = 280;
const MIN_HEIGHT = 180;

const HANDLES = [
  "top",
  "bottom",
  "left",
  "right",
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex, data } = windows[windowKey];

    const ref = useRef(null);
    const isResizable = RESIZABLE_WINDOWS.includes(windowKey);

    // Opening animation
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        },
      );
    }, [isOpen]);

    // Drag the window by its header
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      const header = el.querySelector("#window-header");
      if (!header) return;

      const [instance] = Draggable.create(el, {
        trigger: header,
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, [isOpen, data]);

    // Resize from all four edges and four corners
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || !isResizable) return;

      const cleanups = [];

      HANDLES.forEach((side) => {
        const handle = el.querySelector(`[data-resize="${side}"]`);

        if (!handle) return;

        let startX = 0;
        let startY = 0;
        let startWidth = 0;
        let startHeight = 0;
        let startLeft = 0;
        let startTop = 0;

        const [instance] = Draggable.create(handle, {
          trigger: handle,
          onPress() {
            focusWindow(windowKey);

            const rect = el.getBoundingClientRect();

            startX = this.pointerX;
            startY = this.pointerY;
            startWidth = rect.width;
            startHeight = rect.height;

            // Capture the existing GSAP translation.
            const transform = gsap.getProperty(el, "translateX");
            const translateY = gsap.getProperty(el, "translateY");

            startLeft = Number(transform) || 0;
            startTop = Number(translateY) || 0;
          },

          onDrag() {
            const dx = this.pointerX - startX;
            const dy = this.pointerY - startY;

            let width = startWidth;
            let height = startHeight;
            let left = startLeft;
            let top = startTop;

            if (side.includes("right")) {
              width = Math.max(MIN_WIDTH, startWidth + dx);
            }

            if (side.includes("bottom")) {
              height = Math.max(MIN_HEIGHT, startHeight + dy);
            }

            if (side.includes("left")) {
              width = Math.max(MIN_WIDTH, startWidth - dx);
              left = startLeft + startWidth - width;
            }

            if (side.includes("top")) {
              height = Math.max(MIN_HEIGHT, startHeight - dy);
              top = startTop + startHeight - height;
            }

            el.style.width = `${width}px`;
            el.style.height = `${height}px`;

            // Preserve the opposite edge while resizing.
            if (side.includes("left")) {
              gsap.set(el, { x: left });
            }

            if (side.includes("top")) {
              gsap.set(el, { y: top });
            }
          },
        });

        cleanups.push(() => instance.kill());
      });

      return () => cleanups.forEach((cleanup) => cleanup());
    }, [isOpen, isResizable, data]);

    // Show/hide window
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    const handleFocus = () => {
      if (isOpen) focusWindow(windowKey);
    };

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{
          zIndex,
          position: "absolute",
          ...(isResizable
            ? {
                resize: "none",
                overflow: "visible",
                minWidth: "280px",
                minHeight: "180px",
              }
            : {}),
        }}
        className="absolute"
        onMouseDown={handleFocus}
        onTouchStart={handleFocus}
      >
        {isResizable &&
          HANDLES.map((side) => (
            <div
              key={side}
              data-resize={side}
              className={`window-resize-handle resize-${side}`}
            />
          ))}

        <div className="window-content">
          <Component {...props} />
        </div>
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
