import React from "react";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMysql,
} from "react-icons/si";
import { FaWordpress, FaBootstrap, FaLaravel } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { DiJavascript1, DiReact, DiGit } from "react-icons/di";

function Techstack() {
  const techs = [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React.js", icon: <DiReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Git & GitHub", icon: <DiGit /> },
    { name: "WordPress", icon: <FaWordpress /> },
    { name: "Technical SEO", icon: <TbSeo /> },
  ];

  return (
    <div className="editorial-tech-ledger">
      {techs.map((tech, idx) => (
        <div key={tech.name} className="ledger-item">
          <span className="ledger-idx">
            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
          </span>
          <span className="ledger-icon">{tech.icon}</span>
          <span className="ledger-name">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
