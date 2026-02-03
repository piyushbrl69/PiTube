// data/projects.ts
import { StaticImageData } from 'next/image';
import scamImage from "./scam.png";
import portImg from "./port.png";
import dataImg from "./data.png";
import landingImg from "./la.png";
import todoImg from "./todo.png";
import catImg from "./image.png";

export interface Card {
  id: number;
  img1:  string;
  title: string;
  img2: string;
  views: string;
  postedAt: string;
  date: string;
  category: string[];
  description: string;
}


export const categories = [
  { label: "All", value: "all" },
  { label: "JavaScript", value: "projects" },
  { label: "React", value: "skills"},
  { label: "NextJs", value: "nextjs" },
  { label: "Tailwind", value: "tailwind" },
  { label: "CSS", value: "css"},
  { label: "Redux", value: "redux"},
  { label: "Contact", value: "contact" },
  {label: "Resume",value: "resume"}
];

export const projects: Card[] = [
  { 
    id: 1, 
    title: "Scam Sense", 
    category: ["nextjs", "tailwind"], 
    views: "1.1M views",
    // You can use local paths or external URLs
    img1: scamImage.src,
    img2: "https://yt3.googleusercontent.com/l68ZvAfp35KQ-c7poZgNTFcFdnyb5OuSnL7TsJ4j1nTWxp2MsAnSzShKxGwpa_LYWdcChz6dBA=s88-c-k-c0x00ffffff-no-rj",
    date: "6/25",
    postedAt: "4 weeks ago",
    description: "Built with Spring Boot and MySQL." 
  },
  { 
    id: 2, 
    title: "To Do List", 
    category: ["react", "css"], 
    views: "1.1M views",
      img1: todoImg.src,
      img2: "https://yt3.googleusercontent.com/l68ZvAfp35KQ-c7poZgNTFcFdnyb5OuSnL7TsJ4j1nTWxp2MsAnSzShKxGwpa_LYWdcChz6dBA=s88-c-k-c0x00ffffff-no-rj",
    date: "6/25",
    postedAt: "4 weeks ago",
    description: "A real-time data visualization tool." 
  },
  { 
    id: 3, 
    title: "Cat Fax", 
    category: ["javascript", "css"], 
    views: "1.1M views",
    img1: catImg.src,
    img2: "https://yt3.googleusercontent.com/l68ZvAfp35KQ-c7poZgNTFcFdnyb5OuSnL7TsJ4j1nTWxp2MsAnSzShKxGwpa_LYWdcChz6dBA=s88-c-k-c0x00ffffff-no-rj",
    date: "6/25",
    postedAt: "4 weeks ago",
    description: "A real-time data visualization tool." 
  },
  { 
    id: 4, 
    title: "Portfolio", 
    category: ["nextjs", "tailwind"], 
    views: "1.1M views",
    img1: portImg.src,
    img2: "https://yt3.googleusercontent.com/l68ZvAfp35KQ-c7poZgNTFcFdnyb5OuSnL7TsJ4j1nTWxp2MsAnSzShKxGwpa_LYWdcChz6dBA=s88-c-k-c0x00ffffff-no-rj",
    date: "6/25",
    postedAt: "4 weeks ago",
    description: "A real-time data visualization tool." 
  },
  { 
    id: 5, 
    title: "PTube", 
    category: ["nextjs", "tailwind"], 
    views: "1.1M views",
    img1: portImg.src,
    img2: "https://yt3.googleusercontent.com/l68ZvAfp35KQ-c7poZgNTFcFdnyb5OuSnL7TsJ4j1nTWxp2MsAnSzShKxGwpa_LYWdcChz6dBA=s88-c-k-c0x00ffffff-no-rj",
    date: "6/25",
    postedAt: "4 weeks ago",
    description: "A real-time data visualization tool." 
  },
  { 
    id: 6, 
    title: "Data Table Manager", 
    category: ["react", "redux"], 
    views: "1.1M views",
    img1: dataImg.src,
    img2: "https://yt3.googleusercontent.com/l68ZvAfp35KQ-c7poZgNTFcFdnyb5OuSnL7TsJ4j1nTWxp2MsAnSzShKxGwpa_LYWdcChz6dBA=s88-c-k-c0x00ffffff-no-rj",
    date: "6/25",
    postedAt: "4 weeks ago",
    description: "A real-time data visualization tool." 
  },
  { 
    id: 7, 
    title: "Web Craft", 
    category: ["nextjs", "tailwind"], 
    views: "1.1M views",
    img1: landingImg.src,
    img2: "https://yt3.googleusercontent.com/l68ZvAfp35KQ-c7poZgNTFcFdnyb5OuSnL7TsJ4j1nTWxp2MsAnSzShKxGwpa_LYWdcChz6dBA=s88-c-k-c0x00ffffff-no-rj",
    date: "6/25",
    postedAt: "4 weeks ago",
    description: "A real-time data visualization tool." 
  },
];