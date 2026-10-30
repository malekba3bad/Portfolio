import React from "react";
import { FiFigma } from "react-icons/fi";
import {
  SiVisualstudiocode,
  SiAdobexd,
  SiSlack,
  SiVercel,
  SiPostman,
  SiAdobephotoshop,
  SiNpm,
  SiNotion,
  SiXampp,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "Figma", icon: <FiFigma /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "npm", icon: <SiNpm /> },
    { name: "Notion", icon: <SiNotion /> },
    { name: "XAMPP", icon: <SiXampp /> },
    { name: "Slack", icon: <SiSlack /> },
    { name: "Adobe XD", icon: <SiAdobexd /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
  ];

  return (
    <div className="editorial-tech-ledger">
      {tools.map((tool, idx) => (
        <div key={tool.name} className="ledger-item">
          <span className="ledger-idx">
            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
          </span>
          <span className="ledger-icon">{tool.icon}</span>
          <span className="ledger-name">{tool.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
