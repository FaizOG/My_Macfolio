const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/public/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/public/icons/search.svg",
  },
  {
    id: 3,
    img: "/public/icons/user.svg",
  },
  {
    id: 4,
    img: "/public/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: false,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "public/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "public/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "public/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  // {
  //   category: "Backend",
  //   items: ["Node.js", "Express", "NestJS", "Hono"],
  // },
  // {
  //   category: "Database",
  //   items: ["MongoDB", "PostgreSQL"],
  // },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "./public/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/FaizOG",
  },
  // {
  //   id: 2,
  //   text: "Platform",
  //   icon: "./public/icons/atom.svg",
  //   bg: "#4bcb63",
  //   link: "https://jsmastery.com/",
  // },
  // {
  //   id: 3,
  //   text: "Twitter/X",
  //   icon: "./public/icons/twitter.svg",
  //   bg: "#ff866b",
  //   link: "https://x.com/jsmasterypro",
  // },
  {
    id: 4,
    text: "LinkedIn",
    icon: "./public/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/faiz-devs/?isSelfProfile=true",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "public/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "public/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "public/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "public/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "public/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "./public/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1

    {
      id: 7,
      name: "Finovo | Finance",
      icon: "./public/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "finance Project.txt",
          icon: "./public/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Finovo is a personal finance management web application designed to help users organize their money and manage their finances more effectively.",
            "Users can create unlimited accounts and track their income and expenses, making it easier to keep their financial activities organized in one place.",
            "Instead of managing finances manually, users can view all their transactions in a single dashboard and get a clearer picture of their spending habits.",
            "Users can create and manage financial goals to plan their future expenses, stay focused on their targets, and monitor their progress.",
            "They can also set monthly budgets for different spending categories, track their expenses, and manage their spending more consciously.",
            "The idea behind Finovo came from my own experience of struggling with personal money management. I started building it as a learning project while trying to solve a real-life problem I was facing.",
            "Building Finovo gave me an opportunity to improve my development skills by creating something practical and meaningful rather than just following tutorials.",
            "The project is currently on hold due to financial challenges in my family, and some bugs and improvements still need attention. Despite that, Finovo remains an important learning experience and a project I hope to continue improving in the future.",
          ],
        },
        {
          id: 2,
          name: "finovo-finance.com",
          icon: "./public/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://finovo-faiz5.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Finovo Dashboard POV.png",
          icon: "./public/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "./public/images/Finovo.png", // Need Change
        },
      ],
    },
    // ▶ Project 2
    {
      id: 8,
      name: "YouTube Clone (Only for Laptop)",
      icon: "./public/images/folder.png",
      kind: "folder",
      position: "top-60 left-80",
      windowPosition: "top-[63vh] left-70",
      children: [
        {
          id: 1,
          name: "YouTube Clone.txt",
          icon: "./public/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "My YouTube Clone is a modern video-browsing experience inspired by YouTube's familiar and intuitive interface.",
            "Instead of a static layout, it features a dynamic video feed where the displayed video content changes every time you reload the page.",
            "Think of it as a mini version of YouTube—bringing video discovery, familiar navigation, and engaging visuals into one place.",
            "It's built with HTML, SCSS, and JavaScript, showcasing a clean design, and interactive frontend functionality.",
          ],
        },
        {
          id: 2,
          name: "MyYouTubeVersion.com",
          icon: "./public/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://you-tube-faiz5.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "youtube.png",
          icon: "./public/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "./public/images/youtube.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "public/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "public/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "public/images/Faiz-1.jpeg", //Need change
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "public/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "public/images/Faiz-2.jpeg", //Need change
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "public/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "public/images/Faiz-3.jpeg", //Need change
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "public/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "public/images/Faiz-1.jpeg",
      description: [
        "Hey! I’m Faiz 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript and React—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "public/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "public/images/pdf.png", //Need change (Update Resume)
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "public/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "public/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "public/images/trash-1.png", //Need change
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "public/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "public/images/trash-2.png", //Need change
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
