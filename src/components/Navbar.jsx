import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { navLinks, navIcons } from "#constants";
import useWindowStore from "#store/window";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());
  const { openWindow, closeAllWindows } = useWindowStore();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      <div>
        <img
          src="/public/images/logo.svg"
          alt="Logo"
          className="cursor-pointer"
          onClick={closeAllWindows}
        />

        <p className="font-semibold">Faiz's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{currentTime.format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
