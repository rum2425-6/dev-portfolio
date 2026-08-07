import { FaCss3Alt } from "react-icons/fa";
import {
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const techs = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Docker", icon: <SiDocker /> },
];

export default function TechMarquee() {
  const list = [...techs, ...techs];

  return (
    <div className="relative z-10 overflow-hidden border-y border-white/10 py-8">
      <div className="absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-dark to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-dark to-transparent" />

      <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-12 hover:[animation-play-state:paused]">
        {list.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-300"
          >
            <span className="text-3xl">{item.icon}</span>
            <span className="font-mono text-sm">{item.name}</span>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
}
