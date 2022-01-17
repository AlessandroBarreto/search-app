import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/images", text: "📸 Images" },
  { url: "/videos", text: "📺 Videos" },
];

export const Links = () => {
  const { pathname } = useLocation();

  const selectedUrl = (url) => {
    if (pathname === url)
      return "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 ";
  };

  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, index) => (
        <NavLink
          key={index}
          to={url}
          className={`${selectedUrl(url)} m-2 mb-0`}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};
