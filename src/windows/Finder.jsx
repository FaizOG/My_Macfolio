import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import clsx from "clsx";
import { Search } from "lucide-react";

import { WindowControls } from "#components";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";

gsap.registerPlugin(Draggable, useGSAP);

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const contentRef = useRef(null);

  // Make only the Finder content items draggable
  useGSAP(
    () => {
      const instances = Draggable.create(".finder-item", {
        bounds: contentRef.current,
        edgeResistance: 0.8,
        inertia: false,

        onPress() {
          this.target.dataset.dragging = "true";
        },

        onRelease() {
          delete this.target.dataset.dragging;
        },
      });

      return () => {
        instances.forEach((instance) => instance.kill());
      };
    },
    {
      scope: contentRef,
      dependencies: [activeLocation],
      revertOnUpdate: true,
    },
  );

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");

    if (item.kind === "folder") {
      return setActiveLocation(item);
    }

    if (["fig", "url"].includes(item.fileType) && item.href) {
      return window.open(item.href, "_blank");
    }

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (items = []) =>
    items.map((item) => (
      <li
        key={item.id}
        onClick={() => setActiveLocation(item)}
        className={clsx(
          item.id === activeLocation?.id ? "active" : "not-active",
        )}
      >
        <img src={item.icon} className="w-4" alt={item.name} />
        <p className="text-sm font-medium truncate">{item.name}</p>
      </li>
    ));

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        {/* Sidebar */}
        <div className="sidebar">
          <div>
            <h3>Favorites</h3>
            <ul>{renderList(Object.values(locations))}</ul>
          </div>

          <div>
            <h3>Work</h3>
            <ul>{renderList(locations.work.children)}</ul>
          </div>
        </div>

        {/* Finder content */}
        <ul className="content" ref={contentRef}>
          {(activeLocation?.children ?? []).map((item) => (
            <li
              key={item.id}
              className={clsx("finder-item", item.position)}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
